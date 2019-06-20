<style lang="scss">
#page-index {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .logo {
      margin-right: 10px;
      font-size: 0;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        user-select: none;
      }
    }

    .title {
      user-select: none;
      font: bold 200% Consolas, Monaco, monospace;
      border-right: 0.1em solid;
      width: 15em;
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
  }

  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }

  .beian {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    color: $color-text-2;
    font-size: 12px;
    width: 100%;
    text-align: center;
    user-select: none;
  }
}
</style>

<template>
  <div id="page-index">
    <div class="header">
      <div class="logo">
        <img :src="$resize('default-poster', { width: 32 })" alt="calibur">
      </div>
      <h1 class="title">
        calibur.tv is never gone.
      </h1>
    </div>
    <canvas />
    <p class="beian">
      互联网 ICP 备案：沪 ICP 备 17050785 号 - 1
    </p>
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
