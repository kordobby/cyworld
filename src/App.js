import { Routes, Route } from "react-router-dom";
import Greetings from "./Components/UserComponents/Greetings";

import Home from "./Pages/Home";
import Join from "./Pages/Join";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import MyPage from "./Pages/MyPage";
import Error from "./Components/Commom/Error";
import Welcome from "./Components/MainComponents/Welcome";

import { getCookie } from "./Shared/Cookie";
function App() {
  const token = getCookie("token");

  return (
    <>
      <Routes>
        <Route path="/" element={<Main token={token} />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Join />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/greetings" element={<Greetings />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
      </Routes>
    </>
  );
}

//  17번 라인 /mypage/:userId 로 바꿀 것
export default App;
