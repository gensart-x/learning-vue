<script setup>
import useCounter from '../composables/useCounter'

const { count, doubled, tripled } = useCounter()
</script>

<template>
  <h3>Total count: {{ count }}</h3>
  <h3>Total doubled: {{ doubled }}</h3>
  <h3>Total tripled: {{ tripled }}</h3>
</template>