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
      float: left;
      border-radius: 4px;
      overflow: hidden;

      :global(.img) {
        margin-right: 18px;
      }

      .music {
        background-color: #d43c33;
        width: 105px;
        height: 105px;
        text-align: center;

        i {
          color: #fff;
          font-size: 50px;
          line-height: 105px;
        }
      }

      .video {
        background-color: #00a1d6;
        width: 190px;
        height: 105px;
        text-align: center;

        i {
          color: #fff;
          font-size: 50px;
          line-height: 105px;
        }
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
        <div v-if="item.media" :class="$style.media">
          <nuxt-link
            v-if="item.media.type === 'image'"
            target="_blank"
            :to="$alias.pin(secretLink || item.slug)"
          >
            <v-img :src="item.media.data.url" width="190" height="105" />
          </nuxt-link>
          <div v-else-if="item.media.type === 'video'" :class="$style.video">
            <i class="iconfont ic-video" />
          </div>
          <div v-else-if="item.media.type === 'music'" :class="$style.music">
            <i class="iconfont ic-music" />
          </div>
        </div>
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
