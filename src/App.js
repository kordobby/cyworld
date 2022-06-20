import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Join from "./Pages/Join";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import MyPage from "./Pages/MyPage";

import { getCookie } from "./Shared/Cookie";
function App() {
  const token = getCookie("token");

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/lobby" element={<Main token={token} />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Join />}></Route>
        <Route path="/mypage/" element={<MyPage />}></Route>
      </Routes>
    </>
  );
}

//  17번 라인 /mypage/:userId 로 바꿀 것
export default App;
