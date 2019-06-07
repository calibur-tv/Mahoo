<template>
  <div />
</template>

<script>
export default {
  asyncData({ redirect, route }) {
    redirect(`${route.path.replace(/\/$/, '')}/basic`, route.query)
  }
}
</script>
