import axios from 'axios';
import authHeader from './auth-header';
const API_URL = process.env.VUE_APP_URL_API_HOMEASSISTANT;
class HomeAssistantService {
  getStates() {
    return axios.get(API_URL + 'states', { headers: authHeader() });
  }

  getInfo(){
    return axios.get(API_URL + 'config', {headers: authHeader()});
  }
}
export default new HomeAssistantService();