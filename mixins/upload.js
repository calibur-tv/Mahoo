export default {
  data() {
    return {
      uploadHeaders: {
        key: '',
        token: ''
      },
      uploadConfig: {
        max: 5
      },
      uploadImageLimit: 20,
      imageUploadAccept: [
        'image/jpeg',
        'image/png',
        'image/jpg'
      ].join(', '),
      imageUploadAction: 'https://upload.qiniup.com',
      imagePrefix: 'http://pr04zzjnf.bkt.clouddn.com',
      getUpTokenTimer: 0,
      uploadPending: 0,
      uploadImageTotal: 0,
      uploadImageList: []
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.user
    }
  },
  mounted() {
    this.getUpToken()
    this.getUpTokenTimer = setInterval(() => {
      this.getUpToken()
    }, 1000 * 60 * 30)
  },
  beforeDestroy() {
    this.getUpTokenTimer && clearInterval(this.getUpTokenTimer)
  },
  methods: {
    async getUpToken() {
      try {
        this.uploadHeaders.token = await this.$axios.get('v1/image/uptoken')
      } catch (e) {
        // do nothing
      }
    },
    handleImageUploadError(err, file) {
      this.uploadImageList.forEach((item, index) => {
        if (item.uid === file.uid) {
          this.uploadPending--
          this.uploadImageList.splice(index, 1)
          console.log(err)
        }
      })
      this.$toast.error(`图片：${file.name} 上传失败`)
    },
    handleImageUploadRemove(file) {
      this.uploadImageList.forEach((item, index) => {
        if (item.uid === file.uid) {
          this.uploadImageList.splice(index, 1)
          this.uploadImageTotal--
        }
      })
    },
    handleImageUploadSuccess(res, file) {
      this.uploadImageList.forEach((item, index) => {
        if (item.uid === file.uid) {
          this.uploadImageList[index] = Object.assign(item, {
            data: res.data,
            status: 'success',
            // url: this.$resize(`${this.imagePrefix}${res.data.url}`, {
            //   width: 100
            // }),
            url: `${this.imagePrefix}/${res.data.url}`
          })
        }
      })
      this.uploadImageTotal++
      this.uploadPending--
    },
    handleImageUploadExceed() {
      this.$toast.warn(`最多还能上传${this.uploadImageLimit - this.uploadImageTotal}张图片`)
    },
    handleImageUploadBefore(file) {
      if (!this.currentUser) {
        this.$channel.$emit('sign-in')
        return false
      }

      if (this.imageUploadAccept.split(', ').indexOf(file.type) === -1) {
        this.$toast.error(
          `仅支持上传${this.imageUploadAccept
            .replace(/image\//g, '')
            .replace(/, /g, '、')}格式的图片`
        )
        return false
      }
      if (this.uploadConfig.max && this.uploadConfig.max < file.size / 1024 / 1024) {
        this.$toast.error(`图片大小不能超过 ${this.uploadConfig.max}MB!`)
        return false
      }

      const createFileName = ({ slug, file }) => {
        return `${slug}/${new Date().getTime()}-${Math.random()
          .toString(36)
          .substring(3, 6)}.${file.type.split('/').pop()}`
      }

      this.uploadHeaders.key = createFileName({
        slug: this.currentUser.slug,
        file
      })

      this.uploadImageList.push({
        name: file.name,
        percentage: 0,
        raw: file,
        size: file.size,
        status: 'uploading',
        errMsg: '',
        uid: file.uid
      })
      this.uploadPending++

      return true
    }
  }
}
