<template>
  <div class="json-content">
    <component
      :is="`v-${item.type}`"
      v-for="(item, index) in content"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import Copyright from '~/assets/js/copyright'
import header from './parser/header'
import image from './parser/image'
import paragraph from './parser/paragraph'
import list from './parser/list'
import delimiter from './parser/delimiter'
import checklist from './parser/checklist'
import link from './parser/link'
import embed from './parser/embed'

export default {
  name: 'JsonContent',
  components: {
    'v-header': header,
    'v-image': image,
    'v-paragraph': paragraph,
    'v-list': list,
    'v-delimiter': delimiter,
    'v-checklist': checklist,
    'v-link': link,
    'v-embed': embed
  },
  props: {
    content: {
      required: true,
      type: Array
    }
  },
  mounted() {
    const copyright = new Copyright()
    copyright.bind(this.$el)
  }
}
</script>
