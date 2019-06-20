<template>
  <div v-if="show" class="json-content">
    <component
      :is="item.type"
      v-for="(item, index) in content"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import Paragraph from './parser/Paragraph'
import ImgParser from './parser/ImgParser'
import UseParser from './parser/UseParser'
import TitleParser from './parser/TitleParser'
import ListParser from './parser/ListParser'

export default {
  name: 'JsonContent',
  components: {
    TitleParser,
    Paragraph,
    ImgParser,
    UseParser,
    ListParser
  },
  props: {
    content: {
      required: true,
      type: Array
    },
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>
