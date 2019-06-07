<template>
  <div />
</template>

<script>
export default {
  asyncData({ redirect, route }) {
    redirect(`${route.path}timeline/`, route.query)
  }
}
</script>
