<template>
  <div id="about-layout">
    <ElRow class="container">
      <ElCol :span="16" :xs="24">
        <NuxtChild />
      </ElCol>
      <ElCol :span="8" :xs="0">
        <br>
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
export default {
  name: 'AboutLayout',
  layout: 'web'
}
</script>
