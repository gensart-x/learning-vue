import { ref, computed } from 'vue'

const useCounter = () => {
    // State: Reactive reference
    const count = ref(0)
    
    // Computed properties dependent on 'count'
    const doubled = computed(() => count.value * 2)
    const tripled = computed(() => count.value * 3)

    // Method to mutate the state
    const increment = () => {
        count.value++
    }

    // Return the state, computed properties, and methods so they can be consumed by components
    return {
        count,
        doubled,
        tripled,
        increment
    }
}

export default useCounter