<template>
  <div class="container">
    <h-ainfo></h-ainfo>
    <h1>({{ sensorsSize }}) Sensors:</h1>
    <div class="row">
    <sensor-temperature
    class="column"
      v-for="sensor in sensorsTemperatureList"
      v-bind:key="sensor.context.id"
      v-bind:value="sensor.state"
      v-bind:name="sensor.attributes.friendly_name"
      v-bind:type="sensor.attributes.device_class"
    ></sensor-temperature>
    </div>
  </div>
</template>

<script setup>
import HAinfo from "./HAinfo.vue";
import HandleHome from "../handle/handle-home";
import SensorTemperature from "./SensorTemperature.vue";
import { ref, computed } from "vue";

  let sensorsTemperatureList = ref([]);
  const sensorsSize = computed(() => `${sensorsTemperatureList.value.length}`)

  HandleHome.getSensorsTemperature().then((sensor) => {
    sensorsTemperatureList.value = sensor;
    console.log(sensorsTemperatureList);
  });
</script>

<style scoped>
/* Create four equal columns that floats next to each other */
.column {
  float: left;
  width: 25%;
  min-height: 8em;
  margin: 0.6em;
}

/* Clear floats */
.row:after {
  content: "";
  display: table;
   clear: both;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 900px) {
  .column {
    width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>