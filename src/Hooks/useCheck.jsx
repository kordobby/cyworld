// 로그인, 회원가입 유효성 검사 파일

// 아이디 형식 검사
export const emailCheck = (username) => {
  let _reg = /^(?=.*[0-9a-zA-Z])[가-힣a-zA-Z0-9-_.]{4,15}$/;
  return _reg.test(username);
};

// 비밀번호 체크
export const passwordCheck = (passwordcheck) => {
  let regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
  return regPass.test(passwordcheck);
};

// 정규식
// ^ => 시작
// (?=.*\d) => 0~9까지의 숫자 표현
// (?=.*[a-zA-Z]) => 알파벳

// 숫자 영어 필수 4-15
// 비번 영어숫자특수문자 필수 4-20