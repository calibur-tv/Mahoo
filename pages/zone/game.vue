<style lang="scss">
#zone-game {
  .left-aside {
    margin-right: 10px;

    .title {
      margin: 20px 0 10px 10px;
    }

    .child-node {
      li {
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
          background-color: #f6f6f6;
        }
      }

      .img {
        border-radius: 5px;
        margin-right: 5px;
      }

      span {
        font-size: 14px;
      }

      a {
        display: block;
      }
    }
  }

  .main-wrap {
    background-color: $color-gray-bg;
    padding: 20px;
    box-shadow: 0 3px 3px rgba(26,26,26,.1) inset;
    margin-top: -$page-header-hgt;
    padding-top: $page-header-hgt + 20;
    min-height: 100vh;
  }
}
</style>

<template>
  <div id="zone-game">
    <ElRow class="container">
      <ElCol :span="5">
        <Affix class="left-aside" :top="50">
          <h3 class="title">
            热门游戏
          </h3>
          <ul
            v-if="children.length"
            class="child-node"
          >
            <li
              v-for="item in children.slice(0, 10)"
              :key="item.slug"
              class="node"
            >
              <NLink :to="`/tag/${item.slug}`">
                <VImg :src="item.avatar" width="32" height="32" :alt="item.name" />
                <span v-text="item.name" />
              </NLink>
            </li>
          </ul>
        </Affix>
      </ElCol>
      <ElCol :span="14" class="main-wrap">
        <PinFlowList :slug="slug" />
      </ElCol>
      <ElCol :span="5">
        <!--
        <Affix :top="50">
          <div>
            当前标签活跃用户
          </div>
        </Affix>
        -->
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import ZoneMixin from '~/mixins/zone'
import { showTag } from '~/api/tagApi'
import Affix from '~/components/common/Affix'
import PinFlowList from '~/components/flow/PinFlowList'

export default {
  name: 'ZoneGame',
  components: {
    Affix,
    PinFlowList
  },
  mixins: [ZoneMixin],
  data() {
    return {
      slug: process.env.TAGS.game
    }
  },
  asyncData({ app, error }) {
    return showTag(app, {
      slug: process.env.TAGS.game
    })
      .then(data => {
        return { ...data }
      })
      .catch(error)
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
