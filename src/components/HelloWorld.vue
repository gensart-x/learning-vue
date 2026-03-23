<script setup>
import { ref, reactive, computed, watch, watchEffect } from 'vue'
import { NButton, NInput } from 'naive-ui'

const luckRate = computed(_ => {
  user.name

  return Math.random()
})

const count = ref(0)

watchEffect(_ => {
  console.log(count.value)
  console.log('i will run')
})

count.value = 5

const user = reactive({
  name: 'Genes',
  age: 24
})

watch(() => user.name, (oldName, newName) => {
  console.log(`${oldName} changed to ${newName}`)
})

</script>

<template>
  <h2>learning vue bcs my money never turned blue</h2>
  <h3>my luck rate: {{ luckRate }}</h3>
  <h3>I'm {{ user.name }} and I'm {{ user.age }} y.o.</h3>
  <n-input v-model:value="user.name" type="text" placeholder="Here is your name" size="medium" clearable autofocus @change=""></n-input>

  <n-button dashed type="info" v-on:click="count++">Count now is {{ count }}</n-button>
</template>