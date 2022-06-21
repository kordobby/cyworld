import axios from 'axios';
import apis from '../../Shared/api/apis';
import { setCookie } from '../../Shared/Cookie';

/* Init State */
const initUser = {
  loading : false,
  error : null,
  success : false,
  idCheck : false
}

/* ACTION TYPE */
// [ server ]
const SERVER_REQ_USER = 'userReducer/SERVER_REQ_USER';
const USER_SUCCESS = 'userReducer/USER_SUCCESS';
const USER_ERROR = 'userReducer/USER_ERROR';

// [ login & sign-up ]
const CHECK_ID = 'userReducer/CHECK_ID';

/* ACTION FUNC */
const serverReqUser = (payload) => ({ type : SERVER_REQ_USER, payload });
const reqSuccessUser = (payload) => ({ type : USER_SUCCESS, payload });
const reqErrorUser = (payload) => ({ type : USER_ERROR, payload });
const checkId = (payload) => ({ type : CHECK_ID, payload });

/* THUNK */
export const checkIdDB = (payload) => {
  console.log(payload);
  // payload : { email : #### } => 확인완료!
  return async function(dispatch) {
    dispatch(serverReqUser(true));
    try {
      const idCheck = await axios({
        method : 'get',
        url : `http://3.39.161.93:3000/api/duplicatesEmail/${payload.email}`, // => 확인완료!
      })                            ///api/duplicatesEmail/:email
      /* 만약 성공한다면 checkId 를 true로 */
      console.log(idCheck);
      dispatch(checkId(true));
      alert("사용 가능한 이메일 입니다!");
      }
      catch (error) {
        console.log(error);
        dispatch(checkId(false));
        alert(error.message);
      }
      finally {
        dispatch(serverReqUser(false));
      }
    }
};

export const signUpDB = (payload) => {
  console.log(payload) // => 잘 찍히는 것 확인!
  return async function(dispatch) {
    dispatch(serverReqUser(true));
    try {
      const join = await axios({
        method : 'post',
        url : 'http://3.39.161.93:3000/api/signUp',
        data : {
          email : payload.email,
          password : payload.password,
          confirmPassword : payload.confirmPassword,
          userName : payload.userName
        }
      })
      console.log(join);
      dispatch(reqSuccessUser(true));
      alert('회원가입 성공!')
    } catch (error) {
      console.log(error);
      dispatch(reqErrorUser(error));
      alert('회원가입 실패!');
    } finally {
      dispatch(serverReqUser(false));
    }
  }
}

export const loginDB = (payload) => {
  console.log(payload);  // payload 잘 찍히는지 확인 완료
  return async function(dispatch) {
    dispatch(serverReqUser(true));
    try { const login = await apis.login({ email : payload.email, password : payload.password});
      // try {
      // const login = await axios({
      //   method : 'post',
      //   url : 'http://3.39.161.93:3000/api/login',
      //   data : {
      //     email : payload.email,
      //     password : payload.password
      //   }
      // })
      console.log(login);
      /* 아래는 받는 값에 따라서 수정 가능성 있음! */
      const accessToken = login.data.token;
      setCookie('token', accessToken, {
        path : '/',
        expire : 'after60m'
      });
      setCookie('email', payload.email, {
        path : '/',
        expire : 'after60m'
      });
      // userData 는 state 에 저장 (휘발 시 쿠키에 넣기)
      // login State 관리
      
      // dispatch(userLogin(true));
      alert('로그인 성공!')
    } catch (error) {
      alert('실패!')
      console.log(error);
      dispatch(reqErrorUser(error));
    } finally {
      dispatch(serverReqUser(false));
    }
  }
}

/* REDUCER */
export default function userReducer( state = initUser, action ) {
  console.log(action)
  switch (action.type) {
      /* SERVER REQUEST */
      case SERVER_REQ_USER :
        return { ...state, loading : action.payload };
      case USER_SUCCESS :
        return { ...state, success : action.payload};  
      case USER_ERROR :
        return { ...state, login : false, error : action.payload }; 
      /* USER FEATURE */
      case CHECK_ID :
        return { ...state, idCheck : action.payload }; 
    default :
      return state;
  }
}