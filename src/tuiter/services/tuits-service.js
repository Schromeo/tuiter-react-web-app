import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = process.env.NODE_ENV === 'production' ? 'https://tuiter-node-server-app-8j8n.onrender.com/api/tuits' : 'http://localhost:4000/api/tuits';

export const createTuit = async (tuit) => {
    console.log("tuit in create:", tuit)
    const response = await axios.post(TUITS_API, tuit)
    // console.log(`${response} is res, data is ${response.data}`)
    return response.data;
}

export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}

export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const updateTuit = async (tuit) => {
    console.log("tuit:", tuit)
    const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    console.log("response from put:", response)
    return tuit;
}