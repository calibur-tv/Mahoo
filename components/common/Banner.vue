<style lang="scss">
#banner {
  position: relative;
  height: 186px;
  background-color: #F1F3F4;
  overflow: hidden;

  .indicator {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .carousel {
    position: relative;
    font-size: 0;
    height: 100%;
  }

  .carousel-item {
    display: inline-block;
    width: 300px;
    height: 100%;
    font-size: 30px;
    transition: transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .carousel-enter,
  .carousel-leave-to {
    transform: translateX(-300px);
  }
  .carousel-leave-active {
    position: absolute;
  }
}
</style>

<template>
  <section id="banner" @mouseenter="mouseInner = true" @mouseleave="mouseInner = false">
    <transition-group name="carousel" tag="ul" class="carousel" :style="{ width: `${300 * list.length}px` }">
      <li
        v-for="(item, index) in list"
        :key="item.id"
        :style="{ backgroundColor: item.color }"
        class="carousel-item"
        @click="handleClick(index)"
      >
        {{ item.text }}
      </li>
    </transition-group>
    <div class="indicator">
      <button @click="slide(false)">
        prev
      </button>
      <button @click="slide(true)">
        next
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      timer: 0,
      mouseInner: false,
      list: [
        {
          color: 'rgba(21,174,103, 0.5)',
          id: 'a',
          text: 'a'
        },
        {
          color: 'rgba(245,163,59, 0.5)',
          id: 'b',
          text: 'b'
        },
        {
          color: 'rgba(255,230,135, 0.5)',
          id: 'c',
          text: 'c'
        },
        {
          color: 'rgba(194,217,78, 0.5)',
          id: 'd',
          text: 'd'
        },
        {
          color: 'rgba(195,123,177, 0.5)',
          id: 'e',
          text: 'e'
        },
        {
          color: 'rgba(21,174,103, 0.5)',
          id: 'f',
          text: 'f'
        },
        {
          color: 'rgba(245,163,59, 0.5)',
          id: 'g',
          text: 'g'
        },
        {
          color: 'rgba(255,230,135, 0.5)',
          id: 'h',
          text: 'h'
        },
        {
          color: 'rgba(194,217,78, 0.5)',
          id: 'i',
          text: 'i'
        },
        {
          color: 'rgba(195,123,177, 0.5)',
          id: 'j',
          text: 'j'
        }
      ]
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.autoplay()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    handleClick(index) {},
    slide(toNext = true) {
      const insertItem = Object.assign(toNext ? this.list[0] : this.list[this.list.length - 1], {
        id: Date.now()
      })
      if (toNext) {
        this.list.push(insertItem)
        this.list.splice(0, 1)
      } else {
        this.list.unshift(insertItem)
        this.list.splice(this.list.length - 1, 1)
      }
    },
    autoplay() {
      this.timer = setInterval(() => {
        if (this.mouseInner) {
          return
        }
        this.slide()
      }, 3000)
    }
  }
}
</script>
