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
        position: relative;
        font-size: 14px;
        height: 30px;
        line-height: 30px;

        i {
          position: absolute;
          left: 0;
          top: 0;
          color: $color-blue;
          font-size: 30px;
          font-weight: bold;
        }
      }

      .selectable {
        cursor: pointer;
        border-radius: 5px;
        margin-left: -10px;
        padding-left: 10px;

        &:hover {
          background-color: $color-gray-3;
        }
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
          v-text="(number > -1 ? `${number}. ` : '') + item.title.text"
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
          v-for="(option, index) in vote.data.items"
          :key="option.id"
          :class="{ [$style['selectable']]: !showControl }"
          @click="handleSelect(option)"
        >
          <i v-if="item.selected_id && item.selected_id === option.id" class="iconfont ic-right" />
          {{ order(index) }}. {{ option.text }}
        </p>
      </main>
      <footer>
        <div :class="$style.meta">
          <span>出题人：</span>
          <NLink :to="$alias.user(item.author.slug)" target="_blank" class="oneline">
            <VImg :src="item.author.avatar" radius="50%" width="24" height="24" />
            &nbsp;
            <span v-text="item.author.nickname" />
          </NLink>
          <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
          <time v-text="$utils.timeAgo(item.created_at)" />
        </div>
        <div v-if="showControl">
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
            v-if="!item.recommended_at"
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
  props: {
    showControl: {
      type: Boolean,
      default: false
    },
    number: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      loading: false,
      submitting: false
    }
  },
  computed: {
    vote() {
      if (!this.item.content) {
        return null
      }
      return this.item.content.filter(_ => _.type === 'vote')[0]
    }
  },
  methods: {
    order(index) {
      return ['A', 'B', 'C', 'D'][index]
    },
    handleDelete() {
      this.$confirm('删除后不可恢复，确认要删除吗？', '提示')
        .then(() => {
          if (this.loading) {
            return
          }
          this.loading = true
          this.$axios.$post('v1/atfield/delete', {
            slug: this.item.slug
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
      this.$axios.$post('v1/atfield/recommend', {
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
    },
    handleSelect(option) {
      if (this.showControl) {
        return
      }
      if (this.item.selected_id) {
        this.$toast.info('暂不支持修改已选项')
        return
      }
      if (this.submitting) {
        return
      }
      this.submitting = true
      this.$axios.$post('v1/social/vote', {
        pin_slug: this.item.slug,
        answer_hash: [option.id]
      })
        .then(() => {
          this.$emit('select', {
            id: this.item.slug,
            result: option.id
          })
        })
        .catch(err => {
          this.$toast.error(err.message)
        })
        .finally(() => {
          this.submitting = false
        })
    }
  }
}
</script>
