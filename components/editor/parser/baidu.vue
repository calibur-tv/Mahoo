<style lang="scss" module>
.baidu {
  padding: 0.7em 0;

  a {
    display: block;
    background-color: #fff;
    border: 1px solid rgba(201, 201, 204, 0.48);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 25px;

    &:hover {
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.16);
    }
  }

  .logo {
    float: left;
    width: 65px;
    height: 65px;
    line-height: 70px;
    border-radius: 3px;
    background-color: #09aaff;
    color: #fff;
    font-weight: bold;
    font-style: normal;
    text-align: center;
    font-size: 40px;
    margin-right: 20px;
  }

  .content {
    overflow: hidden;
    height: 65px;
    line-height: 65px;
  }
}
</style>

<template>
  <div :class="$style.baidu">
    <a :href="item.data.url" target="_blank">
      <i :class="$style.logo" class="iconfont ic-baidu-cloud" />
      <div :class="$style.content">
        <template v-if="item.data.visit_type !== 0 && !reward">
          密码投食后可见
        </template>
        <template v-else> 密码：{{ item.data.password }} </template>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'JsonBaidu',
  props: {
    item: {
      type: Object,
      required: true
    },
    reward: {
      type: Boolean,
      required: true
    }
  }
}
</script>
