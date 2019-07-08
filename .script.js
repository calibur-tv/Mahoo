const npmCfg = require('./package.json')

const baiduStat = `var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?c10304a2f70ee2ddf8d2818551d37a4b";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)})();`
const baiduPush = `(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https://zz.bdstatic.com/linksubmit/push.js'}else{bp.src='http://push.zhanzhang.baidu.com/push.js'}var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(bp,s)})();`
const name = '咔哩吧'
const slogan = ' (｡･∀･)ﾉﾞ 你开心就好~~calibur'
const title = `${name}${slogan}`

const tags = {
  newbie: 'ugf6',
  notebook: 'uh4f',
  bangumi: '2he',
  topic: '3p6',
  game: '285'
}

module.exports = {
  tags,
  author: npmCfg.author,
  description: npmCfg.description,
  keywords: npmCfg.keywords.join(','),
  title,
  name,
  baiduStat,
  baiduPush
}
