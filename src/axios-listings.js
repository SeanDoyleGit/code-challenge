import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://adrenalin-code-challenge.firebaseio.com/'
});

export default instance;