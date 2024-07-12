
<script setup lang="ts">
const visible = ref<boolean>(false)
</script>

<template>
  <div>
    <AuthCard>
      <template #form>
        <div class="mb-4">
          <h2 class="text-center">
            Forgot your password?
          </h2>
          <p class="text-center">
            Enter your email and we will send you instructions to reset your password.
          </p>
        </div>
        <VForm>
          <div class="input-control mb-4">
            <VTextField
              label="Email"
              density="compact"
              prepend-inner-icon="mdi-email-outline"
            />
          </div>

          <VBtn
            color="primary"
            size="large"
            block
          >
            Send
          </VBtn>
        </VForm>
      </template>
    </AuthCard>
  </div>
</template>


<style scoped>
/* */
</style>