export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    showUser: {
      type: Boolean,
      default: true
    },
    showZone: {
      type: Boolean,
      default: true
    },
    relationZone: {
      type: String,
      default: ''
    },
    secretLink: {
      type: String,
      default: ''
    }
  },
  computed: {
    showTopic() {
      if (!this.showZone || !this.item.topic) {
        return false
      }
      return this.item.topic.slug !== this.relationZone
    },
    showArea() {
      if (!this.showZone || !this.item.area) {
        return false
      }
      return this.item.area.slug !== this.relationZone
    }
  }
}
