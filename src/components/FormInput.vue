<script setup>
import { ref, defineProps } from 'vue';

const name = ref('');

defineProps({
    placeholder: String
})
</script>
<template>
    <input v-model="name" />
    <p>{{ placeholder }} {{ name }}</p>
</template>