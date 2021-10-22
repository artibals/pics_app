import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID kAy41-Fn26Q2BV0HXtI8-uMRFjTcvOyshnhmDLRZTps'
    }
});