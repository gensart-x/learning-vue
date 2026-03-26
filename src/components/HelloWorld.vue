<script setup>
/**
 * COMPOSABLES APPROACH
 * --------------------
 * Composables in Vue 3 (Composition API) are functions that encapsulate 
 * and reuse stateful logic. By moving logic like counters, API fetchers, 
 * or event listeners outside of a component, we make our code cleaner,
 * more modular, and easier to test or share across multiple components.
 */

// We import the specific composable file needed for this feature
import useCounter from '../composables/useCounter'

/**
 * WHAT'S HAPPENING HERE:
 * 1. We call our composable function `useCounter()`.
 * 2. It returns reactivity objects (refs, computed properties) and methods.
 * 3. We use object destructuring `{ count, doubled, tripled, increment }` 
 *    to extract exactly what we need for this component's template.
 * 4. Since these destructured properties are refs, Vue's reactivity system 
 *    automatically tracks them. When `count` changes, the template updates.
 */
const { count, doubled, tripled, increment } = useCounter()
</script>

<template>
  <div>
    <h2>Vue 3 Composables Example</h2>
    
    <!-- Using the reactive states provided by our composable -->
    <h3>Total count: {{ count }}</h3>
    <h3>Total doubled: {{ doubled }}</h3>
    <h3>Total tripled: {{ tripled }}</h3>

    <!-- Using the method provided by our composable to mutate state -->
    <button @click="increment">Increment Count</button>
  </div>
</template>

<style scoped>
button {
  padding: 8px 16px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
}

button:hover {
  background-color: #33a06f;
}
</style>