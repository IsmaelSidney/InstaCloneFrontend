import axios from 'axios';

const api = axios.create({
    baseURL:'https://instaclonebackend.herokuapp.com/'
});

export default api;