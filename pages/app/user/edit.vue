<style lang="scss">
#user-edit {
  padding: 20px;

  .avatar-field {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 15px;
    }
  }

  .banner-field {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .banner-wrap {
      margin-right: 15px;
    }

    .banner {
      width: auto;
      height: 100px;
      border-radius: 12px;
    }
  }

  .el-switch {
    float: right;
    margin-top: 10px;
  }

  .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 200px;
  }
}
</style>

<template>
  <div id="user-edit">
    <ElForm v-if="isAuth" ref="form" :disabled="submitting" :model="user" :rules="rule" label-position="top">
      <ElFormItem label="头像">
        <div class="avatar-field">
          <img :src="$resize(user.avatar, { width: 100 })" class="avatar" />
          <ElUpload
            :show-file-list="false"
            :action="imageUploadAction"
            :limit="uploadImageLimit"
            :data="uploadHeaders"
            :accept="imageUploadAccept"
            :before-upload="handleImageUploadBefore"
            :on-success="avatarUploadSuccess"
            :on-error="handleImageUploadError"
          >
            <ElButton :loading="!!uploadPending" type="success" plain round size="mini">
              {{ uploadPending ? '图片上传中...' : '点击更换头像' }}
            </ElButton>
          </ElUpload>
        </div>
      </ElFormItem>
      <ElFormItem label="背景">
        <div class="banner-field">
          <div class="banner-wrap">
            <img :src="$resize(user.banner, { height: 100, mode: 2 })" class="banner" />
          </div>
          <ElUpload
            :show-file-list="false"
            :action="imageUploadAction"
            :limit="uploadImageLimit"
            :data="uploadHeaders"
            :accept="imageUploadAccept"
            :before-upload="handleImageUploadBefore"
            :on-success="bannerUploadSuccess"
            :on-error="handleImageUploadError"
          >
            <ElButton :loading="!!uploadPending" type="success" plain round size="mini">
              {{ uploadPending ? '图片上传中...' : '点击更换背景' }}
            </ElButton>
          </ElUpload>
        </div>
      </ElFormItem>
      <ElFormItem label="昵称" prop="nickname">
        <ElInput v-model.trim="nickname" />
      </ElFormItem>
      <ElFormItem label="生日" prop="birthday">
        <ElDatePicker v-model="birthday" :editable="false" :clearable="false" type="date" format="yyyy 年 M 月 d 日" value-format="yyyy-MM-dd" placeholder="选择生日" />
        <ElSwitch v-model="birthSecret" active-text="私密" inactive-text="公开" />
      </ElFormItem>
      <ElFormItem label="性别">
        <ElRadioGroup v-model="sex">
          <ElRadio :label="1">
            男
          </ElRadio>
          <ElRadio :label="2">
            女
          </ElRadio>
        </ElRadioGroup>
        <ElSwitch v-model="sexSecret" active-text="私密" inactive-text="公开" />
      </ElFormItem>
      <ElFormItem label="签名" prop="signature">
        <ElInput v-model="signature" :rows="5" type="textarea" placeholder="留下自己想说的话" maxlength="60" show-word-limit resize="none" />
      </ElFormItem>
      <ElFormItem>
        <ElButton :loading="submitting" type="primary" @click="submit">
          提交
        </ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<script>
import { Switch, Radio, RadioGroup, DatePicker, Upload } from 'element-ui'
import { settingProfile } from '~/api/userApi'
import upload from '~/mixins/upload'
import mustSign from '~/mixins/mustSign'

export default {
  name: 'UserEdit',
  layout: 'app',
  components: {
    ElSwitch: Switch,
    ElRadio: Radio,
    ElRadioGroup: RadioGroup,
    ElDatePicker: DatePicker,
    ElUpload: Upload
  },
  mixins: [upload, mustSign],
  data() {
    const validateNickname = (rule, value, callback) => {
      const length = value.replace(/([\u4E00-\u9FA5])/g, 'aa').trim().length
      if (!length) {
        callback(new Error('昵称不能为空'))
      } else if (length < 2) {
        callback(new Error('昵称至少为2个字符'))
      } else if (length > 14) {
        callback(new Error('昵称不能超过14个字符'))
      }
      callback()
    }
    const validateSignature = (rule, value, callback) => {
      if (value.length > 150) {
        callback(new Error('签名最多 150 个字'))
      }
      callback()
    }
    const validateBirthday = (rule, value, callback) => {
      if (!value) {
        return callback()
      }
      const setTs = new Date(value).getTime()
      const curTs = Date.now()
      if (setTs >= curTs) {
        callback(new Error('。。。'))
      } else if (curTs - setTs < 315360000000) {
        callback(new Error('你应该大于10岁了吧...?'))
      } else if (curTs - setTs > 1261440000000) {
        callback(new Error('你应该小于40岁的吧...?'))
      }
      callback()
    }
    return {
      submitting: false,
      rule: {
        nickname: [{ validator: validateNickname, trigger: 'submit' }],
        signature: [{ validator: validateSignature, trigger: 'submit' }],
        birthday: [{ validator: validateBirthday, trigger: 'submit' }]
      }
    }
  },
  computed: {
    isAuth() {
      return this.$store.state.isAuth
    },
    user() {
      return this.$store.state.user
    },
    nickname: {
      get() {
        return this.user.nickname
      },
      set(value) {
        this.$store.commit('UPDATE_USER_INFO', {
          key: 'nickname',
          value
        })
      }
    },
    birthday: {
      get() {
        return this.user.birthday
      },
      set(value) {
        this.$store.commit('UPDATE_USER_INFO', {
          key: 'birthday',
          value
        })
      }
    },
    birthSecret: {
      get() {
        return this.user.birth_secret
      },
      set(value) {
        this.$store.commit('UPDATE_USER_INFO', {
          key: 'birth_secret',
          value
        })
      }
    },
    sex: {
      get() {
        return this.user.sex
      },
      set(value) {
        this.$store.commit('UPDATE_USER_INFO', {
          key: 'sex',
          value
        })
      }
    },
    sexSecret: {
      get() {
        return this.user.sex_secret
      },
      set(value) {
        this.$store.commit('UPDATE_USER_INFO', {
          key: 'sex_secret',
          value
        })
      }
    },
    signature: {
      get() {
        return this.user.signature
      },
      set(value) {
        this.$store.commit('UPDATE_USER_INFO', {
          key: 'signature',
          value: value.trim()
        })
      }
    }
  },
  methods: {
    avatarUploadSuccess(res, file) {
      this.handleImageUploadSuccess(res, file)
      this.$store.commit('UPDATE_USER_INFO', {
        key: 'avatar',
        value: res.data.url
      })
    },
    bannerUploadSuccess(res, file) {
      this.handleImageUploadSuccess(res, file)
      this.$store.commit('UPDATE_USER_INFO', {
        key: 'banner',
        value: res.data.url
      })
    },
    submit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          if (this.submitting) {
            return
          }
          this.submitting = true
          try {
            await settingProfile(this, {
              nickname: this.nickname,
              signature: this.signature,
              birthday: new Date(this.$utils.adjustDate(this.birthday)).getTime() / 1000,
              birth_secret: this.birthSecret,
              sex_secret: this.sexSecret,
              sex: this.sex,
              avatar: this.user.avatar,
              banner: this.user.banner
            })
            this.$toast.success('设置成功')
          } catch (err) {
            this.$toast.error(err.message)
          } finally {
            this.submitting = false
          }
        } else {
          return false
        }
      })
    }
  },
  head: {
    title: '个人简介'
  }
}
</script>
