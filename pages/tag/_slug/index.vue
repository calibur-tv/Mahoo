<style lang="scss">
</style>

<template>
  <div id="tag-show">
    <el-row class="container">
      <el-col :span="4">
        <div class="panel">
          <template v-if="parent">
            <p>父标签</p>
            <nuxt-link :to="`/tag/${parent.slug}`">
              {{ parent.name }}
            </nuxt-link>
          </template>
          <template v-if="children.length">
            <p>子标签</p>
            <nuxt-link
              v-for="item in children"
              :key="item.slug"
              :to="`/tag/${item.slug}`"
            >
              {{ item.name }}
            </nuxt-link>
          </template>
        </div>
      </el-col>
      <el-col :span="15">
        <p>当前标签</p>
        {{ tag.name }}
      </el-col>
      <el-col :span="5">
        <div class="panel">
          当前标签活跃用户
        </div>
        <div class="panel">
          <button @click="createTag">
            添加子标签
          </button>
          <button @click="combineTag">
            合并标签
          </button>
          <button @click="deleteTag">
            删除标签
          </button>
          <button @click="relinkTag">
            修改父节点
          </button>
          <nuxt-link :to="$alias.tag(slug, 'edit')">
            <button>
              更新标签
            </button>
          </nuxt-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as API from '~/api/tagApi'

export default {
  name: 'TagTree',
  components: {},
  head() {
    const { tag } = this
    return {
      title: `${tag.name} - 咔哩吧`,
      meta: [
        { hid: 'keywords', name: 'keywords', content: `${tag.alias},${process.env.META_KEYS}` }
      ]
    }
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      tag: null,
      parent: null,
      children: []
    }
  },
  computed: {},
  watch: {},
  asyncData({ app, error, params }) {
    return API.showTag(app, {
      slug: params.slug
    })
      .then(data => {
        return { ...data }
      })
      .catch(error)
  },
  layout: 'web',
  created() {},
  mounted() {},
  methods: {
    createTag() {
      this.$prompt('请输入标签名', '创建标签', {
        confirmButtonText: '提交',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          const name = value.trim()
          if (name.length > 32) {
            return this.$toast.error('名字不能超过32个字')
          }
          API.createTag(this, {
            name,
            parent_slug: this.slug
          })
            .then(data => {
              this.children.push(data)
              this.$toast.success('标签创建成功')
            })
            .catch(err => {
              this.$toast.error(err.message)
            })
        })
        .catch(() => {})
    },
    combineTag() {
      console.log('combineTag')
    },
    deleteTag() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '删除标签', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          API.deleteTag(this, {
            slug: this.slug
          })
            .then(() => {
              this.$toast.success('标签删除成功')
                .then(() => {
                  window.location.reload()
                })
            })
            .catch(err => {
              this.$toast.error(err.message)
            })
        })
        .catch(() => {})
    },
    relinkTag() {
      this.$prompt('请输入目标父节点id', '移动标签', {
        confirmButtonText: '提交',
        cancelButtonText: '取消',
        inputPattern: /^[a-z0-9]+$/i,
        inputErrorMessage: '格式不正确'
      })
        .then(({ value }) => {
          API.relinkTag(this, {
            slug: this.slug,
            target_slug: value
          })
            .then(() => {
              this.$toast.success('标签移动成功')
            })
            .catch(err => {
              this.$toast.error(err.message)
            })
        })
        .catch(() => {})
    },
    updateTag() {
      this.$prompt('请输入标签名', '更新标签', {
        confirmButtonText: '提交',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          const name = value.trim()
          if (name.length > 32) {
            return this.$toast.error('名字不能超过32个字')
          }
          API.updateTag(this, {
            name,
            slug: this.slug,
            avatar: ''
          })
            .then(() => {
              this.$toast.success('标签更新成功')
            })
            .catch(err => {
              this.$toast.error(err.message)
            })
        })
        .catch(() => {})
    }
  }
}
</script>
