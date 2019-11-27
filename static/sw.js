importScripts('https://file.calibur.tv/static/workbox/4.3.1/workbox-sw.js')

// --------------------------------------------------
// Configure
// --------------------------------------------------

// Set workbox config
workbox.setConfig({
  debug: false
})

// Start controlling any existing clients as soon as it activates
workbox.core.clientsClaim()

// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting()

workbox.precaching.cleanupOutdatedCaches()

// --------------------------------------------------
// Precaches
// --------------------------------------------------

// Precache assets

// --------------------------------------------------
// Runtime Caching
// --------------------------------------------------

// Register route handlers for runtimeCaching
workbox.routing.registerRoute(new RegExp('https://file.calibur.tv/web/'), new workbox.strategies.CacheFirst({}), 'GET')
workbox.routing.registerRoute(new RegExp('/'), new workbox.strategies.NetworkOnly({}), 'GET')
