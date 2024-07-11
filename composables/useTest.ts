// composables/useTest.ts
import { ref } from 'vue'

export function useTest() {
  const count = ref(0)

  const increment = () => {
    count.value++
  }

  return { count, increment }
}