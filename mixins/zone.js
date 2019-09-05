export default {
  layout: 'web',
  head() {
    const { tag } = this
    return {
      title: tag.name,
      meta: [
        { hid: 'keywords', name: 'keywords', content: tag.alias },
        { hid: 'description', name: 'description', content: `${tag.name},${tag.intro}` },
        { hid: 'share-image', name: 'share-image', content: tag.avatar }
      ]
    }
  },
  data() {
    return {
      tag: null,
      children: null
    }
  },
  beforeMount() {
    this.patchTag()
  },
  methods: {
    patchTag() {
      this.$axios
        .$get('v1/tag/patch', {
          params: {
            slug: this.slug
          }
        })
        .then(data => {
          this.tag = this.$set(this, 'tag', Object.assign(this.tag, data))
        })
        .catch(() => {})
    }
  }
}
