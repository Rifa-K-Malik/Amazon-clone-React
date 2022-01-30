import axios from 'axios';

const instance = axios.create({
    baseUrl: '...'  // The API Cloud Function 

});

export default instance