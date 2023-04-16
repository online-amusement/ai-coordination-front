import axios from 'axios';

let domain = process.env.API_URL + '/api';
let axios = axios.create();

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

export {
    memberTemporaryRegistration,
    memberOfficialRegistration,
}



