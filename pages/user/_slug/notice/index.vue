<template>
  <div />
</template>

<script>
export default {
  asyncData({ redirect, route }) {
    redirect(`${route.path.replace(/\/$/, '')}/social`, route.query)
  }
}
</script>
