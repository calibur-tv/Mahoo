export default async function (ctx, inject) {
  const icons = {"64x64":"https://file.calibur.tv/web/icons/icon_64.a9a872.png","120x120":"https://file.calibur.tv/web/icons/icon_120.a9a872.png","144x144":"https://file.calibur.tv/web/icons/icon_144.a9a872.png","152x152":"https://file.calibur.tv/web/icons/icon_152.a9a872.png","192x192":"https://file.calibur.tv/web/icons/icon_192.a9a872.png","384x384":"https://file.calibur.tv/web/icons/icon_384.a9a872.png","512x512":"https://file.calibur.tv/web/icons/icon_512.a9a872.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
