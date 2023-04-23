import axios from 'axios';

let domain = process.env.API_URL + '/api';
let axiosInstance = axios.create();
axiosInstance.defaults.headers.Authorization = localStorage.getItem('auth._token.local');

//仮登録
const memberTemporaryRegistration = (data) =>
    axios.post(domain + '/member/temporary-registration', {
        email: data.email
    });

//本登録
const memberOfficialRegistration = (data) =>
    axios.post(domain + '/member/official-registration', {
        nickname: data.nickname,
        password: data.password,
        token: data.token
    });

const login = (data) =>
    axios.post(domain + '/login', {
        email: data.email,
        password: data.password,
    });

export {
    memberTemporaryRegistration,
    memberOfficialRegistration,
    login,
}



