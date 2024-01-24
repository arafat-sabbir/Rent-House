import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://rent-hunter-server.vercel.app/api',
})
const useAxios = () => {
    return instance;

};

export default useAxios;