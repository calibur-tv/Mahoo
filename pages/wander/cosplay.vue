<style lang="scss">
#create-cosplay {
  .form-tip {
    font-size: 12px;
    color: $color-orange;

    span {
      color: $color-red;
    }
  }

  .uploader {
    position: relative;
    margin-bottom: 20px;
    margin-top: -20px;
    border: 1px solid #dee2e7;
    border-radius: 8px;
    background-color: rgba(222,226,231,0.2);
    padding: 24px;

    &-count-0 {
      text-align: center;
    }

    &-count-20 {
      .el-upload {
        display: none;
      }
    }

    &-info {
      text-align: center;
      font-size: 12px;
      color: $color-gray;
      margin-top: 20px;
    }

    .el-upload {
      &-dragger {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        border-width: 0;
      }

      &--picture-card {
        width: 104px;
        height: 104px;
        line-height: 110px;
        position: relative;
        cursor: pointer;
        border-color: $color-gray !important;

        &:before {
          content: '\e6d9';
          font-family: 'element-icons' !important;
          font-size: 28px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: $color-gray;
        }
      }

      &-list__item {
        width: 104px;
        height: 104px;
      }

      &-list {
        .el-progress {
          width: 80px;

          &-circle {
            width: 80px !important;
            height: 80px !important;
          }
        }

        .is-success {
          &:first-child {
            &:after {
              content: '封面';
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 24px;
              font-size: 12px;
              color: #fff;
              line-height: 24px;
              background-color: rgba(0,0,0,0.6);
              text-align: center;
            }
          }
        }

        &__item-status-label {
          display: none;
        }
      }
    }
  }
}
</style>

<template>
  <div id="create-cosplay">
    <el-form ref="form" :model="formItem" label-position="right" label-width="80px">
      <p class="form-tip">
        提示：标记&nbsp;<span>*</span>&nbsp;为必填项，否则无法发布哦
      </p>
      <el-form-item label="上传图片" required />
      <div class="uploader" :class="`uploader-count-${uploadImageTotal + uploadPending}`">
        <el-upload
          multiple
          drag
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
        />
        <p class="uploader-info">
          最多可上传20张哦 (支持格式 jpg、png，宽高尺寸须大于420像素)
        </p>
      </div>
      <el-form-item label="分区" required>
        <el-col :span="16">
          <area-picker v-model="formItem.area" blocked="topic" />
        </el-col>
      </el-form-item>
      <el-form-item label="标题" required>
        <el-col :span="16">
          <el-input v-model="formItem.title" placeholder="请输入标题" :show-word-limit="true" maxlength="20" />
        </el-col>
      </el-form-item>
      <el-form-item label="简介">
        <el-input
          v-model="formItem.textarea"
          type="textarea"
          :show-word-limit="true"
          :rows="8"
          maxlength="233"
          resize="none"
          placeholder="请输入作品介绍，临摹作品请一定要注明作品的出处来源"
        />
      </el-form-item>
      <el-form-item label="标签">
        <el-col :span="16">
          <el-select v-model="formItem.tags" placeholder="添加标签，方便分享" filterable multiple allow-create>
            <el-option v-for="item in cityList" :key="item.value" :value="item.value">
              {{ item.label }}
            </el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="访问权限">
        <el-radio-group v-model="formItem.is_secret">
          <el-radio :label="0">
            公开
          </el-radio>
          <el-radio :label="1">
            私密
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <br>
      <el-divider>创作者信息</el-divider>
      <br>
      <br>
      <el-form-item label="出镜">
        <el-col :span="16">
          <el-select v-model="users.coser" placeholder="coser的昵称" filterable multiple allow-create>
            <el-option v-for="item in cityList" :key="item.value" :value="item.value">
              {{ item.label }}
            </el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="化妆">
        <el-col :span="16">
          <el-select v-model="users.dresser" placeholder="化妆师的昵称" filterable multiple allow-create>
            <el-option v-for="item in cityList" :key="item.value" :value="item.value">
              {{ item.label }}
            </el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="道具">
        <el-col :span="16">
          <el-select v-model="users.weapon" placeholder="道具师的昵称" filterable multiple allow-create>
            <el-option v-for="item in cityList" :key="item.value" :value="item.value">
              {{ item.label }}
            </el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="摄影">
        <el-col :span="16">
          <el-select v-model="users.worker" placeholder="摄影师的昵称" filterable multiple allow-create>
            <el-option v-for="item in cityList" :key="item.value" :value="item.value">
              {{ item.label }}
            </el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="后期">
        <el-col :span="16">
          <el-select v-model="users.ender" placeholder="后期君的昵称" filterable multiple allow-create>
            <el-option v-for="item in cityList" :key="item.value" :value="item.value">
              {{ item.label }}
            </el-option>
          </el-select>
        </el-col>
      </el-form-item>
    </el-form>
    <el-row>
      <el-col :span="10" :push="7">
        <br>
        <el-button
          type="primary"
          shape="circle"
          style="width:100%"
          size="large"
          @click="handleSubmit"
        >
          提交发布
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Upload, Radio, RadioGroup, Select, Option, Divider } from 'element-ui'
import upload from '~/mixins/upload'
import AreaPicker from '~/components/form/AreaPicker'

export default {
  name: 'CreateCosplay',
  layout: 'web',
  components: {
    AreaPicker,
    'el-upload': Upload,
    'el-radio': Radio,
    'el-radio-group': RadioGroup,
    'el-select': Select,
    'el-option': Option,
    'el-divider': Divider
  },
  mixins: [upload],
  data() {
    return {
      contentType: 1,
      users: {
        coser: [],
        dresser: [],
        worker: [],
        ender: [],
        weapon: []
      },
      formItem: {
        title: '',
        is_secret: 0,
        textarea: '',
        area: [],
        tags: []
      },
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ]
    }
  },
  methods: {
    handleSubmit() {
    },
    customImageUploadSuccess(res, file) {
      this.handleImageUploadSuccess(res, file)
      this.uploadImageList = this.uploadImageList.filter(_ => (_.status === 'success' && _.data.width >= 420 && _.data.height >= 420) || _.status !== 'success')
      this.uploadImageTotal = this.uploadImageList.length
    }
  }
}
</script>
