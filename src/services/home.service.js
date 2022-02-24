import axios from 'axios';
import authHeader from './auth-header';
const API_URL = process.env.VUE_APP_URL_API_HOMEASSISTANT;
class HomeService {
  getStates() {
    return axios.get(API_URL + 'states', { headers: authHeader() });
  }
}
export default new HomeService();