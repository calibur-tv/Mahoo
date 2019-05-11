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
          <button @click="removeTag">
            删除标签
          </button>
          <button @click="redirectTag">
            重定向标签
          </button>
          <button @click="updateTag">
            更新标签
          </button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { show, create } from '~/api/tag'

export default {
  name: 'TagTree',
  components: {},
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
    return show(app, {
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
          create(this, {
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
    removeTag() {
      console.log('removeTag')
    },
    redirectTag() {
      console.log('redirectTag')
    },
    updateTag() {
      console.log('updateTag')
    }
  }
}
</script>
