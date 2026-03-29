<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <br>
    <RouterLink to="/about">About</RouterLink>
    <br>
    <RouterLink :to="{ name: 'user', params: { name: 'Genes' } }">my profile</RouterLink>
    <br>
    <RouterLink :to="{ name: 'user', params: { name: 'Yuno' } }">yuno profile</RouterLink>
  </nav>
  <RouterView />
</template>
