import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${process.env.NODE_ENV === 'production' ? 'https://tuiter-node-server-app-8j8n.onrender.com/api' : 'http://localhost:4000/api'}/users`;

const api = axios.create({ withCredentials: true });

export const login = async ({ username, password }) => {
    const response = await api.get(`${USERS_URL}/login?username=${username}&password=${password}`);
    const user = response.data;
    return user;
};
export const logout = async () => {
const response = await api.post(`${USERS_URL}/logout`);
return response.data;
};

export const profile = async (username) => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response.data;
};

export const getProfile = async (username) => {
    const response = await api.get(`${USERS_URL}/profile?username=${username}`);
    return response.data;
};

export const updateUser = async ({ username, firstName, lastName }) => {
    console.log("updateUser", username, firstName, lastName);
    fetch(`${USERS_URL}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, firstName, lastName }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success in updateUser:', data);
            return data;
        })
        .catch((error) => {
            console.error('Error in updateUser:', error);
            return error;
        });
};

export const register = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/register`, { username, password });
    const user = response.data;
    return user;
};