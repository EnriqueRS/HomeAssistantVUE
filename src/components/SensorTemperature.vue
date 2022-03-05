<template>
  <h2>{{ name }}</h2>
  <h3>{{ temperature }}</h3>
  <br />
</template>

<script setup>
// import { ref } from "vue";
// export default {
// name: "SensorTemperature",
const props = defineProps({
  name: String,
  temperature: Number,
  key: String
});
// props: {
//   name: String,
//   temperature: Number,
//   key: String
// },
// setup(){
// const temperature = ref('');

// return {
// temperature
// }
// },
// };
</script>
<style scoped>
</style>