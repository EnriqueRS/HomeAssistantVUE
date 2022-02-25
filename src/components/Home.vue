<template>
  <div class="container">
    <h-ainfo></h-ainfo>
    <sensor-temperature></sensor-temperature>
  </div>
</template>
<script>
import HAinfo from './HAinfo.vue';
import HandleHome from '../handle/handle-home'
import SensorTemperature from './SensorTemperature.vue';
import { ref, onMounted } from "vue";

export default {
  components: { 
    HAinfo, 
    SensorTemperature 
  },
  name: "Home",
  setup(){
    const sensorsTemperatureList = ref([]);

    onMounted(() =>{
      // sensorsTemperatureList.value = HandleHome.getSensorsTemperature();
      HandleHome.getSensorsTemperature().then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  });

  return {
    sensorsTemperatureList
  }
  },
};
</script>