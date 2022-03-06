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

  getSensorsTemperature() {
    let sensorTemperatureList = [];
    this.getStates().then((sensorList) => {
      sensorList.forEach(sensor => {
        if((sensor.attributes.device_class === 'humidity'
        || sensor.attributes.device_class === 'temperature') 
            && sensor.state !== 'unavailable') {
          sensorTemperatureList.push(sensor);
        }
      });
    });
    return sensorTemperatureList;
  }
}
export default new HandleHome();