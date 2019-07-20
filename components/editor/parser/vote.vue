<style lang="scss" module>
.vote {
  padding: 0.7em 0;

  div {
    border: 1px solid rgba(201, 201, 204, 0.48);
    box-shadow: 0 1px 3px rgba(0,0,0, .1);
    border-radius: 6px;
    padding: 15px 15px 15px 25px;

    li {
      position: relative;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      padding-right: 50px;
      padding-left: 10px;
      margin-left: -10px;
      border-radius: 5px;

      &:hover {
        background-color: $color-gray-3;
      }

      i {
        position: absolute;
        top: 10px;
        right: 10px;
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #d0d0d0;
      }

      &.selected i {
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
    }

    header {
      position: relative;
      margin-bottom: 10px;
      padding-left: 10px;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 14px;
        width: 3px;
        background-color: $color-main;
      }
    }

    footer {
      margin-top: 10px;
      font-size: 13px;
      color: $color-text-3;
    }
  }
}
</style>

<template>
  <div :class="$style.vote">
    <div>
      <header>投票（{{ item.data.max_select === 1 ? '单选' : `最多选${item.data.max_select}个` }}）</header>
      <ul>
        <li
          v-for="(option, index) in item.data.items"
          :key="option.id"
          :class="{ [$style.selected]: checkSelected(option) }"
          class="oneline"
          @click="handleSelect(option)"
        >
          <span v-text="(index + 1) + '. ' + option.text" />
          <i />
        </li>
      </ul>
      <footer>
        <span>截止时间：{{ item.data.expired_at ? $utils.timeAgo(item.data.expired_at) : '无限期' }}</span>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JsonVote',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selected: []
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleSelect(option) {
      const { selected } = this
      const index = selected.indexOf(option.id)
      if (~index) {
        selected.splice(index, 1)
        return
      }
      const max = this.item.data.max_select
      if (max <= selected.length) {
        if (max === 1) {
          selected.splice(index, 1, option.id)
        }
        return
      }
      selected.push(option.id)
    },
    checkSelected(option) {
      return ~this.selected.indexOf(option.id)
    }
  }
}
</script>
