

export default function(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      let position = { x: 0, y: 0 }
      if (to.hash) {
        position = { selector: to.hash }
      }
      return position
    }
