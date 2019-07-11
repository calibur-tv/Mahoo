<style lang="scss">
#zone-topic {
  .left-aside {
    .child-node {
      margin-top: 20px;
      margin-right: 10px;

      li {
        padding: 10px;
        border-radius: 5px;

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
  <div id="zone-topic">
    <ElRow class="container">
      <ElCol
        class="left-aside"
        :span="5"
      >
        <Affix :top="50">
          <ul
            v-if="children.length"
            class="child-node"
          >
            <li
              v-for="item in children.slice(0, 10)"
              :key="item.slug"
              class="node"
            >
              <NLink :to="`/tag/${item.slug}`" target="_blank">
                <VImg :src="item.avatar" width="32" height="32" :alt="item.name" />
                <span v-text="item.name" />
              </NLink>
            </li>
          </ul>
          &nbsp;
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
  name: 'ZoneTopic',
  components: {
    PinFlowList,
    Affix
  },
  mixins: [ZoneMixin],
  data() {
    return {
      slug: process.env.TAGS.topic
    }
  },
  asyncData({ app, error }) {
    return showTag(app, {
      slug: process.env.TAGS.topic
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
