<style lang="scss" module>
.pin-2 {
  margin-top: 4px;

  .poster {
    float: left;
    margin-right: 15px;

    i {
      display: block;
      width: 60px;
      height: 60px;
      background-color: #e5e9ef;
      color: #fff;
      font-size: 30px;
      line-height: 60px;
      text-align: center;
      border-radius: 5px;
    }
  }

  .content {
    height: 60px;
    overflow: hidden;

    .title {
      font-size: 18px;
      font-weight: 600;
      font-synthesis: style;
      line-height: 30px;
      color: #1a1a1a;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-self: center;
      margin-top: -4px;
      margin-bottom: 5px;
    }

    footer {
      height: 33px;
      line-height: 33px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      >* {
        display: inline-block;
        margin-right: 30px;
        color: #99a2aa;
        font-size: 12px;
        flex-shrink: 0;
      }

      a {
        flex-shrink: 1;
      }
    }
  }
}
</style>

<template>
  <li :class="$style['pin-2']">
    <NLink
      target="_blank"
      :to="$alias.pin(secretLink || item.slug)"
      :class="$style.poster"
    >
      <i class="iconfont ic-qa" />
    </NLink>
    <div :class="$style.content">
      <h2 :class="$style.title">
        <NLink
          target="_blank"
          :to="$alias.pin(secretLink || item.slug)"
          class="fade-link oneline"
          v-text="item.title.text"
        />
        <template v-if="showArea">
          <NLink
            v-if="item.area"
            :to="$alias.tag(item.area.slug)"
            target="_blank"
          >
            <VImg :src="item.area.avatar" width="24" height="24" radius="5px" />
          </NLink>
          <NLink
            v-else-if="item.topic"
            :to="$alias.tag(item.topic.slug)"
            target="_blank"
          >
            <VImg :src="item.topic.avatar" width="24" height="24" radius="5px" />
          </NLink>
        </template>
      </h2>
      <footer>
        <NLink v-if="showUser" :to="$alias.user(item.author.slug)" target="_blank" class="oneline">
          <VImg :src="item.author.avatar" radius="50%" width="24" height="24" />
          &nbsp;
          <span v-text="item.author.nickname" />
        </NLink>
        <div>
          <i class="iconfont ic-message_fill" />
          <span v-text="item.comment_count" />
        </div>
        <div>
          <i class="iconfont ic-good_fill" />
          <span v-text="item.like_count" />
        </div>
        <div>
          <i class="iconfont ic-mark_fill" />
          <span v-text="item.mark_count" />
        </div>
        <div>
          <i class="iconfont ic-browse_fill" />
          <span v-text="item.visit_count" />
        </div>
      </footer>
    </div>
  </li>
</template>

<script>
import flowProps from '~/mixins/flowProps'

export default {
  name: 'TagQuestion',
  mixins: [flowProps]
}
</script>
