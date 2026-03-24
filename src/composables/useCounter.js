import { ref, computed } from 'vue'

const useCounter = () => {
    const count = ref(0)
    const doubled = computed(_ => count.value * 2)
    const tripled = computed(_ => count.value * 3)

    return {
        count,
        doubled,
        tripled
    }
}

export default useCounter