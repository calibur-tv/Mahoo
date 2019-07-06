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
    <ElRow class="container">
      <ElCol :span="4">
        &nbsp;
      </ElCol>
      <ElCol :span="15">
        <ElTree
          v-if="root"
          :props="props"
          :load="loadTags"
          node-key="slug"
          lazy
        >
          <div slot-scope="{ node, data }" class="tag">
            <a :href="`/tag/${data.slug}`" target="_blank">
              <span>{{ data.name }}</span>
            </a>
          </div>
        </ElTree>
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import { Tree } from 'element-ui'
import { showTag } from '~/api/tagApi'

export default {
  name: 'TagTree',
  layout: 'web',
  components: {
    ElTree: Tree
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
