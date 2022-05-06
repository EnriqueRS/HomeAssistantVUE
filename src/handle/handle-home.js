import homeAssistantService from '../services/home-assistant.service';

class HandleHome {
  getStates() {
    return homeAssistantService.getStates().then(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }

  getSensors() {
    let sensorTemperatureList = [];
    return this.getStates().then((sensorList) => {
      sensorList.forEach(sensor => {
        if((sensor.attributes.device_class === 'humidity'
        || sensor.attributes.device_class === 'temperature') 
            && sensor.state !== 'unavailable') {
          sensorTemperatureList.push(sensor);
        }
      });
      return sensorTemperatureList;
    });
  }


  getSensorsTemperature() {
    let sensorTemperatureList = [];
    return this.getStates().then((sensorList) => {
      sensorList.forEach(sensor => {
        if(sensor.attributes.device_class === 'temperature'
            && sensor.state !== 'unavailable') {
          sensorTemperatureList.push(sensor);
        }
      });
      return sensorTemperatureList;
    });
  }

  getSensorsHumidity() {
    let sensorHumedityList = [];
    return this.getStates().then((sensorList) => {
      sensorList.forEach(sensor => {
        if(sensor.attributes.device_class === 'humidity'
            && sensor.state !== 'unavailable') {
          sensorHumedityList.push(sensor);
        }
      });
      return sensorHumedityList;
    });
  }
}
export default new HandleHome();