export default {
  bilibili: {
    regex: /https?:\/\/www\.bilibili\.com\/video\/av([\w\W]+)/,
    embedUrl: '//player.bilibili.com/player.html?aid=<%= remote_id %>',
    html: "<iframe width='100%' height='400' scrolling='no' border='0' frameborder='no' framespacing='0' allowtransparency='true' allowfullscreen='true'></iframe>",
    id: val => val[0].split('/')[0].split('?')[0]
  },
  bilih5: {
    regex: /https?:\/\/m\.bilibili\.com\/video\/av([\w\W]+)/,
    embedUrl: '//player.bilibili.com/player.html?aid=<%= remote_id %>',
    html: "<iframe width='100%' height='400' scrolling='no' border='0' frameborder='no' framespacing='0' allowtransparency='true' allowfullscreen='true'></iframe>",
    id: val => val[0].split('.')[0].split('?')[0]
  },
  netease: {
    regex: /https?:\/\/music\.163\.com\/#\/song\?id=([\w\W]+)/,
    embedUrl: '//music.163.com/outchain/player?type=2&height=66&id=<%= remote_id %>',
    html: "<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' width='330' height='86'></iframe>",
    id: val => val[0].split('/')[0].split('?')[0]
  },
  neteaseh5: {
    regex: /https?:\/\/music\.163\.com\/m\/song\?id=([\w\W]+)/,
    embedUrl: '//music.163.com/outchain/player?type=2&height=66&id=<%= remote_id %>',
    html: "<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' width='330' height='86'></iframe>",
    id: val => val[0].split('/')[0].split('?')[0]
  }
}
