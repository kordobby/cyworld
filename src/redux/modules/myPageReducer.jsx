//     마이페이지 = /api/myPage/{userId}
//     마이페이지 수정 = /api/myPage/{userId}
import axios from "axios";

/* ----------------- 모듈의 초기 상태 ------------------ */
let intialstate = {
  list: [],
 
};

/* ----------------- 액션 타입 ------------------ */

const LOAD_MYPAGE = "Mypage_reducer/LOAD";


/* ----------------- 액션 생성 함수 ------------------ */
export function loadMyData(payload) {
  return { type: LOAD_MYPAGE, payload };
}



// export function createHeart(payload) {
//   console.log("생성중입니다.");
//   return { type: CREATE_HEART, payload };
// }

/* ----------------- 미들웨어 ------------------ */
export const loadMyDB = (payload) => {
  return async function (dispatch) {
  } }
//     try {
//         const mypageData = await axios.get(
//             `${서버}/detail/${payload.userId}`
//             , {
//             headers: {
//                 Authorization : `Bearer ${payload.token}`         
//                      }
//              });
//          console.log(mypageData.data);
//          dispatch(loadMyData(mypageData.data));
//     }catch(error){
//          console.log('마이페이지 로드 실패');
//     }
//   };
// };



/* ----------------- 리듀서 ------------------ */
export default function mypageReducer(state = intialstate, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case LOAD_MYPAGE: {
      return { list: action.payload };
    }
    
    default:
      return state;
  }
}
