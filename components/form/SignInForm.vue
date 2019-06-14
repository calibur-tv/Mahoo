<style lang="scss">
.sign-in-form {
  .sign-in-opt {
    margin-bottom: 10px;

    .opt-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  .submit-btn {
    width: 100%;
  }

  .others {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }

  .watch-pwd {
    position: absolute;
    right: 16px;
    top: 11px;
    font-size: 18px;
    color: $color-gray-1;
  }

  .provider {
    height: 40px;

    li {
      display: inline-block;
      margin-left: 8px;
    }

    i {
      font-size: 20px;
      vertical-align: middle;
      color: $color-text-1;
      cursor: pointer;
    }

    .ic-qq:hover {
      color: $color-blue;
    }

    .ic-v-chat:hover {
      color: $color-green;
    }
  }
}
</style>

<template>
  <div class="sign-in-form">
    <el-form ref="form" :model="form" :rules="rule">
      <el-form-item prop="access">
        <el-input
          v-model.trim="form.access"
          type="text"
          placeholder="手机（填写常用手机号，用于登录）"
        />
      </el-form-item>
      <el-form-item prop="secret">
        <el-input
          v-model.trim="form.secret"
          :type="watchPwd ? 'text' : 'password'"
          placeholder="密码（6-16个字符组成，区分大小写）"
          @keydown.enter.native="submitForm"
        />
        <button
          v-if="form.secret.length > 5"
          class="watch-pwd"
          type="button"
          @click="watchPwd = !watchPwd"
        >
          <i class="iconfont ic-ai-eye" />
        </button>
      </el-form-item>
      <el-form-item class="sign-in-opt">
        <div class="opt-container">
          <el-checkbox v-model="form.remember">
            记住我
          </el-checkbox>
          <ul v-if="showOAuth" class="provider">
            <li @click="authQQ">
              <i class="iconfont ic-qq" />
            </li>
            <li @click="authWechat">
              <i class="iconfont ic-v-chat" />
            </li>
          </ul>
          <button v-else type="button" @click="showOAuth = true">
            社交账号登录
          </button>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          class="submit-btn"
          type="primary"
          @click="submitForm"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
    <div class="others">
      <a @click="showReset">忘记密码?></a>
      <a @click="showRegister">点击注册»</a>
    </div>
  </div>
</template>

<script>
import { login } from '~/api/userApi'

export default {
  name: 'SignInForm',
  data() {
    const validateAccess = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请填写手机号'))
      }
      if (value.length !== 11) {
        return callback(new Error('请填写11位手机号'))
      }
      callback()
    }
    const validateSecret = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请填写登录密码'))
      }
      if (value.length < 6) {
        return callback(new Error('密码不能小于6位'))
      }
      if (value.length > 16) {
        return callback(new Error('密码不能大于16位'))
      }
      callback()
    }
    return {
      form: {
        access: '',
        secret: '',
        remember: true
      },
      rule: {
        access: [{ validator: validateAccess, trigger: 'blur' }],
        secret: [{ validator: validateSecret, trigger: 'blur' }]
      },
      loading: false,
      watchPwd: false,
      showOAuth: true
    }
  },
  methods: {
    authQQ() {
      const redirect = this.$route.query.redirect ? this.$route.query.redirect : encodeURIComponent(window.location.href)
      window.location.href = `https://api.calibur.tv/callback/oauth2/qq?from=sign&redirect=${redirect}`
    },
    authWechat() {
      const redirect = this.$route.query.redirect ? this.$route.query.redirect : encodeURIComponent(window.location.href)
      window.location.href = `https://api.calibur.tv/callback/oauth2/wechat?from=sign&redirect=${redirect}`
    },
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.login()
        } else {
          return false
        }
      })
    },
    login() {
      if (this.loading) {
        return
      }
      this.loading = true
      this.$captcha({
        success: ({ data }) => {
          login(this, {
            access: this.form.access,
            secret: this.form.secret,
            remember: this.form.remember,
            geetest: data
          })
            .then(token => {
              this.$cookie.set('JWT-TOKEN', token, {
                expires: this.form.remember ? 365 : 1
              })
              window.location.reload()
            })
            .catch(err => {
              this.$toast.error(err.message)
              this.loading = false
            })
        },
        close: () => {
          this.loading = false
        }
      })
    },
    showReset() {
      this.$emit('to-reset')
      this.$refs.form.resetFields()
    },
    showRegister() {
      this.$emit('to-register')
      this.$refs.form.resetFields()
    }
  }
}
</script>
