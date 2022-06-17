// 회원가입  :     /api/signup
// 로그인 :        /api/login
// 중복확인 :      /api/duplicatesemail/:email

import axios from 'axios';
import { setCookie } from '../../Shared/Cookie';

/* Init State */
const initUser = {
  userName : "",
  userId : "",
  loading : false,
  error : null,
  idCheck : false,
  isLogin : false
}

/* ACTION TYPE */
// [ server ]
const SERVER_REQ_USER = 'userReducer/SERVER_REQ_USER';
const USER_SUCCESS = 'userReducer/USER_SECCESS';
const USER_ERROR = 'userReducer/USER_ERROR';

// [ login & sign-up ]
const LOGIN = 'userReducer/LOGIN';
const CHECK_ID = 'userReducer/CHECK_ID';

/* ACTION FUNC */
const serverReqUser = (payload) => ({ type : SERVER_REQ_USER, payload });
const reqSuccessUser = (payload) => ({ type : USER_SUCCESS, payload });
const reqErrorUser = (payload) => ({ type : USER_ERROR, payload });

const login = (payload) => ({ type : LOGIN, payload });
const checkId = (payload) => ({ type : CHECK_ID, payload });

/* THUNK */
export const checkIdDB = (payload) => {
  console.log(payload);
  // payload : { email : #### }
  return async function(dispatch) {
    dispatch(serverReqUser(true));
    try {
      const idCheck = await axios({
        method : 'get',
        url : `/api/duplicatesemail/${payload.email}`,
        data : {
          email : payload.email
        }
      })
      dispatch(checkId(false));
      alert(idCheck.data);
      }
      catch (error) {
        dispatch(checkId(false));
        alert(error.message);
      }
      finally {
        dispatch(serverReqUser(false));
      }
    }
};

export const signUpDB = (payload) => {
  return async function(dispatch, getState) {
    dispatch(serverReqUser(true));
    try {
      const join = await axios({
        method : 'post',
        url : '.../api/signup',
        data : {
          email : payload.email,
          password : payload.password,
          confirmPassword : payload.confirmPassword,
          userName : payload.userName
        }
      })
    } catch (error) {
      dispatch(reqErrorUser(error));
      alert(error.message);
    } finally {
      dispatch(serverReqUser(false));
    }
  }
}

export const loginDB = (payload) => {
  return async function(dispatch) {
    dispatch(serverReqUser(true));
    try {
      const login = await axios({
        method : 'post',
        url : '/api/login',
        data : {
          email : payload.email,
          password : payload.password
        }
      })
      const accessToken = login.headers.authorization.split(" ")[1];
      setCookie('token', accessToken, {
        path : '/',
        expire : 'after60m'
      });
      const loginData = {
        isLogin : true,
        userName : login.data.userName,
        userId : login.data.userId
      };
      dispatch(login(loginData));
      alert('로그인 성공!')
    } catch (error) {
      dispatch(reqErrorUser(error));
      alert(error.message);
    } finally {
      dispatch(serverReqUser(false));
    }
  }
}

/* REDUCER */
export default function userReducer( state = initUser, action ) {
  switch (action.type) {
      /* SERVER REQUEST */
      case SERVER_REQ_USER :
        return { ...state, loading : action.payload };
      case USER_SUCCESS :
        return { ...state, login : action.payload, error : null };  
      case USER_ERROR :
        return { ...state, login : false, error : action.payload }; 

      /* USER FEATURE */
      case CHECK_ID :
        return { ...state, idCheck : action.payload }; 
      case LOGIN :
        return { ...state,
          login : action.payload.isLogin,
          userName : action.payload.userName,
          userId : action.payload.userId }; 
    default :
      return state;
  }
}