<style lang="scss">
#sign {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;

  .sign-wrap {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);

    @media (min-width: 768px) {
      top: 50%;
      transform: translate(-50%, -50%);

      .bg {
        margin: 0 15px;
        border-radius: 10px;
      }
    }

    .bg {
      background-color: $color-main;
      padding: 45px 15px;

      img {
        display: block;
        width: 217px;
        margin: 0 auto;
      }
    }

    .v-switcher {
      margin-top: -40px;

      &-header {
        &-wrap {
          width: 100px;
          margin: 0 auto 15px;
        }

        &-item {
          padding: 0 10px;
          color: rgba(#fff, 0.5);

          &.is-active {
            color: #fff;
          }
        }

        &-anchor {
          background-color: #fff;
          height: 2px;
          bottom: 0;
        }
      }
    }
  }
}
</style>

<template>
  <div id="sign">
    <ElCol class="sign-wrap" :span="6" :xs="24">
      <div class="bg">
        <img src="~/assets/img/login_bg.png" alt="calibur" />
      </div>
      <VSwitcher ref="switcher" :headers="headers" :swipe="true" :anchor-padding="10" :disabled-swipe="true" align="center">
        <template slot="0">
          <ResetPasswordForm v-if="showReset" @to-login="showReset = false" @to-register="next" />
          <SignInForm v-else @to-register="next" @to-reset="showReset = true" />
        </template>
        <template slot="1">
          <SignUpForm @to-login="prev" />
        </template>
      </VSwitcher>
    </ElCol>
  </div>
</template>

<script>
import SignInForm from '~/components/form/SignInForm'
import SignUpForm from '~/components/form/SignUpForm'
import ResetPasswordForm from '~/components/form/ResetPasswordForm'
import useSignMixin from '~/mixins/useSign'

export default {
  name: 'Sign',
  components: {
    SignUpForm,
    SignInForm,
    ResetPasswordForm
  },
  mixins: [useSignMixin],
  data() {
    return {
      showReset: false
    }
  },
  computed: {
    headers() {
      return ['登录', '注册']
    }
  },
  beforeMount() {
    this.$channel.$when('user-signed', () => {
      if (this.$route.query.redirect) {
        window.location = encodeURIComponent(window.location.href)
      } else {
        window.location = '/'
      }
    })
  },
  methods: {
    prev() {
      this.$refs.switcher.prev()
    },
    next() {
      this.$refs.switcher.next()
    }
  }
}
</script>
