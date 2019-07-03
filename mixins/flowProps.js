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
    showArea: {
      type: Boolean,
      default: true
    },
    secretLink: {
      type: String,
      default: ''
    }
  }
}
