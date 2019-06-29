<style lang="scss">
#tag-show {
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
        display: inline-block;
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
  }
}
</style>

<template>
  <div id="tag-show">
    <el-row class="container">
      <el-col
        class="left-aside"
        :span="5"
      >
        <affix :top="50">
          <ul
            v-if="children.length"
            class="child-node"
          >
            <li
              v-for="item in children.slice(0, 10)"
              :key="item.slug"
              class="node"
            >
              <nuxt-link :to="`/tag/${item.slug}`">
                <v-img :src="item.avatar" width="32" height="32" :alt="item.name" />
                <span v-text="item.name" />
              </nuxt-link>
            </li>
          </ul>
          &nbsp;
        </affix>
      </el-col>
      <el-col :span="14" class="main-wrap">
        <p>当前标签</p>
        {{ tag.name }}
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
      </el-col>
      <el-col :span="5">
        <affix :top="50">
          <div>
            当前标签活跃用户
          </div>
          <div>
            <create-tag-btn :parent="slug" text="分区" @create="handleCreate" />
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
        </affix>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as API from '~/api/tagApi'
import Affix from '~/components/common/Affix'
import CreateTagBtn from '~/components/button/CreateTagBtn'

export default {
  name: 'TagShow',
  components: {
    Affix,
    CreateTagBtn
  },
  head() {
    const { tag } = this
    return {
      title: tag.name,
      meta: [
        { hid: 'keywords', name: 'keywords', content: tag.alias },
        { hid: 'description', name: 'description', content: `${tag.name},${tag.intro}` }
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
    return API.showTag(app, params)
      .then(data => {
        return { ...data }
      })
      .catch(error)
  },
  layout: 'web',
  created() {},
  mounted() {},
  methods: {
    handleCreate(data) {
      this.children.push(data)
      this.$toast.success('标签创建成功')
    },
    combineTag() {
      console.log('combineTag') // eslint-disable-line
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
