<template>
  <div />
</template>

<script>
export default {
  asyncData({ redirect, route }) {
    redirect(`${route.path.replace(/\/$/, '')}/timeline`, route.query)
  }
}
</script>
