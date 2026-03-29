<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue';

const route = useRoute()
const router = useRouter()
const name = computed(() => route.params.name)

const goBackHome = _ => router.push('/')

</script>

<template>
    <hr>
    <h5>Detail about user : {{ name }}</h5>
    <h6>Detailed information goes here...</h6>
    <button @click="goBackHome">Let's back you home</button>
    <hr>
</template>