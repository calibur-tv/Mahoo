<style lang="scss">
.user-nickname {
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 768px) {
    float: left;
  }

  .nickname {
    overflow: hidden;
  }

  .badge {
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

  .ic-badge {
    display: block;
    background-color: $color-main;
    color: #fff;
    padding: 0 5px;
    border-radius: 4px;
    font-size: 12px;
    height: 16px;
    line-height: 16px;
  }
}
</style>

<template>
  <div class="clearfix">
    <div
      v-if="disabled"
      class="user-nickname"
    >
      <div class="nickname">
        <p class="oneline" v-text="nickname || user.nickname" />
      </div>
      <span
        v-if="sex"
        class="badge"
      >
        <i class="iconfont ic-sex" :class="`ic-${sexClass.name}`" :style="{ backgroundColor: sexClass.color }" />
      </span>
      <span
        v-if="level"
        class="badge ic-level"
        v-text="`Lv${user.level}`"
      />
      <template v-if="badge">
        <span
          v-for="(item, index) in user.roles"
          :key="index"
          class="badge ic-badge"
          v-text="item"
        />
      </template>
    </div>
    <nuxt-link
      v-else
      :to="$alias.user(user.slug)"
      class="user-nickname"
    >
      <div class="nickname">
        <p class="oneline" v-text="nickname || user.nickname" />
      </div>
      <span
        v-if="sex"
        class="badge"
      >
        <i class="iconfont ic-sex" :class="`ic-${sexClass.name}`" :style="{ backgroundColor: sexClass.color }" />
      </span>
      <span
        v-if="level"
        class="badge ic-level"
        v-text="`Lv${user.level}`"
      />
      <template v-if="badge">
        <span
          v-for="(item, index) in user.roles"
          :key="index"
          class="badge ic-badge"
          v-text="item"
        />
      </template>
    </nuxt-link>
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
    badge: {
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
