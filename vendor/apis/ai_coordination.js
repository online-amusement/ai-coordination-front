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

const memberEmailEdit = (data) =>
    axios.post(domain + '/member/email-edit', {
        email: data.email,
    })

const memberNicknameEdit = (data) =>
    axios.post(domain + '/member/nickname-edit', {
        nickname: data.nickname,
    })

const memberPasswordEdit = (data) =>
    axios.post(domain + '/member/password-edit', {
        password: data.password,
        password_confirmation: data.password_confirmation
    })

const news = (data) =>
    axios.get(domain + '/news', {

    });



export {
    memberTemporaryRegistration,
    memberOfficialRegistration,
    login,
    memberEmailEdit,
    memberNicknameEdit,
    memberPasswordEdit,
    news,
}



