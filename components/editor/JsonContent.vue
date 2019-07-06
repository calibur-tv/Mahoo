<template>
  <section class="json-content">
    <component
      :is="`v-${item.type}`"
      v-for="(item, index) in content"
      :key="index"
      :item="item"
    />
  </section>
</template>

<script>
import header from './parser/header'
import image from './parser/image'
import paragraph from './parser/paragraph'
import list from './parser/list'
import delimiter from './parser/delimiter'
import checklist from './parser/checklist'
import link from './parser/link'
import video from './parser/video'
import music from './parser/music'
import Copyright from '~/assets/js/copyright'

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
    'v-video': video,
    'v-music': music
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
