import axios from 'axios';

const API = axios.create({
    baseURL: 'https://api.spoonacular.com'
})

export default API;