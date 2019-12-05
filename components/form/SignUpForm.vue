<style lang="scss">
.sign-up-form {
  margin: 0 15px;

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
    right: 32px;
    top: 10px;
    font-size: 18px;
    color: $color-gray-1;
  }

  .provider {
    height: 16px;
    margin-top: -8px;

    span {
      line-height: 21px;
    }

    li {
      display: inline-block;
    }

    i {
      font-size: 20px;
      vertical-align: middle;
      margin-left: 10px;
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
  <div class="sign-up-form">
    <ElForm ref="form" :model="form" :rules="rule">
      <ElFormItem prop="access">
        <ElInput v-model.trim="form.access" type="text" placeholder="手机（填写常用手机号，用于登录）" auto-complete="off" />
      </ElFormItem>
      <ElFormItem prop="secret">
        <ElInput v-model.trim="form.secret" type="password" show-password placeholder="密码（6-16个字符组成，区分大小写）" auto-complete="off" />
      </ElFormItem>
      <ElFormItem v-if="!inviteCode">
        <ElInput v-model.trim="form.inviteCode" placeholder="邀请码（可为空）" auto-complete="off" />
      </ElFormItem>
      <ElFormItem>
        <ElButton :loading="submitBtnLoading" :disabled="submitBtnDisabled" class="submit-btn" type="primary" round @click="submitForm">
          {{ submitBtnText }}
          <template v-if="timeout"> （{{ timeout }}s 后可重新获取） </template>
        </ElButton>
      </ElFormItem>
    </ElForm>
    <div class="others">
      <ul class="provider">
        <span>社交账号注册</span>
        <li @click="qqRegisterLink">
          <i class="iconfont ic-qq" />
        </li>
        <li class="only-pc" @click="wechatRegisterLink">
          <i class="iconfont ic-v-chat" />
        </li>
        <li class="only-h5" @click="weixinRegisterLink">
          <i class="iconfont ic-v-chat" />
        </li>
      </ul>
      <a v-if="!inviteCode" @click="showLogin">已有账号»</a>
    </div>
  </div>
</template>

<script>
import { sendMessage, register } from '~/api/userApi'

export default {
  name: 'SignUpForm',
  props: {
    inviteCode: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    const validateAccess = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请填写手机号'))
      }
      if (value.length !== 11) {
        return callback(new Error('请填写11位手机号'))
      }
      if (!/^(0|86|17951)?(1)[0-9]{10}$/.test(value)) {
        return callback(new Error('错误的手机号格式'))
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
        authCode: '',
        inviteCode: this.inviteCode
      },
      rule: {
        access: [{ validator: validateAccess, trigger: 'blur' }],
        secret: [{ validator: validateSecret, trigger: 'blur' }]
      },
      /**
       * 0：初始化，表单待校验
       * ---- 如果表单校验失败，就一直在 0
       * 1：表单校验成功，获取手机短信中...
       * ---- 需要 loading
       * ---- 发送手机验证码需要 geetest 认证
       * ---- 如果 geetest 认证通过就请求发短信的接口
       * ---- 如果 geetest 认证不通过或者加载失败，就会返回到 step 0
       * ---- 请求发短信的接口如果失败，就会返回到 step 0
       * ---- 请求发短信的接口如果成功，就会到 step 2
       * ---- 30s 后会返回到 step 0，可以重新发短信
       * 2：获取手机验证码成功，用户填写短信验证码
       * ---- 如果用户填写的正确，就进入注册流程
       * ---- 如果用户填写的失败或关闭填写框，就提示错误，继续在 step 2
       * ---- 30s 后就会返回 step 0，用户可以重新发短信
       * 3：注册中...
       * ---- 需要 loading 和 disabled
       * ---- 注册成功，需要刷新页面
       * ---- 注册失败，可能是在 step 2 停留太久，短信验证码过期
       * ---- 注册失败，可能是服务器挂了
       * ---- 注册失败，可能是 unique 的信息被他人使用了
       * ---- 无论如何，注册失败都返回 step 0
       */
      step: 0,
      timeout: 0
    }
  },
  computed: {
    submitBtnText() {
      if (this.step === 0) {
        return '注册'
      } else if (this.step === 1) {
        return '提交中...'
      } else if (this.step === 2) {
        return '短信已发送'
      } else if (this.step === 3) {
        return '注册中...'
      }
      return '注册'
    },
    submitBtnLoading() {
      return this.step === 1 || this.step === 3
    },
    submitBtnDisabled() {
      return (this.timeout !== 0 && this.step === 0) || this.step === 3
    },
    query() {
      return this.$route.query
    },
    paramsIsOK() {
      return !!(
        this.query.uid &&
        /^\d+$/.test(this.query.uid) &&
        this.query.time &&
        /^\d+$/.test(this.query.time) &&
        Date.now() <= this.query.time * 1000 &&
        this.query.key === this.$md5(`${this.query.uid}-the-world-${this.query.time}`)
      )
    }
  },
  methods: {
    addInviteForLink(url) {
      let result = url
      if (this.paramsIsOK) {
        result = `${result}&invite=${this.query.uid}`
      } else if (this.$route.name === 'about-invite-id') {
        result = `${result}&invite=${this.$route.params.id}`
      }
      return result
    },
    qqRegisterLink() {
      window.location.href = `${this.addInviteForLink('https://api.calibur.tv/callback/oauth2/qq?from=sign')}}`
    },
    wechatRegisterLink() {
      window.location.href = `${this.addInviteForLink('https://api.calibur.tv/callback/oauth2/wechat?from=sign')}}`
    },
    weixinRegisterLink() {
      window.location.href = `${this.addInviteForLink('https://api.calibur.tv/callback/oauth2/weixin?from=sign')}}`
    },
    redirect() {
      return this.$route.query.redirect ? this.$route.query.redirect : encodeURIComponent(window.location.href)
    },
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.step === 0) {
            this.getRegisterAuthCode()
          }
          if (this.step === 2) {
            this.openConfirmModal()
          }
        } else {
          return false
        }
      })
    },
    async getRegisterAuthCode() {
      this.step = 1
      try {
        await sendMessage(this, {
          type: 'sign_up',
          phone_number: this.form.access
        })
        this.step = 2
        this.openConfirmModal()
      } catch (err) {
        this.$toast.error(err.message)
        this.step = 0
      } finally {
        this.timeout = 60
        const timer = setInterval(() => {
          if (!--this.timeout) {
            this.step = 0
            clearInterval(timer)
          }
        }, 1000)
      }
    },
    openConfirmModal() {
      this.$prompt('请输入收到的验证码', '短信已发送', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^\d{6}$/,
        inputErrorMessage: '验证码格式不正确'
      })
        .then(({ value }) => {
          this.form.authCode = value
          this.step = 3
          this.signUp()
        })
        .catch(() => {})
    },
    signUp() {
      register(this, {
        access: this.form.access,
        secret: this.form.secret,
        authCode: this.form.authCode,
        inviteCode: this.form.inviteCode
      })
        .then(token => {
          this.$cookie.set('JWT-TOKEN', token)
          this.$toast.success('注册成功！').then(() => {
            if (this.$route.query.redirect) {
              window.location = decodeURIComponent(this.$route.query.redirect)
            } else {
              window.location.reload()
            }
          })
        })
        .catch(err => {
          this.step = 0
          this.$toast.error(err.message)
        })
    },
    showLogin() {
      this.$emit('to-login')
      this.$refs.form.resetFields()
    }
  }
}
</script>
