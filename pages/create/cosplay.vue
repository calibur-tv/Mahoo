<style lang="scss">
#create-show {
  margin-top: 30px;
  margin-bottom: 30px;

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

  .main-panel {
    padding: 24px 24px 32px 24px;
  }
}
</style>

<template>
  <div id="create-show">
    <el-row class="container">
      <el-col :span="4">
        &nbsp;
      <!--
        <el-radio-group v-model="contentType" :vertical="true">
          <el-radio :label="0">
            帖子
          </el-radio>
          <el-radio :label="1">
            专栏
          </el-radio>
          <el-radio :label="2">
            Cosplay
          </el-radio>
        </el-radio-group>
        -->
      </el-col>
      <el-col :span="15">
        <div class="panel main-panel">
          <el-form ref="form" :model="formItem" label-position="right" label-width="80px">
            <p class="form-tip">
              提示：标记&nbsp;<span>*</span>&nbsp;为必填项，否则无法发布哦
            </p>
            <el-form-item label="上传图片" :required="contentType === 2" />
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
                <el-cascader v-model="formItem.area" placeholder="添加作品分区，如约会大作战" :options="areaList" filterable />
              </el-col>
            </el-form-item>
            <el-form-item label="标题" required>
              <el-col :span="16">
                <el-input v-model="formItem.title" placeholder="请输入标题" :show-word-limit="true" maxlength="20" />
              </el-col>
            </el-form-item>
            <template v-if="contentType === 1">
              rich editor
            </template>
            <template v-else>
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
            </template>
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
            <template v-if="contentType === 2">
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
            </template>
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
      </el-col>
      <el-col :span="5">
        &nbsp;
      </el-col>
    </el-row>
  </div>
</template>

<script>
import upload from '~/mixins/upload'
import { Upload, Radio, RadioGroup, Cascader, Select, Option, Divider } from 'element-ui'

export default {
  layout: 'web',
  components: {
    'el-upload': Upload,
    'el-radio': Radio,
    'el-radio-group': RadioGroup,
    'el-cascader': Cascader,
    'el-select': Select,
    'el-option': Option,
    'el-divider': Divider
  },
  mixins: [upload],
  props: {},
  data() {
    return {
      contentType: 2,
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
      ],
      areaList: [{
        value: 'beijing',
        label: '北京',
        children: [
          {
            value: 'gugong',
            label: '故宫'
          },
          {
            value: 'tiantan',
            label: '天坛'
          },
          {
            value: 'wangfujing',
            label: '王府井'
          }
        ]
      }, {
        value: 'jiangsu',
        label: '江苏',
        children: [
          {
            value: 'nanjing',
            label: '南京',
            children: [
              {
                value: 'fuzimiao',
                label: '夫子庙'
              }
            ]
          },
          {
            value: 'suzhou',
            label: '苏州',
            children: [
              {
                value: 'zhuozhengyuan',
                label: '拙政园'
              },
              {
                value: 'shizilin',
                label: '狮子林'
              }
            ]
          }
        ]
      }]
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
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
