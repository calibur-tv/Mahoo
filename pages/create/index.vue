<style lang="scss">
#create-layout {
  .v-switcher-vertical {
    margin-right: 15px;
    margin-top: 27px;

    .v-switcher {
      &-header-wrap {
        width: 100%;
      }

      &-header-item {
        text-align: left;
        transition: background-color .3s ease;
        border-radius: 5px;
        padding-left: 10px;

        a {
          display: block;
          height: 100%;
          font-size: 14px;

          i {
            display: inline-block;
            width: 30px;
            font-size: 24px;
            text-align: center;
          }

          .ic-cosplay {
            font-size: 16px;
          }
        }

        &.is-active {
          background-color: $color-main !important;
          color: #fff !important;
        }

        &:hover {
          color: $color-main;
          background-color: #f4f5f7;
        }
      }
    }
  }

  .main-section {
    margin-top: 27px;
    margin-bottom: 27px;
    padding: 27px;
    background-color: #fff;
    border: 1px solid $color-gray-line;
    border-radius: 12px;
  }
}
</style>

<template>
  <div id="create-layout">
    <el-row class="container">
      <el-col :span="4">
        <affix :top="27">
          <v-switcher
            :headers="headers"
            :routable="true"
            :header-height="44"
            align="vertical"
          >
            <nuxt-link
              v-for="(item, index) in headers"
              :key="index"
              :slot="`tab-${index}`"
              :to="item.route"
            >
              <i class="iconfont" :class="`ic-${item.icon}`" />
              <span v-text="item.name" />
            </nuxt-link>
          </v-switcher>
        </affix>
      </el-col>
      <el-col :span="15">
        <nuxt-child class="main-section" :tags="tags" />
      </el-col>
      <el-col :span="5">
        &nbsp;
      </el-col>
    </el-row>
  </div>
</template>

<script>
import mustSign from '~/mixins/mustSign'
import { bookmarkTags } from '~/api/tagApi'
import Affix from '~/components/common/Affix'

export default {
  name: 'CreateLayout',
  layout: 'web',
  components: {
    Affix
  },
  mixins: [mustSign],
  data() {
    return {
      tags: [
        {
          label: '动漫',
          value: 'bangumi',
          children: []
        },
        {
          label: '游戏',
          value: 'game',
          children: []
        },
        {
          label: '话题',
          value: 'topic',
          children: []
        }
      ]
    }
  },
  computed: {
    headers() {
      return [
        {
          route: '/create/daily',
          name: '图文帖',
          icon: 'tee'
        },
        {
          route: '/create/cosplay',
          name: 'cosplay',
          icon: 'cosplay'
        },
        {
          route: '/create/atfield',
          name: 'A.T.Field',
          icon: 'timu'
        }
      ]
    }
  },
  methods: {
    userSigned() {
      this.getUserBookmarkTags()
    },
    getUserBookmarkTags() {
      bookmarkTags(this, {
        slug: this.$store.state.user.slug
      })
        .then(data => {
          Object.keys(data).forEach(type => {
            this.tags.forEach(item => {
              if (item.value === type) {
                item.children = data[type].map(_ => Object.assign(_, {
                  value: _.slug,
                  label: _.name
                }))
              }
            })
          })
        })
        .catch(() => {})
    }
  }
}
</script>
