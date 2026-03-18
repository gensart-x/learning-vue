<script setup>
import { ref, computed } from 'vue'

const search = ref('')
const users = ref(['Alice', 'Bob', 'Charlie'])

const filteredUsers = computed(() => {
  return users.value.filter(user =>
    user.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
  <input v-model="search" placeholder="Search..." />

  <ul>
    <li v-for="user in filteredUsers" :key="user">
      {{ user }}
    </li>
  </ul>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
