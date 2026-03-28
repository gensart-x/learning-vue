<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

const name = ref('Yuno')

</script>

<template>
  <HelloWorld :name="name"/>
</template>
