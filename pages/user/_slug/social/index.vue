<template>
  <div />
</template>

<script>
export default {
  asyncData({ redirect, route }) {
    redirect(`${route.path.replace(/\/$/, '')}/following`, route.query)
  }
}
</script>
