<style lang="scss"></style>

<template>
  <div class="pin-rec-item">
    {{ item }}
  </div>
</template>

<script>
export default {
  name: 'PinRecommendedItem',
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
