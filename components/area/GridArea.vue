<style lang="scss">
.grid-area {
  min-height: 400px;

  .v-switcher {
    &-header {
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      &-item {
        position: relative;
        font-size: 12px;
        padding: 1px 0 2px;
        transition: 0.2s;
        transition-property: border, color;
        border-bottom: 1px solid transparent;
        line-height: 20px !important;
        height: 24px !important;
        cursor: pointer;
        color: #000;

        &:hover {
          color: $color-main;
        }

        &:not(:first-child) {
          margin-left: 12px;
        }

        &.is-active {
          border-bottom-color: $color-main;
          color: $color-main;

          &:after {
            content: '';
            position: absolute;
            left: 50%;
            margin-left: -3px;
            bottom: 0;
            width: 0;
            height: 0;
            border-bottom: 3px solid $color-main;
            border-top: 0;
            border-left: 3px dashed transparent;
            border-right: 3px dashed transparent;
          }
        }
      }
    }
  }

  .area-left {
    .v-switcher {
      &-header {
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        &-item {
          position: relative;
          font-size: 12px;
          padding: 1px 0 2px;
          transition: 0.2s;
          transition-property: border, color;
          border-bottom: 1px solid transparent;
          line-height: 20px !important;
          height: 24px !important;
          cursor: pointer;
          color: #000;

          &:hover {
            color: $color-main;
          }

          &:not(:first-child) {
            margin-left: 12px;
          }

          &.is-active {
            border-bottom-color: $color-main;
            color: $color-main;

            &:after {
              content: '';
              position: absolute;
              left: 50%;
              margin-left: -3px;
              bottom: 0;
              width: 0;
              height: 0;
              border-bottom: 3px solid $color-main;
              border-top: 0;
              border-left: 3px dashed transparent;
              border-right: 3px dashed transparent;
            }
          }
        }

        &-before {
          a {
            font-size: 24px;
            line-height: 24px;
            font-weight: 400;
            margin-right: 20px;
            color: #222;
          }
        }

        &-after {
          .more {
            display: block;
            width: 52px;
            height: 22px;
            background-color: #fff;
            border: 1px solid #ccd0d7;
            color: #555;
            border-radius: 4px;
            text-align: center;
            margin: 0 0 0 10px;
            transition: all 0.2s;
            font-size: 12px;

            i {
              font-weight: bold;
              margin-left: -4px;
              margin-right: -4px;
              transition: margin-left 0.2s;
            }

            &:hover {
              background-color: #ccd0d7;

              i {
                margin-left: -1px;
              }
            }
          }
        }

        &-wrap {
          margin-bottom: 15px;
        }
      }
    }
  }

  .area-right {
    .v-switcher {
      &-header {
        &-before {
          font-size: 18px;
          font-weight: 400;
          margin-right: 20px;
        }
      }
    }
  }

  .pin-rank-list {
    margin-top: -5px;
  }
}
</style>

<template>
  <div v-lazyload:pc="handle" class="area-wrap grid-area">
    <div class="area-right">
      <VSwitcher :headers="['三日', '一周']" header-trigger="hover" :animated="true" @change="switchRank">
        <template slot="header-before">
          排行
        </template>
        <template slot="0">
          <PinRankList ref="rank3" :slug="slug" time="3-day" :take="7" />
        </template>
        <template slot="1">
          <PinRankList ref="rank7" :slug="slug" time="7-day" :take="7" :auto="false" />
        </template>
      </VSwitcher>
    </div>
    <div class="area-left">
      <VSwitcher :headers="headers" @change="switchContent">
        <template slot="header-before">
          <NLink class="title fade-link" :to="$alias.tag(slug)" target="_blank" v-text="name" />
        </template>
        <template slot="header-after">
          <NLink class="more" :to="$alias.tag(slug)" target="_blank">
            <span>更多</span>
            <i class="el-icon-arrow-right" />
          </NLink>
        </template>
        <template slot="0">
          <PinGridList ref="active" :slug="slug" sort="active" />
        </template>
        <template slot="1">
          <PinGridList ref="newest" :slug="slug" sort="newest" :auto="false" />
        </template>
      </VSwitcher>
    </div>
  </div>
</template>

<script>
import PinGridList from '~/components/flow/PinGridList'
import PinRankList from '~/components/flow/PinRankList'

export default {
  name: 'GridArea',
  components: {
    PinGridList,
    PinRankList
  },
  props: {
    slug: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    headers() {
      return ['有新动态', '最新投稿']
    }
  },
  methods: {
    switchContent(index) {
      if (index === 1) {
        this.$refs.newest.initData()
      }
    },
    switchRank(index) {
      if (index === 1) {
        this.$refs.rank7.initData()
      }
    },
    handle() {
      this.$refs.rank3.initData()
      this.$refs.active.initData()
    }
  }
}
</script>
