<style lang="scss">
.create-talk-form {
  $base-hgt: 75px;

  .content-wrap {
    .submit-btn {
      float: right;
      margin-left: 8px;
      height: $base-hgt;
      width: $base-hgt;
      color: #fff;
      background-color: $color-main;
      border-radius: 4px;
      line-height: 1.4;
      letter-spacing: 2px;

      &:hover {
        background-color: $color-main-light;
      }
    }

    .input-wrap {
      overflow: hidden;
    }
  }

  .el-upload {
    &-wrap {
      margin-top: 8px;
    }

    &-list__item,
    &--picture-card {
      width: $base-hgt;
      height: $base-hgt;
    }

    &-list__item {
      transition-duration: 0s;
    }

    &--picture-card {
      line-height: 82px;
    }

    &-list__item-status-label {
      display: none !important;
    }
  }
}
</style>

<template>
  <div class="create-talk-form">
    <div class="content-wrap">
      <button class="submit-btn">
        点击<br>发送
      </button>
      <div class="input-wrap">
        <el-input
          v-model="content"
          type="textarea"
          :autosize="{ minRows: 3 }"
          :show-word-limit="true"
          resize="none"
          maxlength="1000"
          placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。"
        />
      </div>
    </div>
    <el-upload
      multiple
      list-type="picture-card"
      :action="imageUploadAction"
      :limit="uploadImageLimit"
      :data="uploadHeaders"
      :file-list="uploadImageList"
      :accept="imageUploadAccept"
      :before-upload="handleImageUploadBefore"
      :on-success="customImageUploadSuccess"
      :on-error="handleImageUploadError"
      :on-remove="handleImageUploadRemove"
      :on-exceed="handleImageUploadExceed"
      class="el-upload-wrap"
    >
      <i class="el-icon-plus" />
    </el-upload>
  </div>
</template>

<script>
import { Upload, Select, Option } from 'element-ui'
import upload from '~/mixins/upload'

export default {
  name: 'CreateTalkForm',
  components: {
    'el-upload': Upload,
    'el-select': Select,
    'el-option': Option
  },
  mixins: [upload],
  props: {
    parentSlug: {
      type: String,
      default: ''
    },
    parentType: {
      type: String,
      default: '',
      validator: val => ~['', 'pin', 'tag'].indexOf(val)
    }
  },
  data() {
    return {
      uploadImageLimit: 9,
      content: ''
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    customImageUploadSuccess(res, file) {
      this.handleImageUploadSuccess(res, file)
      this.uploadImageList = this.uploadImageList.filter(_ => (_.status === 'success' && _.data.width >= 420 && _.data.height >= 420) || _.status !== 'success')
      this.uploadImageTotal = this.uploadImageList.length
    }
  }
}
</script>
