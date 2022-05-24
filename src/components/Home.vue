<template>
  <div class="container">
    <h-ainfo
      @refresh="refreshData"
    ></h-ainfo>
    <h1>({{ sensorsSize }}) Sensors:</h1>
    <h2>Temperature Sensors:</h2>
    <div class="row">
    <sensor-temperature
      @show-card="showCard"
      class="column"
      v-for="sensor in sensorsTemperatureList"
      :key="sensor.context.id"
      :value="sensor.state"
      :name="sensor.attributes.friendly_name"
      :type="sensor.attributes.device_class"
      :symbol="sensor.attributes.unit_of_measurement"
    ></sensor-temperature>
    </div>
    <h2>Humedity Sensors:</h2>
    <div class="row">
    <sensor-temperature
      @show-card="showCard"
      class="column"
      v-for="sensor in sensorsHumedityList"
      :key="sensor.context.id"
      :value="sensor.state"
      :name="sensor.attributes.friendly_name"
      :type="sensor.attributes.device_class"
      :symbol="sensor.attributes.unit_of_measurement"
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
  let sensorsHumedityList = ref([]);
  const sensorsSize = computed(() => `${sensorsTemperatureList.value.length+sensorsHumedityList.value.length}`)

  function retrieveData() { 
    HandleHome.getSensorsTemperature().then((sensorsList) => {
      sensorsTemperatureList.value = sensorsList;
    });

    HandleHome.getSensorsHumidity().then((sensorsList) => {
      sensorsHumedityList.value = sensorsList;
    });
  }

  function showCard(name) {
    console.log(name);
  }

  function refreshData() {
    retrieveData();
  }
  refreshData();
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