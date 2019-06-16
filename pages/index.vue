<style lang="scss">
#page-index {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: #000;

  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }

  h1 {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    color: #fff;
    user-select: none;
    font: bold 200% Consolas, Monaco, monospace;
    border-right: 0.1em solid;
    width: 16em;
    margin: 2em 1em;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 3s steps(24, end),
    cursor-blink 0.3s step-end infinite alternate;
    font-size: 14px;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes cursor-blink {
    50% {
      border-color: transparent;
    }
  }

  p {
    position: absolute;
    left: 50%;
    bottom: 20px;
    color: $color-text-2;
    font-size: 12px;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
    user-select: none;
  }

  button {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translateX(-50%);
    padding: 12px 30px;
    height: 50px;
    font-size: 16px;
    text-align: center;
    border-radius: 25px;
    color: #fff;
    background-color: $color-blue;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }

  div {
    pointer-events: none;
    user-select: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    text-align: center;
    color: #fff;
    line-height: 1.7;
    min-width: 300px;
  }
}
</style>

<template>
  <div id="page-index">
    <canvas />
    <h1>calibur.tv is never gone.</h1>
    <div>
      （按住鼠标在页面拖动，体验动画效果）
      <br>
      calibur.tv 为游戏开发者提供专业级的特效技术支持
      <br>
      我们会在网站上定期公布付费模块，支持线上支付购买代码（支付渠道开通中）
      <br>
      并在技术交流群中定期发布免费模块，欢迎游戏开发者加入（QQ群：106402736）
      <br>
      更多专业级动画特效敬请期待
    </div>
    <button @click="$toast.info('支付渠道开通中')">
      下载动画源码
    </button>
    <p>互联网 ICP 备案：沪 ICP 备 17050785 号 - 1</p>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  beforeMount() {
    import('~/assets/js/webGL')
  }
}
</script>
