<style lang="scss" module>
.pin-1 {
  &-pc {
    &-media {
      .desc {
        margin-top: -4px;
        height: 110px;

        main {
          height: 72px;
        }
      }
    }

    .title {
      font-size: 18px;
      font-weight: 600;
      font-synthesis: style;
      line-height: 30px;
      color: #1a1a1a;
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-self: center;
    }

    .media {
      display: block;
      position: relative;
      float: left;
      border-radius: 4px;
      overflow: hidden;
      width: 187px;
      height: 105px;
      margin-right: 18px;

      .text {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 33px;
        background-image: linear-gradient(-180deg,transparent,rgba(0,0,0,.2) 49%);
        font-size: 12px;
        color: #fff;
        padding: 8px 10px;

        span {
          margin-right: 10px;
        }
      }

      .badge {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: 35px;
      }

      .music {
        height: 100%;
        background-color: #d43c33;
      }

      .video {
        height: 100%;
        background-color: #00a1d6;
      }
    }

    .desc {
      overflow: hidden;

      main {
        overflow: hidden;
        @include multi-line(24px, 3);
      }

      footer {
        height: 33px;
        line-height: 33px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: 8px;

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
}
</style>

<template>
  <li :class="$style['pin-1']">
    <NLink
      :to="$alias.pin(secretLink || item.slug)"
      :class="$style['pin-1-h5']"
      class="only-h5"
    >
      {{ item.title.text }}
    </NLink>
    <div :class="[$style['pin-1-pc'], { [$style['pin-1-pc-media']]: item.media }]" class="only-pc">
      <h2 :class="$style.title">
        <NLink
          target="_blank"
          :to="$alias.pin(secretLink || item.slug)"
          class="fade-link"
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
      <div :class="$style.content" class="clearfix">
        <NLink
          v-if="item.media"
          :to="$alias.pin(secretLink || item.slug)"
          :class="$style.media"
          target="_blank"
        >
          <div v-if="item.media.first_video" :class="$style.video">
            <VImg v-if="item.media.banner" :src="item.media.banner.url" width="187" height="105" />
            <i :class="$style.badge" class="iconfont ic-bilibili" />
          </div>
          <div v-else-if="item.media.first_music" :class="$style.music">
            <VImg v-if="item.media.banner" :src="item.media.banner.url" width="187" height="105" />
            <i :class="$style.badge" class="iconfont ic-netease" />
          </div>
          <VImg v-else :src="item.media.banner.url" width="187" height="105" />
          <div :class="$style.text">
            <i class="iconfont ic-video" />
            <span v-text="item.media.video_count" />
            <i class="iconfont ic-systemprompt" />
            <span v-text="item.media.music_count" />
            <i class="iconfont ic-camera" />
            <span v-text="item.media.image_count" />
          </div>
        </NLink>
        <div :class="$style.desc">
          <main>
            <p v-html="item.intro" />
          </main>
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
      </div>
    </div>
  </li>
</template>

<script>
import flowProps from '~/mixins/flowProps'

export default {
  name: 'PinArticle',
  mixins: [flowProps]
}
</script>
