// 打开第三方分享窗口
const openShareWindow = (url, options) => {
  const temp = []
  for (const p in options) {
    if (options[p] != null) {
      temp.push(p + '=' + encodeURIComponent(options[p]))
    }
  }
  const _u = url + temp.join('&')
  window.open(_u, '', 'width=760, height=640, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no')
  return false
}

// 分享的类型设置
const shareFactory = (type, params) => {
  switch (type) {
    case 'weibo':
      openShareWindow('https://service.weibo.com/share/share.php?', {
        url: params.url,
        type: '3',
        count: '1',
        /** 是否显示分享数，1显示(可选) */
        appkey: params.appkey.weibo,
        /** 您申请的应用appkey,显示分享来源(可选) */
        title: params.title + params.weiboTag,
        /** 分享的文字内容(可选，默认为所在页面的title) */
        pic: params.pic[0],
        /** 分享图片的路径(可选) */
        searchPic: params.searchPic,
        ralateUid: '',
        /** 关联用户的UID，分享微博会@该用户(可选) */
        language: 'zh_cn',
        /** 设置语言，zh_cn|zh_tw(可选) */
        rnd: new Date().valueOf()
      })
      break
    case 'qzone':
      openShareWindow('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?', {
        url: params.url,
        showcount: 1,
        desc: params.desc,
        summary: params.summary,
        title: params.shortTitle,
        site: '咔哩吧',
        pics: params.pic,
        style: '203',
        width: 98,
        height: 22
      })
      break
    case 'qq':
      openShareWindow('https://connect.qq.com/widget/shareqq/index.html?', {
        url: params.url,
        /* 获取URL，可加上来自分享到QQ标识，方便统计 */
        desc: params.desc,
        /* 分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔） */
        title: params.title,
        /* 分享标题(可选) */
        summary: params.summary,
        /* 分享摘要(可选) */
        pics: params.pic,
        /* 分享图片(可选) */
        flash: '',
        /* 视频地址(可选) */
        site: '',
        /* 分享来源(可选) 如：QQ分享 */
        style: '201',
        width: 32,
        height: 32
      })
      break
    case 'tieba':
      openShareWindow('https://tieba.baidu.com/f/commit/share/openShareApi?', {
        title: params.title,
        url: params.url,
        uid: 726865,
        to: 'tieba',
        type: 'text',
        relateUid: '',
        pic: params.pic[0],
        key: '',
        sign: 'on',
        desc: '',
        comment: params.desc
      })
      break
    default:
      throw new Error('This type is not defined.')
  }
}

export default {
  install(Vue) {
    Vue.directive('share', {
      bind(el, binding) {
        el.vtype = Object.keys(binding.modifiers)[0]
        el.options = binding.value || {}

        el.addEventListener(
          'click',
          () => {
            shareFactory(
              el.vtype,
              Object.assign(
                {
                  title: document.title,
                  url: location.href,
                  desc: '',
                  pic: '',
                  summary: '',
                  shortTitle: '',
                  searchPic: false,
                  appkey: {
                    weibo: ''
                  },
                  weiboTag: '',
                  tp_id: 0,
                  aid: ''
                },
                el.options
              )
            )
          },
          false
        )
      },
      update(el, binding) {
        el.vtype = Object.keys(binding.modifiers)[0]
        el.options = binding.value || {}
      }
    })
  }
}
