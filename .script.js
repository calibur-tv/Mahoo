  const baiduStat = `var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?c10304a2f70ee2ddf8d2818551d37a4b";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)})();`
  const baiduPush = `(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https://zz.bdstatic.com/linksubmit/push.js'}else{bp.src='http://push.zhanzhang.baidu.com/push.js'}var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(bp,s)})();`
  const iPhoneXViewport = `(function(){var iOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;var ratio=window.devicePixelRatio||1;var screen={width:window.screen.width*ratio,height:window.screen.height*ratio};if(iOS&&screen.width===1125&&screen.height===2436){document.querySelector('meta[name=viewport]').content=document.querySelector('meta[name=viewport]').content+',viewport-fit=cover'}}());`

  module.exports = {
    baiduStat,
    baiduPush,
    iPhoneXViewport
  }
