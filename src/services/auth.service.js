import axios from 'axios';
const API_URL = process.env.VUE_APP_URL_API;
class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        console.log(response);
        const token = response.data.body.token;
        console.log(JSON.stringify(response.data));
        if (token) {
          localStorage.setItem('user', JSON.stringify(response.data.body));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}
export default new AuthService();