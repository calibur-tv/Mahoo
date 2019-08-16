<style lang="scss" module>
.pin-article {
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
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .badge {
        display: inline-block;
        height: 22px;
        padding: 0 10px;
        border: 1px solid #979797;
        color: #979797;
        text-align: center;
        line-height: 20px;
        border-radius: 100px;
        font-size: 12px;
        margin-right: 10px;
        flex-shrink: 0;
        float: left;
        order: 1;
      }

      .link {
        order: 2;
        flex-grow: 1;
        font-size: 0;

        a {
          display: inline-block;
          color: #1a1a1a;
          font-size: 18px;
          font-weight: 600;
          line-height: 30px;
          max-width: 100%;
        }
      }

      .area {
        margin-left: 10px;
        font-size: 0;
        order: 3;
        float: right;
      }
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

  &-h5 {
    header {
      :global(.img) {
        margin-right: 2px;
      }

      span {
        font-weight: bold;
      }

      .badge {
        display: inline-block;
        height: 22px;
        line-height: 20px;
        padding: 0 10px;
        border: 1px solid #979797;
        color: #979797;
        text-align: center;
        border-radius: 100px;
        font-size: 12px;
        margin-right: 2px;
        flex-shrink: 0;
      }
    }

    main {
      margin-top: 10px;
      margin-bottom: 10px;
      height: 90px;

      .media {
        display: block;
        position: relative;
        float: right;
        border-radius: 4px;
        overflow: hidden;
        width: 130px;
        height: 90px;
        margin-left: 10px;

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

      p {
        display: block;
        overflow: hidden;
        @include multi-line(22.5px, 4)
      }
    }

    footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: $color-text-2;

      >* {
        flex-grow: 1;
      }

      .zone {
        max-width: 20%;
      }

      i {
        color: $color-icon-2;
      }
    }
  }
}
</style>

<template>
  <li :class="$style['pin-article']">
    <NLink
      :to="$alias.pin(secretLink || item.slug)"
      :class="$style['pin-article-h5']"
      class="only-h5"
    >
      <header class="oneline">
        <VImg v-if="showUser" :src="item.author.avatar" radius="50%" width="24" height="24" />
        <span :class="$style.badge" v-text="item.badge" />
        <span v-html="item.title.text" />
      </header>
      <main>
        <div v-if="item.media" :class="$style.media">
          <div v-if="item.media.first_video" :class="$style.video">
            <VImg v-if="item.media.banner" :src="item.media.banner.url" :blur="true" width="130" height="90" />
            <i :class="$style.badge" class="iconfont ic-bilibili" />
          </div>
          <div v-else-if="item.media.first_music" :class="$style.music">
            <VImg v-if="item.media.banner" :src="item.media.banner.url" :blur="true" width="130" height="90" />
            <i :class="$style.badge" class="iconfont ic-netease" />
          </div>
          <VImg v-else :src="item.media.banner.url" :blur="true" width="130" height="90" />
        </div>
        <p v-html="item.intro" />
      </main>
      <footer>
        <span v-if="showArea" :class="$style.zone" class="oneline">
          {{ item.area ? item.area.name : item.topic ? item.topic.name : '' }}
        </span>
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
    </NLink>
    <div :class="[$style['pin-article-pc'], { [$style['pin-article-pc-media']]: item.media }]" class="only-pc">
      <h2 :class="$style.title">
        <span :class="$style.badge" v-text="item.badge" />
        <div v-if="showArea" :class="$style.area">
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
        </div>
        <p :class="$style.link" class="oneline">
          <NLink
            target="_blank"
            :to="$alias.pin(secretLink || item.slug)"
            class="fade-link oneline"
            v-html="item.title.text"
          />
        </p>
      </h2>
      <div :class="$style.content" class="clearfix">
        <NLink
          v-if="item.media"
          :to="$alias.pin(secretLink || item.slug)"
          :class="$style.media"
          target="_blank"
        >
          <div v-if="item.media.first_video" :class="$style.video">
            <VImg v-if="item.media.banner" :src="item.media.banner.url" :blur="true" width="187" height="105" />
            <i :class="$style.badge" class="iconfont ic-bilibili" />
          </div>
          <div v-else-if="item.media.first_music" :class="$style.music">
            <VImg v-if="item.media.banner" :src="item.media.banner.url" :blur="true" width="187" height="105" />
            <i :class="$style.badge" class="iconfont ic-netease" />
          </div>
          <VImg v-else :src="item.media.banner.url" :blur="true" width="187" height="105" />
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
