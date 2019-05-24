<style lang="scss">
#tag-tree {
  .el-tree {
    $tree-height: 50px;
    &-node {
      &__content {
        height: 100%;
      }
    }

    .tag {
      height: 100%;
      line-height: $tree-height;
    }
  }
}
</style>

<template>
  <div id="tag-tree">
    <el-row class="container">
      <el-col :span="4">
        &nbsp;
      </el-col>
      <el-col :span="15">
        <el-tree
          v-if="root"
          :props="props"
          :load="loadTags"
          node-key="slug"
          lazy
        >
          <div slot-scope="{ node, data }" class="tag">
            <a :href="`/tag/${data.slug}`" target="_blank">
              <!--
              <img :src="data.avatar" width="30" height="30">
              -->
              <span>{{ data.name }}</span>
            </a>
          </div>
        </el-tree>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Tree } from 'element-ui'
import { showTag } from '~/api/tagApi'

export default {
  name: '',
  layout: 'web',
  components: {
    'el-tree': Tree
  },
  props: {},
  data() {
    return {
      props: {
        label: 'name',
        isLeaf: true,
        children: 'children'
      },
      root: null
    }
  },
  computed: {},
  watch: {},
  asyncData({ app, error }) {
    return showTag(app, {
      slug: '1e1'
    })
      .then(root => {
        return { root }
      })
      .catch(error)
  },
  methods: {
    async loadTags(node, resolve) {
      if (node.level === 0) {
        return resolve(this.root.children)
      }
      await showTag(this, {
        slug: node.data.slug
      })
        .then(tags => {
          resolve(tags.children)
        })
    }
  }
}
</script>
