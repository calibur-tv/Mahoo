<style lang="scss">
.tag-hot-list {
  @include phone() {
    height: 70px;
    overflow: hidden;
    background-color: $color-gray-bg;
  }

  .title {
    margin: 0 5px 10px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    i {
      font-weight: bold;
    }
  }

  .child-node {
    @include phone() {
      white-space: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      height: 110%;
      padding-bottom: 10%;
      box-sizing: content-box;
    }

    li {
      border-radius: 5px;

      @include pc() {
        cursor: pointer;
        padding: 10px;

        &:hover {
          background-color: #f6f6f6;
        }
      }

      @include phone() {
        margin: 10px;
        display: inline-block;
        white-space: nowrap;

        &:not(:first-child) {
          margin-left: 0;
        }
      }
    }

    img {
      border-radius: 5px;
      @include pc() {
        margin-right: 5px;
        width: 32px !important;
        height: 32px !important;
      }
    }

    span {
      font-size: 14px;
    }

    a {
      display: block;
    }
  }
}
</style>

<template>
  <div
    v-if="list.length"
    class="tag-hot-list"
  >
    <h3 class="title only-pc">
      <span v-text="title" />
      <CreateTagBtn v-if="isAdmin" :parent="slug" @create="handleCreate">
        <i class="el-icon-plus fade-link" />
      </CreateTagBtn>
    </h3>
    <ul class="child-node">
      <li
        v-for="item in list.slice(0, 10)"
        :key="item.slug"
        class="node"
      >
        <NLink :to="`/tag/${item.slug}`">
          <img :src="$resize(item.avatar, { width: 50 })" width="50" height="50" :alt="item.name" />
          <span class="only-pc" v-text="item.name" />
        </NLink>
      </li>
    </ul>
  </div>
</template>

<script>
import CreateTagBtn from '~/components/button/CreateTagBtn'

export default {
  name: 'TagHotList',
  components: {
    CreateTagBtn
  },
  props: {
    slug: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: '热门分区'
    },
    list: {
      type: Array,
      required: true
    }
  },
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin
    }
  },
  methods: {
    handleCreate(data) {
      this.list.unshift(data)
      this.$toast.success('创建成功')
    }
  }
}
</script>
