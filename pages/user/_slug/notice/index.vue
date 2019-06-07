<template>
  <div />
</template>

<script>
export default {
  asyncData({ redirect, route }) {
    redirect(`${route.path}social/`, route.query)
  }
}
</script>
