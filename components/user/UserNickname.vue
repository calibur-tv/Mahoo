<style lang="scss">
.user-nickname {
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: color 0.2s ease, background-color 0.2s ease;
  float: left;
  max-width: 100%;

  &.active:hover {
    color: $color-main;
  }

  .nickname {
    overflow: hidden;
  }
}
</style>

<style lang="scss" module>
.title {
  flex-shrink: 0;
  margin-left: 5px;
}

.ic-sex {
  width: 18px;
  height: 18px;
  display: block;
  font-size: 12px;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 18px;
  font-weight: bold;
}

.ic-level {
  display: block;
  background-color: $color-orange;
  color: #fff;
  padding: 0 5px;
  border-radius: 4px;
  font-size: 12px;
  height: 16px;
  line-height: 16px;
}

.ic-title {
  display: block;
  background-color: $color-main;
  color: #fff;
  padding: 0 5px;
  border-radius: 4px;
  font-size: 12px;
  height: 16px;
  line-height: 16px;
}
</style>

<template>
  <div class="clearfix oneline">
    <div v-if="disabled" class="user-nickname">
      <div class="nickname">
        <p class="oneline" v-html="nickname || user.nickname" />
      </div>
      <span v-if="sex" :class="$style.title">
        <i class="iconfont" :class="[$style['ic-sex'], `ic-${sexClass.name}`]" :style="{ backgroundColor: sexClass.color }" />
      </span>
      <span v-if="level" :class="[$style.title, $style['ic-level']]" v-text="`Lv${user.level}`" />
      <span v-for="(item, index) in user.title" :key="index" :class="[$style.title, $style['ic-title']]" v-text="item" />
    </div>
    <NLink v-else :to="$alias.user(user.slug)" target="_blank" class="user-nickname active">
      <div class="nickname">
        <p class="oneline" v-html="nickname || user.nickname" />
      </div>
      <span v-if="sex" :class="$style.title">
        <i class="iconfont" :class="[$style['ic-sex'], `ic-${sexClass.name}`]" :style="{ backgroundColor: sexClass.color }" />
      </span>
      <span v-if="level" :class="[$style.title, $style['ic-level']]" v-text="`Lv${user.level}`" />
      <span v-for="(item, index) in user.title" :key="index" :class="[$style.title, $style['ic-title']]" v-text="item" />
    </NLink>
  </div>
</template>

<script>
export default {
  name: 'UserNickname',
  props: {
    user: {
      type: Object,
      required: true
    },
    sex: {
      type: Number,
      default: 0
    },
    level: {
      type: Boolean,
      default: true
    },
    nickname: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sexClass() {
      switch (this.sex) {
        case -1:
          return {
            name: 'simi',
            color: 'limegreen'
          }
        case 0:
          return {
            name: 'unknown',
            color: 'gold'
          }
        case 1:
          return {
            name: 'nan',
            color: 'deepskyblue'
          }
        case 2:
          return {
            name: 'nv',
            color: 'hotpink'
          }
        default:
          return {
            name: 'weizhi',
            color: 'gold'
          }
      }
    }
  }
}
</script>
