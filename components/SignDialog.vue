<style lang="scss">
$time: 0.5s;
$input-height: 40px;
#space3D {
  perspective: 800px;
  perspective-origin: 50% 50%;
  background-color: transparent;
  z-index: 30;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  &.space-leave {
    visibility: hidden;
  }

  &.space-enter {
    visibility: visible;
  }

  .sign-modal-wrap {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    transform-style: preserve-3d;
    z-index: 12;

    .sign-modal {
      padding: 50px 45px;
      background-color: #fff;
      border-radius: 4px;
      position: fixed;
      top: 50%;
      left: 50%;
      width: 500px;
      height: 460px;
      margin-left: -250px;
      transition: $time;
      font-size: 14px;
      visibility: hidden;
      opacity: 0;
      display: flex;
      flex-direction: column;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);

      &.sign-up-show,
      &.sign-in-show {
        visibility: visible;
        opacity: 1;
        transform: rotateY(0deg) translateY(-200px);
      }

      &.sign-up-init,
      &.sign-in-init {
        visibility: hidden;
        opacity: 0;
        transform: rotateY(0deg) translateY(-300px);
      }

      &.sign-in-turn,
      &.sign-up-turn {
        visibility: hidden;
        opacity: 0;
      }

      &.sign-in-turn {
        transform: rotateY(-180deg) translateY(-200px);
      }

      &.sign-up-turn {
        transform: rotateY(180deg) translateY(-200px);
      }
    }
  }

  .logo {
    img {
      height: 108px;
      width: auto;
      display: block;
      margin: 0 auto;
    }
  }
}
</style>

<template>
  <div v-if="canRender" class="sign-container">
    <div v-if="isGuest" id="space3D" :class="[showModal ? 'space-enter' : 'space-leave']" @click="hiddenSign">
      <div ref="wrap" class="sign-modal-wrap">
        <div
          :class="{
            'sign-in-init': !showSignIn && !showSignUp,
            'sign-in-show': showSignIn && !showSignUp,
            'sign-in-turn': !showSignIn && showSignUp
          }"
          class="sign-modal sign-in-modal"
          @click.stop
        >
          <div class="logo">
            <img src="https://file.calibur.tv/logo.png" alt="logo" />
          </div>
          <div v-show="showReset" class="form-container">
            <ResetPasswordForm @to-login="showReset = false" @to-register="showRegister" />
          </div>
          <div v-show="!showReset" class="form-container">
            <SignInForm @to-reset="showReset = true" @to-register="showRegister" />
          </div>
        </div>
        <div
          :class="{
            'sign-up-init': !showSignUp && !showSignIn,
            'sign-up-show': showSignUp && !showSignIn,
            'sign-up-turn': !showSignUp && showSignIn
          }"
          class="sign-modal sign-up-modal"
          @click.stop
        >
          <div class="logo">
            <img src="https://file.calibur.tv/logo.png" alt="logo" />
          </div>
          <div class="form-container">
            <SignUpForm @to-login="showLogin" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignInForm from '~/components/form/SignInForm'
import SignUpForm from '~/components/form/SignUpForm'
import ResetPasswordForm from '~/components/form/ResetPasswordForm'

export default {
  name: 'SignDialog',
  components: {
    SignUpForm,
    SignInForm,
    ResetPasswordForm
  },
  data() {
    return {
      canRender: false,
      showModal: false,
      showSignIn: false,
      showSignUp: false,
      showReset: false
    }
  },
  computed: {
    isGuest() {
      return !this.$store.state.isAuth
    }
  },
  mounted() {
    this.canRender = true
    this.$channel.$on('sign-in', () => {
      if (window.screen.width <= 768) {
        window.location.href = this.$alias.sign()
      } else {
        this.showLogin()
      }
    })
    this.$channel.$on('sign-up', () => {
      this.showRegister()
    })
  },
  methods: {
    showLogin() {
      this.showReset = false
      this.showModal = true
      this.showSignIn = true
      this.showSignUp = false
    },
    showRegister() {
      this.showModal = true
      this.showSignUp = true
      this.showSignIn = false
    },
    hiddenSign() {
      this.showModal = false
      this.showSignIn = false
      this.showSignUp = false
      this.showReset = false
    }
  }
}
</script>
