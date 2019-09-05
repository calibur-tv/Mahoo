<style lang="scss">
.join-card {
  position: relative;
  min-height: 150px;
  overflow: hidden;

  @include pc() {
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }

  .bg {
    position: absolute;
    width: 100%;
    height: 150px;
    left: 0;
    top: 0;
    z-index: -1;

    @include h5() {
      .img {
        width: 100% !important;
      }
    }

    .poster {
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }

  .content {
    padding: 20px;
    height: 150px;

    .name {
      color: #fff;
      font-size: 20px;
      margin-bottom: 5px;
    }

    .desc {
      height: 40px;
      color: #fff;
      margin-bottom: 5px;
      @include multi-line(20px);
    }
  }

  .footer {
    padding: 10px 15px;
  }
}
</style>

<template>
  <div class="join-card">
    <div class="bg">
      <VImg class="poster" :src="tag.avatar" width="250" height="150" />
    </div>
    <div class="content">
      <h1 class="name oneline" v-html="tag.name" />
      <p class="desc" v-text="tag.intro || '暂无简介'" />
      <JoinZoneBtn :slug="tag.slug" />
    </div>
    <div class="footer">
      <span>成员数：{{ tag.seen_user_count }}人</span>
    </div>
  </div>
</template>

<script>
import JoinZoneBtn from '~/components/button/JoinZoneBtn'

export default {
  name: 'JoinCard',
  components: {
    JoinZoneBtn
  },
  props: {
    tag: {
      type: Object,
      required: true
    }
  }
}
</script>
