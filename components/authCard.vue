<template>
  <div class="auth-container d-flex align-center">
    <VCard
      class="mx-auto"
      min-width="40%"
    >
      <VImg
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        cover
      />
      <VCardText class="pa-6">
        <slot name="form" />
      </VCardText>
    </VCard>
  </div>
</template>

<script setup lang="ts">

//
</script>

<style scoped>
.auth-container {
  min-height: 90vh;
  width: 100%;
}
</style>