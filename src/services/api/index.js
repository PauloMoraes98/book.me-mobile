import axios from 'axios';

const api = axios.create({
    baseURL: 'https://app-bookme.herokuapp.com'
});

export default api;
