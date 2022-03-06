<template>
  <h2>{{ name }}</h2>
  <h3>{{ temperature }}º</h3>
  <br />
</template>

<script setup>
import {defineProps} from "vue";

defineProps({
  name: String,
  temperature: Number
});
</script>

<style scoped>
</style>