<template>
  <div />
</template>

<script>
export default {
  asyncData({ redirect, route }) {
    redirect(`${route.path}following/`, route.query)
  }
}
</script>
