<style lang="scss">
.skeleton-article {
  .gray {
    border-radius: 5px;
    @extend %skeleton-block;
  }

  .only-pc {
    padding: 15px 20px 20px;
    background-color: #fff;
    border-radius: 0 0 5px 5px;
    border-top: 1px solid $color-gray-4;

    .header {
      height: 30px;
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .title {
        width: 60%;
        height: 24px;
      }

      .area {
        width: 24px;
        height: 24px;
      }
    }

    .content {
      height: 105px;

      .image {
        float: left;
        width: 187px;
        height: 105px;
        margin-right: 18px;
      }

      .intro {
        overflow: hidden;

        .text {
          height: 72px;

          .gray {
            height: 14px;
            margin-bottom: 10px;
          }

          .text-long {
            @extend %skeleton-quick;
          }

          .text-shorten {
            @extend %skeleton-slowly;
          }
        }
      }

      .metas {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: 13px;

        .meta {
          width: 16%;
          margin-right: 5%;
          height: 20px;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }

  .only-h5 {
    height: 179px;
    padding: 10px;
    border-top: 1px solid $color-gray-4;

    .header {
      height: 24px;
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      .avatar {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-right: 4px;
      }

      .title {
        height: 17px;
        width: 100%;
      }
    }

    .content {
      height: 90px;
      margin-block: 10px;

      .image {
        float: right;
        width: 130px;
        height: 90px;
      }

      .intro {
        overflow: hidden;

        .text {
          height: 90px;

          .gray {
            height: 14px;
            margin-bottom: 10px;
          }

          .text-long {
            @extend %skeleton-quick;
          }

          .text-shorten {
            @extend %skeleton-slowly;
          }
        }
      }
    }

    .footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .meta {
        width: 16%;
        margin-right: 5%;
        height: 20px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>

<template>
  <div class="skeleton-article">
    <div class="only-pc">
      <div class="header">
        <div class="title gray" />
        <div class="area gray" />
      </div>
      <div class="content">
        <div class="image gray" />
        <div class="intro">
          <div class="text">
            <div class="text-long gray" />
            <div class="text-shorten gray" />
          </div>
          <div class="metas">
            <div class="meta gray" />
            <div class="meta gray" />
            <div class="meta gray" />
            <div class="meta gray" />
            <div class="meta gray" />
          </div>
        </div>
      </div>
    </div>
    <div class="only-h5">
      <div class="header">
        <div class="avatar gray" />
        <div class="title gray" />
      </div>
      <div class="content">
        <div class="image gray" />
        <div class="intro">
          <div class="text">
            <div class="text-long gray" />
            <div class="text-shorten gray" />
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="meta gray" />
        <div class="meta gray" />
        <div class="meta gray" />
        <div class="meta gray" />
        <div class="meta gray" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonArticle',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
