export default class {
  constructor(config) {
    this.config = config
  }

  init() {
    if (typeof window === 'undefined' || typeof window.wx === 'undefined') {
      return
    }

    wx.config({
      debug: false,
      appId: this.config.appId,
      nonceStr: this.config.nonceStr,
      timestamp: this.config.timestamp,
      signature: this.config.signature,
      jsApiList: ['previewImage', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'updateTimelineShareData', 'updateAppMessageShareData']
    })

    // 初始化分享相关
    wx.ready(() => {
      // 初始化查看图片
      const allNoteImages = []
      ;[].forEach.call(document.querySelectorAll('.is-full'), imagePackage => {
        const image = imagePackage.querySelector('img')

        if (image) {
          let imageSrc = image.getAttribute('origin-src')

          if (imageSrc.match(/^\/\//)) {
            imageSrc = `http:${imageSrc}`
          }

          allNoteImages.push(imageSrc)

          imagePackage.addEventListener('click', () => {
            wx.previewImage({
              current: imageSrc,
              urls: allNoteImages
            })
          })
        }
      })

      wx.updateTimelineShareData({
        title: this.getShareTitle(),
        link: this.getShareLink(),
        imgUrl: this.getShareImage(),
        success: () => {}
      })

      wx.updateAppMessageShareData({
        title: this.getShareTitle(),
        desc: this.getShareDesc(),
        link: this.getShareLink(),
        imgUrl: this.getShareImage(),
        type: 'link',
        success: () => {}
      })

      wx.onMenuShareTimeline({
        title: this.getShareTitle(),
        link: this.getShareLink(),
        imgUrl: this.getShareImage(),
        success: () => {}
      })

      wx.onMenuShareAppMessage({
        title: this.getShareTitle(),
        desc: this.getShareDesc(),
        link: this.getShareLink(),
        imgUrl: this.getShareImage(),
        type: 'link',
        success: () => {}
      })
    })
  }

  getShareTitle() {
    return this.shareData().title
  }

  getShareLink() {
    return this.shareData().link
  }

  getShareDesc() {
    return this.shareData().desc
  }

  getShareImage() {
    return this.shareData().image
  }

  shareData() {
    const image = document.querySelector('[name=share-image]')
    return {
      link: window.location.href,
      title: document.title,
      desc: document.querySelector('[name=description]').content,
      image: image ? `${image.content.startsWith('http') ? image.content : `https://m1.calibur.tv/${image.content}`}-sharejpg120` : 'http://m1.calibur.tv/default-poster-sharejpg120'
    }
  }
}
