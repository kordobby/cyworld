import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Join from "./Pages/Join";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import MyPage from "./Pages/MyPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/lobby" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Home />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
      </Routes>
    </>
  );
}

//  17번 라인 /mypage/:userId 로 바꿀 것
export default App;
