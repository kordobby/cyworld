import axios from 'axios';
import { setCookie } from '../../Shared/Cookie';

/* Init State */
const initUser = {
  userName : "",
  userId : "",
  loading : false,
  error : null,
  success : false,
  idCheck : false
  // isLogin : false
}

/* ACTION TYPE */
// [ server ]
const SERVER_REQ_USER = 'userReducer/SERVER_REQ_USER';
const USER_SUCCESS = 'userReducer/USER_SUCCESS';
const USER_ERROR = 'userReducer/USER_ERROR';

// [ login & sign-up ]
const LOGIN = 'userReducer/LOGIN';
const CHECK_ID = 'userReducer/CHECK_ID';
const LOGOUT = 'userReducer/LOGOUT';

/* ACTION FUNC */
const serverReqUser = (payload) => ({ type : SERVER_REQ_USER, payload });
const reqSuccessUser = (payload) => ({ type : USER_SUCCESS, payload });
const reqErrorUser = (payload) => ({ type : USER_ERROR, payload });

const login = (payload) => ({ type : LOGIN, payload });
const checkId = (payload) => ({ type : CHECK_ID, payload });
const logout = (payload) => ({ type : LOGOUT, payload });

/* THUNK */
export const checkIdDB = (payload) => {
  console.log(payload);
  // payload : { email : #### } => 확인완료!
  return async function(dispatch) {
    dispatch(serverReqUser(true));
    try {
      const idCheck = await axios({
        method : 'get',
        url : `http://3.38.151.80:3000/api/duplicatesEmail/${payload.email}`, // => 확인완료!
      })
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
        url : 'http://3.38.151.80:3000/api/signUp',
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
    try {
      const login = await axios({
        method : 'post',
        url : 'http://3.38.151.80:3000/api/login',
        data : {
          email : payload.email,
          password : payload.password
        }
      })
      /* 아래는 받는 값에 따라서 수정 가능성 있음! */
      const accessToken = login.headers.authorization.split(" ")[1];
      setCookie('token', accessToken, {
        path : '/',
        expire : 'after60m'
      });
      // userData 는 state 에 저장 (휘발 시 쿠키에 넣기)
      // login State 관리
      const loginData = {
        isLogin : true,
        userName : login.data.userName,
        userId : login.data.userId
      };
      dispatch(login(loginData));
      alert('로그인 성공!')
    } catch (error) {
      dispatch(reqErrorUser(error));
      alert('이메일 또는 패스워드 확인해주세요.');
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
        return { ...state, success : action.payload};  
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
      case LOGOUT :
        return { ...state,
          login : false,
          userName : null,
          userId : null }; 
    default :
      return state;
  }
}