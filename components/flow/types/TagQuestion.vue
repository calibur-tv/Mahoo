<style lang="scss" module>
.tag-question {
  .content {
    .title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-self: center;
      margin-top: -4px;
      margin-bottom: 5px;
    }

    main {
      p {
        line-height: 1.8;
        font-size: 14px;
        list-style-type: circle;
      }
    }

    footer {
      margin-top: 5px;
      height: 33px;
      line-height: 33px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .meta {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

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
}
</style>

<template>
  <li :class="$style['tag-question']">
    <div :class="$style.content">
      <h2 :class="$style.title">
        <p
          class="oneline"
          v-text="item.title.text"
        />
        <template v-if="showArea">
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
        </template>
      </h2>
      <main v-if="vote && vote.data">
        <p
          v-for="(item, index) in vote.data.items"
          :key="item.id"
          v-text="`${index}. ${item.text}`"
        />
      </main>
      <footer>
        <div :class="$style.meta">
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
        </div>
        <div>
          <ElButton
            :loading="loading"
            size="mini"
            plain
            round
            type="primary"
            @click="handleDelete"
          >
            删除
          </ElButton>
          <ElButton
            :loading="loading"
            size="mini"
            plain
            round
            type="success"
            @click="handlePass"
          >
            通过
          </ElButton>
        </div>
      </footer>
    </div>
  </li>
</template>

<script>
import flowProps from '~/mixins/flowProps'

export default {
  name: 'TagQuestion',
  mixins: [flowProps],
  computed: {
    vote() {
      if (!this.item.content) {
        return null
      }
      return this.item.content.filter(_ => _.type === 'vote')[0]
    }
  },
  methods: {
    handleDelete() {
      this.$confirm('删除后不可恢复，确认要删除吗？', '提示')
        .then(() => {
          if (this.loading) {
            return
          }
          this.loading = true
          this.$axios.$post('v1/atfield/delete', {
            slug: this.slug
          })
            .then(() => {
              this.$toast.success('删除成功')
              this.$emit('remove')
            })
            .catch(err => {
              this.$toast.error(err.message)
              this.loading = false
            })
        })
        .catch(() => {})
    },
    handlePass() {
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios.$post('v1/atfield/recommended', {
        slug: this.item.slug
      })
        .then(() => {
          this.$toast.success('入库成功')
          this.$emit('remove')
        })
        .catch(err => {
          this.$toast.error(err.message)
          this.loading = false
        })
    }
  }
}
</script>
