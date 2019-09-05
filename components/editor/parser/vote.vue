<style lang="scss" module>
.vote {
  padding: 0.7em 0;

  div {
    border: 1px solid rgba(201, 201, 204, 0.48);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 15px 15px 15px 25px;

    li {
      position: relative;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      padding-right: 50px;
      padding-left: 10px;
      margin-left: -10px;
      border-radius: 5px;

      &:hover {
        background-color: $color-gray-3;
      }

      i {
        position: absolute;
        top: 10px;
        right: 10px;
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #d0d0d0;
      }

      &.selected i {
        background-color: $color-main;
        border-color: $color-main;

        &:after {
          position: absolute;
          content: '';
          top: 5px;
          left: 5px;
          width: 8px;
          height: 5px;
          border: 2px solid #fcfff4;
          border-top: none;
          border-right: none;
          background: transparent;
          transform: rotate(-45deg);
        }
      }

      .count {
        position: absolute;
        left: 0;
        top: 10%;
        height: 80%;
        border-radius: 5px;
        text-align: right;
        color: #fff;
        line-height: 32px;
        font-size: 12px;
        transition: width 500ms ease-in-out;
      }
    }

    header {
      position: relative;
      margin-bottom: 10px;
      padding-left: 10px;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 14px;
        width: 3px;
        background-color: $color-main;
      }
    }

    footer {
      margin-top: 10px;
      font-size: 13px;
      color: $color-text-3;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      button {
        padding: 5px 10px;
        border-radius: 4px;
        background-color: $color-gray-bg;

        &.active {
          background-color: $color-main;
          color: #fff;
        }
      }
    }
  }
}
</style>

<template>
  <div :class="$style.vote">
    <div>
      <header>投票（{{ item.data.max_select === 1 ? '单选' : `最多选${item.data.max_select}个` }}）</header>
      <ul>
        <li v-for="(option, index) in item.data.items" :key="option.id" :class="{ [$style.selected]: checkSelected(option) }" class="oneline" @click="handleSelect(option)">
          <span :class="$style.count" :style="computeItemStyle(option, index)" v-html="stat[option.id] ? `${stat[option.id]}票&nbsp;&nbsp;` : ''" />
          <span v-html="index + 1 + '. ' + option.text" />
          <i />
        </li>
      </ul>
      <footer>
        <span>截止时间：{{ item.data.expired_at ? $utils.timeAgo(item.data.expired_at) : '无限期' }}</span>
        <button :class="{ [$style.active]: selected.length && !voted }" @click="submit">
          {{ submitting ? '提交中' : voted ? '已投过票' : '确认' }}
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JsonVote',
  props: {
    item: {
      type: Object,
      required: true
    },
    vote: {
      type: Array,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: [],
      submitting: false,
      voted: false,
      stat: [],
      maxCount: 0
    }
  },
  watch: {
    vote(val) {
      this.selected = val.map(_ => _)
      if (val.length) {
        this.voted = true
        this.getVoteStat()
      }
    }
  },
  methods: {
    getVoteStat() {
      this.$axios
        .$get('v1/pin/vote_stat', {
          params: {
            slug: this.slug
          }
        })
        .then(data => {
          this.stat = data
          this.maxCount = Math.max(...Object.values(this.stat))
        })
        .catch(() => {})
    },
    handleSelect(option) {
      const { selected, voted } = this
      if (voted) {
        return
      }
      const index = selected.indexOf(option.id)
      if (~index) {
        selected.splice(index, 1)
        return
      }
      const max = this.item.data.max_select
      if (max <= selected.length) {
        if (max === 1) {
          selected.splice(index, 1, option.id)
        }
        return
      }
      selected.push(option.id)
    },
    checkSelected(option) {
      return ~this.selected.indexOf(option.id)
    },
    submit() {
      if (this.submitting || this.voted) {
        return
      }
      if (!this.selected.length) {
        this.$toast.info('至少选择一项')
        return
      }
      if (this.item.data.expired_at && this.item.data.expired_at * 1000 < Date.now()) {
        this.$toast.info('投票已截止')
        return
      }
      this.submitting = true
      this.$axios
        .$post('v1/social/vote', {
          pin_slug: this.slug,
          answer_hash: this.selected
        })
        .then(() => {
          this.$toast.success('投票成功')
          this.voted = true
          this.getVoteStat()
        })
        .catch(err => {
          this.$toast.error(err.message)
        })
        .finally(() => {
          this.submitting = false
        })
    },
    computeItemStyle(option, index) {
      const count = this.stat[option.id] || 0
      const width = count ? `${(75 * count) / this.maxCount}%` : '0%'
      return {
        width,
        backgroundColor: this.getRandomColor(index)
      }
    },
    getRandomColor(index) {
      const colors = ['rgba(255,170,170,.5)', 'rgba(255,148,39,.5)', 'rgba(252,196,25,.5)', 'rgba(32,201,151,.5)', 'rgba(18,183,245,.5)', 'rgba(173,181,189,.5)']
      return colors[index % 6]
    }
  }
}
</script>
