import axios from 'axios';

const instance=axios.create({
    baseURL: '...' //api(cloud fxn) url
});
export default instance;