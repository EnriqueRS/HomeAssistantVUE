<template>
  <div v-on:click="showCard" class="card">
    <div class="container">
      <h4>
        <b>
          <i class="material-icons">{{ icon }}</i>{{ friendlyName }}
        </b>
      </h4>
      <h3>{{ value }} {{ props.symbol }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from "vue";

let props = defineProps({
  name: String,
  value: String,
  type: String,
  symbol: String,
});
const emit = defineEmits(['show-card']);
const friendlyName = ref(props.name.replace('temperature', '').replace('humidity', ''));
const icon = computed(
  () => `${props.type == "temperature" ? "thermostat" : "water_drop"}`
);

function showCard() {
  emit('show-card', props.name);
}
</script>

<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  max-width: 300px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 16px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>