<style lang="scss" module>
.checklist {
  padding: 0.7em 0;

  i,
  em {
    float: left;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 10px 10px 10px 0;
    border-radius: 50%;
    border: 1px solid #d0d0d0;
  }

  i {
    position: relative;
    background-color: $color-main;
    border-color: $color-main;

    &:after {
      position: absolute;
      content: '';
      top: 5px;
      left: 5px;
      width: 8px;
      height: 5px;
      border: 2px solid #fcfff4;
      border-top: none;
      border-right: none;
      background: transparent;
      transform: rotate(-45deg);
    }
  }

  div {
    font-size: 14px;
    line-height: 1.5;
    display: block;
    color: $color-text-1;
    padding: 10px 0;
    overflow: hidden;
  }
}
</style>

<template>
  <ul :class="$style.checklist">
    <li v-for="(option, index) in item.data.items" :key="index">
      <i v-if="option.checked" />
      <em v-else />
      <div v-html="option.text" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'JsonChecklist',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
