
<script setup lang="ts">
import { emailValidator, requiredValidator } from '~/utilities/validators'

const visible = ref<boolean>(false)
interface AuthData {
  email: string | null,
  password: string | null
}

const loginData = ref<AuthData>({
  email: null,
  password: null,
})
</script>

<template>
  <div>
    <AuthCard>
      <template #form>
        <VForm>
          <div class="input-control mb-4">
            <VTextField
              v-model="loginData.email"
              placeholder="Email"
              density="compact"
              variant="outlined"
              prepend-inner-icon="mdi-email-outline"
              :rules="[requiredValidator, emailValidator]"
            />
          </div>
          <div class="input-control mb-4">
            <VTextField
              v-model="loginData.password"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              density="compact"
              placeholder="Enter your password"
              prepend-inner-icon="mdi-lock-outline"
              variant="outlined"
              @click:append-inner="visible = !visible"
            />
          </div>


          <NuxtLink
            to="forgot-password"
            class="d-inline-block mb-4"
          >
            Forgot login password?
          </NuxtLink>

          <VBtn
            color="primary"
            size="large"
            block
          >
            Login
          </VBtn>

          <p class="text-center mb-0 mt-4">
            New User ? 
            <NuxtLink
              to="register"
              class="d-inline-block mb-4"
            >
              Register
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