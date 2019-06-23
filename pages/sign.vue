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
    <el-col class="sign-wrap" :span="6" :xs="24">
      <div class="bg">
        <img src="~/assets/img/login_bg.png" alt="calibur">
      </div>
      <v-switcher ref="switcher" :headers="headers" :swipe="true" align="center" :anchor-padding="10">
        <template slot="0">
          <reset-password-form
            v-if="showReset"
            @to-login="showReset = false"
            @to-register="next"
          />
          <sign-in-form
            v-else
            @to-register="next"
            @to-reset="showReset = true"
          />
        </template>
        <template slot="1">
          <sign-up-form @to-login="prev"/>
        </template>
      </v-switcher>
    </el-col>
  </div>
</template>

<script>
import SignInForm from '~/components/form/SignInForm'
import SignUpForm from '~/components/form/SignUpForm'
import ResetPasswordForm from '~/components/form/ResetPasswordForm'

export default {
  name: 'Sign',
  components: {
    SignUpForm,
    SignInForm,
    ResetPasswordForm
  },
  props: {},
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
  watch: {},
  created() {},
  mounted() {},
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
