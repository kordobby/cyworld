import axios from "axios";
import { setCookie, getCookie } from '../../../Shared/Cookie';

/* axios instance */
const api = axios.create({
    baseURL: "http://3.39.161.93:3000"
})

/* req interceptor => 2개의 callback 함수 받음 */
// api.interceptors.request.use(
// 		// 요청 성공 직전 호출
// 		// axios 설정값 넣음
//     config => {
//         const token = getCookie("token");
//         config.headers.Authorization = token;
//         return config;
//     },
// 		// 요청 에러 직전 호출
//     error => {
//         console.log(error);
//     }
// )

/* res interceptor => 2개의 callback 함수 받음 */
api.interceptors.response.use(
    response => {
        // console.log(response.data);
        // setCookie('token', response.data.token, {
        //   path : '/',
        //   expire : 'after60m'
        // });
        // setCookie('userId', response.data.userId, {
        //   path : '/',
        //   expire : 'after60m'
        // });
        return response;
    },
    error => {
        console.log(error);
    }
);

export default api;