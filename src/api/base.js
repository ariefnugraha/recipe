import axios from 'axios';

const API = axios.create({
    baseURL: 'https://api.spoonacular.com',
    params: {
        apiKey: '276ec49dd63a481ba862b45990caa2dd'
    }
})

export default API;