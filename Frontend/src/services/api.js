import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api';

export const getUsers = () => axios.get(`${BASE_URL}/users`);
export const addUser = (name) => axios.post(`${BASE_URL}/add`, { name });
export const claimPoints = (userId) => axios.post(`${BASE_URL}/claim`, { userId });
