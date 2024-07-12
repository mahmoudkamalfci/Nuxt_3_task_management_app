
<script setup lang="ts">
const visible = ref<boolean>(false)
</script>

<template>
  <div>
    <AuthCard>
      <template #form>
        <VForm>
          <div class="input-control mb-4">
            <VTextField
              label="Name"
              density="compact"
              prepend-inner-icon="mdi-account"
            />
          </div>
          <div class="input-control mb-4">
            <VTextField
              label="Email"
              density="compact"
              prepend-inner-icon="mdi-email-outline"
            />
          </div>
          <div class="input-control mb-4">
            <VTextField
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              density="compact"
              placeholder="Enter your password"
              prepend-inner-icon="mdi-lock-outline"
              variant="outlined"
              @click:append-inner="visible = !visible"
            />
          </div>
      

          <VBtn
            color="primary"
            size="large"
            block
          >
            Register
          </VBtn>

          <p class="text-center mb-0 mt-4">
            Have an Account ? 
            <NuxtLink
              to="login"
              class="d-inline-block mb-4"
            >
              login
            </NuxtLink>
          </p>
        </VForm>
      </template>
    </AuthCard>
  </div>
</template>


<style scoped>
/* */
</style>