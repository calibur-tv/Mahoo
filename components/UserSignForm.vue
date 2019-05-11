<style lang="scss" module>
.user-sign-form {
  .header {
    text-align: center;
    margin-top: 0;
    margin-bottom: 50px;

    button,
    b {
      font-size: 18px;
      font-weight: 700;
      padding: 10px;
      color: #969696;
    }

    b {
      user-select: none;
    }

    .active {
      color: $color-main;
      border-bottom: 2px solid $color-main;
    }
  }

  .form {
    .input-group {
      overflow: hidden;
      border-radius: 4px;
      border: 1px solid #c8c8c8;
      background-color: hsla(0, 0%, 71%, 0.1);

      .input-item {
        height: 50px;
        position: relative;

        &:not(:last-child) {
          height: 51px;
          border-bottom: 1px solid #c8c8c8;
        }

        .icon {
          position: absolute;
          top: 10px;
          left: 10px;
          color: #969696;
        }

        input {
          padding: 4px 12px 4px 35px;
          height: 100%;
          width: 100%;
          background-color: transparent;
          color: #333;
        }
      }
    }

    .remember {
      margin: 15px 0;
      @extend %clearfix;

      span {
        user-select: none;
      }

      .label {
        float: left;

        span {
          margin-left: 5px;
          font-size: 15px;
          color: #969696;
        }
      }

      :global(.ivu-dropdown) {
        float: right;
      }

      .faq {
        font-size: 15px;
        color: #969696;
        cursor: pointer;
      }
    }
  }

  .social {
    text-align: center;
    margin: 0 30px;
    font-size: 0;

    ul {
      margin: -10px 0 10px;
    }

    li {
      display: inline-block;
      width: 50px;
      height: 50px;
      margin: 0 5px;
      cursor: pointer;
      vertical-align: middle;
      line-height: 50px;
    }
  }
}
</style>

<template>
  <div
    :class="$style.userSignForm"
    class="user-sign-form"
  >
    <h4 :class="$style.header">
      <button
        :class="{ [$style.active]: currentTab === 'sign-in' }"
        @click="showSignIn"
      >
        登录
      </button>
      <b>·</b>
      <button
        :class="{ [$style.active]: currentTab === 'sign-up' }"
        @click="showSignUp"
      >
        注册
      </button>
    </h4>
    <template v-if="currentTab === 'sign-in'">
      <div :class="$style.form">
        <div :class="$style.inputGroup">
          <div :class="$style.inputItem">
            <!--<v-icon-->
            <!--:class="$style.icon"-->
            <!--size="18"-->
            <!--name="user"-->
            <!--/>-->
            <input
              v-model.trim="signIn.account"
              type="text"
              placeholder="手机号或邮箱"
            >
          </div>
          <div :class="$style.inputItem">
            <!--<v-icon-->
            <!--:class="$style.icon"-->
            <!--size="18"-->
            <!--name="password"-->
            <!--/>-->
            <input
              v-model.trim="signIn.password"
              type="password"
              placeholder="密码"
            >
          </div>
        </div>
        <div :class="$style.remember">
          <label
            :class="$style.label"
            for="remember_me"
          >
            <input
              id="remember_me"
              v-model="signIn.rememberMe"
              type="checkbox"
            >
            <span>记住我</span>
          </label>
        </div>
        <el-button
          :loading="signIn.submitting"
          @click="actionLogin"
        >
          登录
        </el-button>
      </div>
      <div :class="$style.social">
        <!--<v-hr>社交账号登录</v-hr>-->
        <ul>
          <li>
            <!--<v-icon-->
            <!--name="qq_connect"-->
            <!--size="28"-->
            <!--/>-->
          </li>
          <li>
            <!--<v-icon-->
            <!--name="douban"-->
            <!--size="28"-->
            <!--/>-->
          </li>
        </ul>
      </div>
    </template>
    <template v-else>
      sign up
    </template>
  </div>
</template>

<script>
export default {
  name: 'UserSignForm',
  props: {
    tab: {
      type: String,
      default: 'sign-in',
      validator: val => ~['sign-in', 'sign-up'].indexOf(val)
    }
  },
  data() {
    return {
      currentTab: this.tab,
      signIn: {
        rememberMe: true,
        account: '',
        password: '',
        submitting: false
      }
    }
  },
  methods: {
    async actionLogin() {
      if (!this.signIn.account) {
        this.$toast.warn('账号不能为空')
        return
      }
      if (!this.signIn.password) {
        this.$toast.warn('密码不能为空')
        return
      }
      if (this.signIn.submitting) {
        return
      }
      this.signIn.submitting = true
      try {
        await this.$axios.post('...', {
          signInId: this.signIn.account,
          password: this.signIn.password
        })
        this.$toast.success('登录成功').then(() => {
          window.location = '/'
        })
      } catch (e) {
        this.$toast.error(e.message)
      } finally {
        this.signIn.submitting = false
      }
    },
    showSignIn() {
      this.currentTab = 'sign-in'
    },
    showSignUp() {
      this.currentTab = 'sign-up'
    }
  }
}
</script>
