<style lang="scss" module>
.user-search-item {
  &-pc {
    .poster {
      float: left;
      margin-right: 15px;
    }

    .content {
      overflow: hidden;
      min-height: 105px;

      .title {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;

        .badge {
          display: inline-block;
          height: 22px;
          padding: 0 10px;
          border: 1px solid #979797;
          color: #979797;
          text-align: center;
          line-height: 22px;
          border-radius: 100px;
          font-size: 12px;
          margin-right: 10px;
          flex-shrink: 0;
        }

        :global(.nickname) {
          font-size: 18px;
          font-weight: 600;
          line-height: 30px;
          color: #1a1a1a;
        }
      }

      .intro {
        height: 40px;
        @include multi-line(20px);
      }

      footer {
        color: #99a2aa;
        font-size: 12px;
        margin-top: 8px;

        span {
          margin-right: 30px;
        }
      }
    }
  }

  &-h5 {
    .poster {
      float: left;
      margin-right: 10px;
    }

    .content {
      overflow: hidden;
      height: 80px;

      .title {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        .badge {
          display: inline-block;
          height: 22px;
          padding: 0 10px;
          border: 1px solid #979797;
          color: #979797;
          text-align: center;
          line-height: 22px;
          border-radius: 100px;
          font-size: 12px;
          margin-right: 8px;
          flex-shrink: 0;
        }

        :global(.nickname) {
          font-size: 18px;
          font-weight: 600;
          line-height: 30px;
          color: #1a1a1a;
        }
      }

      .intro {
        height: 30px;
        font-size: 12px;
        margin-top: 3px;
        @include multi-line(15px);
      }

      footer {
        color: #99a2aa;
        font-size: 12px;

        span {
          margin-right: 30px;
        }
      }
    }
  }
}
</style>

<template>
  <li :class="$style['user-search-item']">
    <div class="only-pc" :class="$style['user-search-item-pc']">
      <UserAvatar :class="$style.poster" :size="105" :user="item" />
      <div :class="$style.content">
        <h3 :class="$style.title">
          <span :class="$style.badge">用户</span>
          <UserNickname :user="item" />
        </h3>
        <p :class="$style.intro" v-text="item.signature" />
        <footer>
          <span>粉丝数：{{ item.followers_count || 0 }}</span>
          <span>关注数：{{ item.followers_count || 0 }}</span>
        </footer>
      </div>
    </div>
    <NLink :to="$alias.user(item.slug)" class="only-h5" :class="$style['user-search-item-h5']">
      <UserAvatar :class="$style.poster" :size="80" :user="item" />
      <div :class="$style.content">
        <h3 :class="$style.title">
          <span :class="$style.badge">用户</span>
          <UserNickname :user="item" />
        </h3>
        <p :class="$style.intro" v-text="item.signature" />
        <footer>
          <span>粉丝数：{{ item.followers_count || 0 }}</span>
          <span>关注数：{{ item.followers_count || 0 }}</span>
        </footer>
      </div>
    </NLink>
  </li>
</template>

<script>
import UserAvatar from '~/components/user/UserAvatar'
import UserNickname from '~/components/user/UserNickname'

export default {
  name: 'UserSearchItem',
  components: {
    UserAvatar,
    UserNickname
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
