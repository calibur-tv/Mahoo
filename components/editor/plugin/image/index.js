/**
 * Image Tool for the Editor.js
 * @author CodeX <team@ifmo.su>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */

/**
 * @typedef {object} ImageToolData
 * @description Image Tool's input and output data format
 * @property {string} caption — image caption
 * @property {boolean} withBorder - should image be rendered with border
 * @property {boolean} withBackground - should image be rendered with background
 * @property {boolean} stretched - should image be stretched to full width of container
 * @property {object} file — Image file data returned from backend
 * @property {string} file.url — image URL
 */

// eslint-disable-next-line
import './index.scss';
import Ui from './ui'
import Tunes from './tunes'
import Uploader from './uploader'

/**
 * @typedef {object} ImageConfig
 * @description Config supported by Tool
 * @property {object} endpoints - upload endpoints
 * @property {string} endpoints.byFile - upload by file
 * @property {string} endpoints.byUrl - upload by URL
 * @property {string} field - field name for uploaded image
 * @property {string} types - available mime-types
 * @property {string} captionPlaceholder - placeholder for Caption field
 * @property {object} additionalRequestData - any data to send with requests
 * @property {object} additionalRequestHeaders - allows to pass custom headers with Request
 * @property {string} buttonContent - overrides for Select File button
 * @property {object} [uploader] - optional custom uploader
 * @property {function(File): Promise.<UploadResponseFormat>} [uploader.uploadByFile] - method that upload image by File
 * @property {function(string): Promise.<UploadResponseFormat>} [uploader.uploadByUrl] - method that upload image by URL
 */

/**
 * @typedef {object} UploadResponseFormat
 * @description This format expected from backend on file uploading
 * @property {number} success - 1 for successful uploading, 0 for failure
 * @property {object} file - Object with file data.
 *                           'url' is required,
 *                           also can contain any additional data that will be saved and passed back
 * @property {string} file.url - [Required] image source URL
 */
export default class ImageTool {
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon:
        '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z"/></svg>',
      title: '图片'
    }
  }

  /**
   * @param {ImageToolData} data - previously saved data
   * @param {ImageConfig} config - user config for Tool
   * @param {object} api - Editor.js API
   */
  constructor({ data, config, api }) {
    this.api = api

    /**
     * Tool's initial config
     */
    this.config = {
      endpoints: config.endpoints || '',
      additionalRequestData: config.additionalRequestData || {},
      additionalRequestHeaders: config.additionalRequestHeaders || {},
      field: config.field || 'image',
      types: config.types || 'image/*',
      captionPlaceholder: config.captionPlaceholder || 'Caption',
      buttonContent: config.buttonContent || '',
      uploader: config.uploader || undefined
    }

    /**
     * Module for file uploading
     */
    this.uploader = new Uploader({
      config: this.config,
      onUpload: response => this.onUpload(response),
      onError: error => this.uploadingFailed(error)
    })

    /**
     * Module for working with UI
     */
    this.ui = new Ui({
      api,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: src => {
            this.ui.showPreloader(src)
          }
        })
      }
    })

    /**
     * Module for working with tunes
     */
    this.tunes = new Tunes({
      api,
      onChange: tuneName => this.tuneToggled(tuneName)
    })

    /**
     * Set saved state
     */
    this._data = {}
    this.data = data
  }

  /**
   * Renders Block content
   * @public
   *
   * @return {HTMLDivElement}
   */
  render() {
    return this.ui.render(this.data)
  }

  /**
   * Return Block data
   * @public
   *
   * @return {ImageToolData}
   */
  save() {
    const caption = this.ui.nodes.caption

    this._data.caption = caption.innerHTML

    return this.data
  }

  /**
   * Makes buttons with tunes: add background, add border, stretch image
   * @public
   *
   * @return {Element}
   */
  renderSettings() {
    return this.tunes.render(this.data)
  }

  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   * @public
   */
  appendCallback() {
    this.ui.nodes.fileButton.click()
  }

  /**
   * Specify paste substitutes
   *
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   */
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: ['img'],

      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i
      },

      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ['image/*']
      }
    }
  }

  /**
   * Specify paste handlers
   * @public
   *
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   */
  async onPaste(event) {
    switch (event.type) {
      case 'tag':
        // eslint-disable-next-line
        const image = event.detail.data

        /** Images from PDF */
        if (image.src.startsWith('blob:')) {
          const response = await fetch(image.src)
          const file = await response.blob()

          this.uploadFile(file)
          break
        }

        this.uploadUrl(image.src)
        break

      case 'pattern':
        // eslint-disable-next-line
        const url = event.detail.data

        this.uploadUrl(url)
        break

      case 'file':
        // eslint-disable-next-line
        const file = event.detail.file

        this.uploadFile(file)
        break
    }
  }

  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */

  /**
   * Stores all Tool's data
   * @private
   *
   * @param {ImageToolData} data
   */
  set data(data) {
    this.image = data.file

    this._data.caption = data.caption || ''
    this.ui.fillCaption(this._data.caption)

    Tunes.tunes.forEach(({ name: tune }) => {
      const value = data[tune] !== undefined ? data[tune] : false

      this.setTune(tune, value)
    })
  }

  /**
   * Return Tool data
   * @private
   *
   * @return {ImageToolData} data
   */
  get data() {
    return this._data
  }

  /**
   * Set new image file
   * @private
   *
   * @param {object} file - uploaded file data
   */
  set image(file) {
    this._data.file = file || {}

    if (file && file.url) {
      this.ui.fillImage(file.url)
    }
  }

  /**
   * File uploading callback
   * @private
   *
   * @param {UploadResponseFormat} response
   */
  onUpload(response) {
    if (response.success && response.file) {
      this.image = response.file
    } else {
      this.uploadingFailed('incorrect response: ' + JSON.stringify(response))
    }
  }

  /**
   * Handle uploader errors
   * @private
   *
   * @param {string} errorText
   */
  uploadingFailed(errorText) {
    // eslint-disable-next-line
    console.log('Image Tool: uploading failed because of', errorText)

    this.api.notifier.show({
      message: '图片上传失败，请刷新网页重试',
      style: 'error'
    })
    this.ui.hidePreloader()
  }

  /**
   * Callback fired when Block Tune is activated
   * @private
   *
   * @param {string} tuneName - tune that has been clicked
   */
  tuneToggled(tuneName) {
    // inverse tune state
    this.setTune(tuneName, !this._data[tuneName])
  }

  /**
   * Set one tune
   * @param {string} tuneName - {@link Tunes.tunes}
   * @param {boolean} value - tune state
   */
  setTune(tuneName, value) {
    this._data[tuneName] = value

    this.ui.applyTune(tuneName, value)

    if (tuneName === 'stretched') {
      const blockId = this.api.blocks.getCurrentBlockIndex()

      setTimeout(() => {
        /** Wait until api is ready */
        this.api.blocks.stretchBlock(blockId, value)
      }, 0)
    }
  }

  /**
   * Show preloader and upload image file
   *
   * @param {File} file
   */
  uploadFile(file) {
    this.uploader.uploadByFile(file, {
      onPreview: src => {
        this.ui.showPreloader(src)
      }
    })
  }

  /**
   * Show preloader and upload image by target url
   *
   * @param {string} url
   */
  uploadUrl(url) {
    this.ui.showPreloader(url)
    this.uploader.uploadByUrl(url)
  }

  validate(savedData) {
    return !(!savedData.file || !savedData.file.url)
  }
}
