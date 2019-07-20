<style lang="scss">
.tag-hot-list {
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
    li {
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #f6f6f6;
      }
    }

    .img {
      border-radius: 5px;
      margin-right: 5px;
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
  <div class="tag-hot-list">
    <h3 class="title">
      <span v-text="title" />
      <CreateTagBtn v-if="isAdmin" :parent="slug" @create="handleCreate">
        <i class="el-icon-plus fade-link" />
      </CreateTagBtn>
    </h3>
    <ul
      v-if="list.length"
      class="child-node"
    >
      <li
        v-for="item in list.slice(0, 10)"
        :key="item.slug"
        class="node"
      >
        <NLink :to="`/tag/${item.slug}`">
          <VImg :src="item.avatar" width="32" height="32" :alt="item.name" />
          <span v-text="item.name" />
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
