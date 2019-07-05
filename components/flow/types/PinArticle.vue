<style lang="scss" module>
.pin-1 {
  &:not(:first-child) {
    border-top: 1px solid #f0f2f7;
    padding-top: 20px;
    margin-top: 20px;
  }

  &-pc {
    .title {
      font-size: 18px;
      font-weight: 600;
      font-synthesis: style;
      line-height: 1.6;
      color: #1a1a1a;
      margin-bottom: 10px;
    }

    .media {
      display: block;
      position: relative;
      float: left;
      border-radius: 4px;
      overflow: hidden;
      width: 190px;
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
    }
  }
}
</style>

<template>
  <div :class="$style['pin-1']">
    <nuxt-link
      :to="$alias.pin(secretLink || item.slug)"
      :class="$style['pin-1-h5']"
      class="only-h5"
    >
      {{ item.title.text }}
    </nuxt-link>
    <div :class="$style['pin-1-pc']" class="only-pc">
      <h2 :class="$style.title">
        <nuxt-link
          target="_blank"
          :to="$alias.pin(secretLink || item.slug)"
          class="fade-link"
          v-text="item.title.text"
        />
      </h2>
      <div :class="$style.content" class="clearfix">
        <nuxt-link
          v-if="item.media"
          :to="$alias.pin(secretLink || item.slug)"
          :class="$style.media"
          target="_blank"
        >
          <div v-if="item.media.first_video" :class="$style.video">
            <v-img v-if="item.media.banner" :src="item.media.banner.url" width="190" height="105" />
            <i :class="$style.badge" class="iconfont ic-bilibili" />
          </div>
          <div v-else-if="item.media.first_music" :class="$style.music">
            <v-img v-if="item.media.banner" :src="item.media.banner.url" width="190" height="105" />
            <i :class="$style.badge" class="iconfont ic-netease" />
          </div>
          <v-img v-else :src="item.media.banner.url" width="190" height="105" />
          <div :class="$style.text">
            <i class="iconfont ic-video" />
            <span v-text="item.media.video_count" />
            <i class="iconfont ic-systemprompt" />
            <span v-text="item.media.music_count" />
            <i class="iconfont ic-camera" />
            <span v-text="item.media.image_count" />
          </div>
        </nuxt-link>
        <div :class="$style.desc">
          {{ item.intro }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flowProps from '~/mixins/flowProps'

export default {
  name: 'PinArticle',
  mixins: [flowProps]
}
</script>
