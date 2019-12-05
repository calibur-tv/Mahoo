<style lang="scss">
.sign-in-form {
  margin: 0 15px;

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

  .provider {
    height: 40px;

    li {
      display: inline-block;
      margin-left: 8px;
    }

    i {
      font-size: 20px;
      vertical-align: middle;
      color: $color-icon-1;
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
    <ElForm ref="form" :model="form" :rules="rule">
      <ElFormItem prop="access">
        <ElInput v-model.trim="form.access" type="text" placeholder="手机（填写常用手机号，用于登录）" />
      </ElFormItem>
      <ElFormItem prop="secret">
        <ElInput v-model.trim="form.secret" type="password" show-password placeholder="密码（6-16个字符组成，区分大小写）" @keydown.enter.native="submitForm" />
      </ElFormItem>
      <ElFormItem class="sign-in-opt">
        <div class="opt-container">
          <ElCheckbox v-model="form.remember">
            记住我
          </ElCheckbox>
          <ul v-if="showOAuth" class="provider">
            <li @click="authQQ">
              <i class="iconfont ic-qq" />
            </li>
            <li class="only-pc" @click="authWechat">
              <i class="iconfont ic-v-chat" />
            </li>
            <li class="only-h5" @click="authWeixin">
              <i class="iconfont ic-v-chat" />
            </li>
          </ul>
          <button v-else type="button" @click="showOAuth = true">
            社交账号登录
          </button>
        </div>
      </ElFormItem>
      <ElFormItem>
        <ElButton :loading="loading" class="submit-btn" type="primary" round @click="submitForm">
          登录
        </ElButton>
      </ElFormItem>
    </ElForm>
    <div class="others">
      <a @click="showReset">忘记密码?></a>
      <a @click="showRegister">点击注册»</a>
    </div>
  </div>
</template>

<script>
import { login } from '~/api/userApi'
import { Checkbox } from 'element-ui'

export default {
  name: 'SignInForm',
  components: {
    ElCheckbox: Checkbox
  },
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
      showOAuth: true
    }
  },
  methods: {
    authQQ() {
      window.location.href = `https://api.calibur.tv/callback/oauth2/qq?from=sign`
    },
    authWechat() {
      window.location.href = `https://api.calibur.tv/callback/oauth2/wechat?from=sign`
    },
    authWeixin() {
      window.location.href = `https://api.calibur.tv/callback/oauth2/weixin?from=sign`
    },
    redirect() {
      return this.$route.query.redirect ? this.$route.query.redirect : encodeURIComponent(window.location.href)
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
      login(this, {
        access: this.form.access,
        secret: this.form.secret,
        remember: this.form.remember
      })
        .then(token => {
          this.$cookie.set('JWT-TOKEN', token, {
            expires: this.form.remember ? 365 : 1
          })
          if (this.$route.query.redirect) {
            window.location = decodeURIComponent(this.$route.query.redirect)
          } else {
            window.location.reload()
          }
        })
        .catch(err => {
          this.$toast.error(err.message)
          this.loading = false
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
