import axios from 'axios';

const initSurf = {
  list : [],
  loading : false,
  error : null
}

const LOAD_USERS = 'surfReducer/LOAD_USERS';
const loadUsers = () => ({ type : LOAD_USERS })

export const loadPostDB = ()=> {
  return async function(dispatch){ 
    try {
      const loadedData = await axios({
        method : 'get',
        url : "/api/lobby"
      })
      console.log(loadedData);
      console.log(loadedData.data.allUsers);
      /* 만약 성공한다면 checkId 를 true로 */
      dispatch(loadUsers(loadedData.data.allUsers));
      }
      catch ( error ) {
          console.log("데이터 Load 실패", error);
      }}
    };

// REDUCER
export default function postReducer(state=initSurf, action={}){
  switch (action.type){
      case LOAD_USERS : 
          return { ...state, list: action.payload};
      default:
          return state;
}}