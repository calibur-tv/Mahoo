<style lang="scss">
#managers {
  @include h5() {
    padding-left: 10px;
    padding-right: 10px;
  }

  .user-list {
    margin-left: -13px;
  }

  .user-item {
    position: relative;
    float: left;
    width: 80px;
    margin-left: 13px;
    margin-right: 13px;
    margin-top: 10px;

    .nickname {
      text-align: center;
      font-size: 14px;
      line-height: 20px;
      margin-top: 5px;
    }

    .remove-btn {
      color: $color-red;
      font-size: 20px;
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;
    }
  }

  .user-plus {
    float: left;
    width: 80px;
    height: 80px;
    margin-left: 13px;
    margin-right: 13px;
    margin-top: 10px;
    text-align: center;
    line-height: 80px;
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      border-color: $color-main;
    }

    i {
      font-size: 28px;
      color: #8c939d;
    }
  }
}
</style>

<template>
  <div id="managers">
    <ElCollapse v-model="actives">
      <ElCollapseItem v-for="(users, role) in list" :key="role" :title="`${role}（${users.length}）`" :name="role">
        <ul class="user-list clearfix">
          <li v-for="user in users" :key="user.slug" class="user-item">
            <UserAvatar :size="80" :user="user" />
            <p class="nickname oneline" v-text="user.nickname" />
            <i v-if="showDelete" class="remove-btn el-icon-remove" @click="removeManager(role, user.slug)" />
          </li>
          <li v-if="showPlus" class="user-plus" @click="addManager(role)">
            <i class="el-icon-plus" />
          </li>
        </ul>
      </ElCollapseItem>
    </ElCollapse>
  </div>
</template>

<script>
import { Collapse, CollapseItem } from 'element-ui'
import UserAvatar from '~/components/user/UserAvatar'

export default {
  name: 'Managers',
  components: {
    ElCollapse: Collapse,
    ElCollapseItem: CollapseItem,
    UserAvatar
  },
  asyncData({ app, error }) {
    return app.$axios
      .$get('v1/user/managers')
      .then(list => {
        const actives = Object.keys(list)
        return { list, actives }
      })
      .catch(error)
  },
  data() {
    return {
      list: [],
      actives: []
    }
  },
  computed: {
    showPlus() {
      return this.$hasRole('add_manager')
    },
    showDelete() {
      return this.$hasRole('remove_manager')
    }
  },
  methods: {
    removeManager(role, slug) {
      this.$confirm('确认要执行该操作吗？', `移除${role}`)
        .then(() => {
          this.$axios
            .$post('v1/user/remove_manager', {
              role,
              slug
            })
            .then(() => {
              this.$toast.success('操作成功！').then(() => {
                window.location.reload()
              })
            })
            .catch(err => {
              this.$toast.error(err.message)
            })
        })
        .catch(() => {})
    },
    addManager(role) {
      this.$prompt('请输入要指定的用户cc号', `添加${role}`)
        .then(({ value }) => {
          const slug = value.trim()
          if (slug.length > 16 || slug.length < 2 || !/^([a-z0-9]|_|-)+$/i.test(slug)) {
            return this.$toast.error('错误的cc号')
          }
          this.$axios
            .$post('v1/user/add_manager', {
              role,
              slug
            })
            .then(() => {
              this.$toast.success('操作成功！').then(() => {
                window.location.reload()
              })
            })
            .catch(err => {
              this.$toast.error(err.message)
            })
        })
        .catch(() => {})
    }
  }
}
</script>
