<style lang="scss">
.create-talk-form {
  $base-hgt: 75px;

  .item-title {
    margin-bottom: 10px;
    margin-top: 10px;
  }

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

  .bottom-btn {
    button {
      width: 100%;
    }
  }
}
</style>

<template>
  <el-form class="create-talk-form" label-position="top">
    <template v-if="!tag">
      <el-form-item label="标题">
        <el-input
          v-model="title"
          placeholder="请输入标题（建议30字以内）"
          maxlength="30"
        />
      </el-form-item>
      <el-form-item label="分区">
        <area-picker v-model="area" />
      </el-form-item>
    </template>
    <el-form-item :label="tag ? '' : '正文'">
      <div class="content-wrap">
        <button
          v-if="tag"
          class="submit-btn"
          @click="submit"
        >
          点击<br>发送
        </button>
        <div class="input-wrap">
          <el-input
            v-model="content"
            type="textarea"
            :autosize="tag ? { minRows: 3 } : { minRows: 8 }"
            :show-word-limit="true"
            :maxlength="tag ? 1000 : 10000"
            placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论"
          />
        </div>
      </div>
    </el-form-item>
    <el-form-item>
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
      >
        <i class="el-icon-plus" />
      </el-upload>
    </el-form-item>
    <el-form-item v-if="!tag">
      <div class="bottom-btn">
        <el-button type="primary" round :loading="loading" @click="submit">
          点击发送
        </el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
import { Upload } from 'element-ui'
import upload from '~/mixins/upload'
import AreaPicker from '~/components/form/AreaPicker'

export default {
  name: 'CreateTalkForm',
  components: {
    AreaPicker,
    'el-upload': Upload
  },
  mixins: [upload],
  props: {
    tag: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      uploadImageLimit: 9,
      title: '',
      content: '',
      area: this.tag ? this.tag.split('-') : process.env.TAGS.newbie,
      loading: false
    }
  },
  methods: {
    customImageUploadSuccess(res, file) {
      this.handleImageUploadSuccess(res, file)
      this.uploadImageList = this.uploadImageList.filter(_ => (_.status === 'success' && _.data.width >= 420 && _.data.height >= 420) || _.status !== 'success')
      this.uploadImageTotal = this.uploadImageList.length
    },
    submit() {
      if (this.loading) {
        return
      }
      if (!this.tag) {
        if (!this.title.trim().length) {
          this.$toast.error('请为文章起个标题')
          return
        }
      }
      if (this.content.trim().length < 2) {
        this.$toast.error('内容至少要两个字')
        return
      }
      this.loading = true
      this.$axios.$post('v1/pin/create/daily', {
        title: this.title.trim(),
        content: this.content.trim(),
        images: this.uploadImageList.map(_ => _.data),
        area: this.area[1]
      })
        .then(data => {
          this.loading = false
        })
        .catch(err => {
          this.$toast.error(err.message)
          this.loading = false
        })
    }
  }
}
</script>
