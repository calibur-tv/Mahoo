<style lang="scss">
.pin-rec-item {
  padding: 10px 10px 0;

  &:not(:last-child) {
    border-bottom: 10px solid $color-gray-bg;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 5px;

    .user-avatar {
      margin-right: 5px;
    }
  }

  .content {
    margin-bottom: 10px;

    .text {
      @include multi-line(20px, 3);
      margin-bottom: 5px;
    }

    .media {
      .img {
        position: relative;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 5px;
        background-color: $color-gray-bg;

        .badge {
          position: absolute;
          right: 5px;
          bottom: 5px;
          padding: 2px 5px;
          background-color: rgba(0, 0, 0, 0.6);
          color: #fff;
          border-radius: 5px;
        }
      }

      .wrap {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }

      .image-1 {
        height: 170px;

        .img {
          height: 100%;
          width: 100%;
        }
      }

      .image-2 {
        position: relative;
        height: 0;
        padding-top: 50%;

        .wrap {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          .img {
            flex-grow: 1;
            height: 100%;

            &:first-child {
              margin-right: 5px;
            }
          }
        }
      }

      .image-3 {
        position: relative;
        height: 0;
        padding-top: 66.7%;

        .wrap {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          .big {
            flex-grow: 2;
            margin-right: 5px;
          }

          .small {
            flex-grow: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .img {
              flex-grow: 1;
              width: 100%;

              &:first-child {
                margin-bottom: 5px;
              }
            }
          }

          .img {
            height: 100%;
          }
        }
      }
    }

    .zone {
      height: 21px;
      overflow: hidden;
      margin-top: 10px;
      color: $color-main-light;
      line-height: 1;

      a {
        line-height: 21px;
        padding: 3px 10px;
        margin-right: 10px;
        border-radius: 4px;
        background-color: rgba($color-main, 0.2);
        color: $color-main-light;
        font-size: 12px;
      }
    }
  }

  .footer {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    line-height: 40px;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      width: 100%;
      height: 1px;
      transform: scaleY(0.5);
      background-color: #e7ecf2;
    }

    > div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: $color-icon-2;

      i {
        margin-right: 5px;
      }
    }
  }
}
</style>

<template>
  <div class="pin-rec-item">
    <div class="header">
      <NLink :to="`/app/user?slug=${item.author.slug}`">
        <UserAvatar disabled :user="item.author" :size="30" />
      </NLink>
      <NLink :to="`/app/user?slug=${item.author.slug}`">
        <UserNickname disabled :user="item.author" />
      </NLink>
    </div>
    <div class="content">
      <NLink :to="`/app/pin?slug=${item.slug}`">
        <div class="text" v-html="item.intro" />
        <div v-if="item.media" class="media">
          <template v-if="item.media.image_count">
            <div v-if="item.media.image_count === 1" class="image-1">
              <div class="img" :style="{ backgroundImage: `url(${$resize(item.media.images[0].url, { width: 200, mode: 2 })})` }">
                <div v-if="item.media.images[0].mime === 'image/gif'" class="badge">
                  <span>GIF</span>
                </div>
              </div>
            </div>
            <div v-else-if="item.media.image_count === 2" class="image-2">
              <div class="wrap">
                <div class="img" :style="{ backgroundImage: `url(${$resize(item.media.images[0].url, { width: 200, mode: 2 })})` }">
                  <div v-if="item.media.images[0].mime === 'image/gif'" class="badge">
                    <span>GIF</span>
                  </div>
                </div>
                <div class="img" :style="{ backgroundImage: `url(${$resize(item.media.images[1].url, { width: 200, mode: 2 })})` }">
                  <div v-if="item.media.images[1].mime === 'image/gif'" class="badge">
                    <span>GIF</span>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="image-3">
              <div class="wrap">
                <div class="img big" :style="{ backgroundImage: `url(${$resize(item.media.images[0].url, { width: 300, mode: 2 })})` }">
                  <div v-if="item.media.images[0].mime === 'image/gif'" class="badge">
                    <span>GIF</span>
                  </div>
                </div>
                <div class="small">
                  <div class="img" :style="{ backgroundImage: `url(${$resize(item.media.images[1].url, { width: 150, mode: 2 })})` }">
                    <div v-if="item.media.images[1].mime === 'image/gif'" class="badge">
                      <span>GIF</span>
                    </div>
                  </div>
                  <div class="img" :style="{ backgroundImage: `url(${$resize(item.media.images[2].url, { width: 150, mode: 2 })})` }">
                    <div v-if="item.media.image_count - 3 > 0" class="badge">
                      <i class="el-icon-picture-outline" />
                      <span>+{{ item.media.image_count - 3 }}</span>
                    </div>
                    <div v-else-if="item.media.images[2].mime === 'image/gif'" class="badge">
                      <span>GIF</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </NLink>
      <div class="zone oneline">
        <NLink v-if="item.area" :to="`/app/zone?slug=${item.area.slug}`" v-text="item.area.name" />
        <NLink v-if="item.topic" :to="`/app/zone?slug=${item.topic.slug}`" v-text="item.topic.name" />
        <NLink v-if="item.notebook" :to="`/app/zone?slug=${item.notebook.slug}`" v-text="item.notebook.name" />
      </div>
    </div>
    <div class="footer">
      <div>
        <i class="iconfont ic-browse" />
        <span v-text="item.visit_count" />
      </div>
      <div>
        <i class="iconfont ic-message" />
        <span v-text="item.comment_count" />
      </div>
      <div>
        <i class="iconfont ic-good" />
        <span v-text="item.like_count" />
      </div>
    </div>
  </div>
</template>

<script>
import UserAvatar from '~/components/user/UserAvatar'
import UserNickname from '~/components/user/UserNickname'

export default {
  name: 'PinRecommendedItem',
  components: {
    UserAvatar,
    UserNickname
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
