import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-builder-1.firebaseio.com/'
});

export default instance;
