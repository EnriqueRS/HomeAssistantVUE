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
    const sensorList = this.getStates();
    console.log(sensorList);
    return sensorList;
  }
}
export default new HandleHome();