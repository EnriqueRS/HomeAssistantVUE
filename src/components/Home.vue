<template>
  <div class="container">
    <h-ainfo></h-ainfo>
    <h1>Sensors Temperature:</h1>
    <sensor-temperature
      v-for="sensor in sensorsTemperatureList"
      v-bind:key="sensor.context.id"
      v-bind:temperature="sensor.state"
      v-bind:name="sensor.attributes.friendly_name"
    ></sensor-temperature>
    {{ sensorsTemperatureList }}
  </div>
</template>

<script setup>
import HAinfo from "./HAinfo.vue";
import HandleHome from "../handle/handle-home";
import SensorTemperature from "./SensorTemperature.vue";
import { ref } from "vue";

  let sensorsTemperatureList = ref([]);
  let arrayTemp = [];
  
  HandleHome.getStates().then((sensorList) => {
    sensorList.forEach(sensor => {
      if(sensor.attributes.device_class === 'humidity'
      || sensor.attributes.device_class === 'temperature') {
        arrayTemp.push(sensor);
      }
    });
      sensorsTemperatureList.value = arrayTemp;
  });
</script>