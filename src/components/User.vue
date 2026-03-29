<script setup>
import { computed } from 'vue';
import { useRoute, RouterLink, RouterView } from 'vue-router'

const route = useRoute()
const userName = computed(_ => route.params.name)

</script>

<template>
    <h1>You arrived at here, {{ userName }}</h1>
    <p>
        Needs some details? <RouterLink :to="{ name: 'details' }">Click here</RouterLink>.
    </p>
    <RouterView />
</template>