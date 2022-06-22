import { Routes, Route } from "react-router-dom";
import Greetings from "./Components/UserComponents/Greetings";

import Join from "./Pages/Join";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import MyPage from "./Pages/MyPage";
import Error from './Components/Common/Error';
import Welcome from "./Components/MainComponents/Welcome";
import Chat from "./Pages/Chat";

import { getCookie } from "./Shared/Cookie";
import ThemeToggle from './Components/Common/ThemeToggle';
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./theme/theme";
import { useEffect } from "react";
import { deleteCookie } from "./Shared/Cookie";
import io from 'socket.io-client';

function App() {
  const socket = io.connect('ws://3.39.161.93:3000');
  const loginUser = getCookie('userName');

  const [ loginState, setLoginState ] = useState(false);

  const token = getCookie("token");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  }

 const logoutHandler = () => {
  deleteCookie('token');
  deleteCookie('userId');
  setLoginState(false);
  alert('로그아웃 되었습니다!');
};

useEffect(()=>{
  token ? setLoginState(true) : setLoginState(false)
},[token])

console.log(loginState);
return (
    <>
      <ThemeProvider theme = {isDarkMode ? darkTheme : lightTheme}>
      <ThemeToggle themeMode = {isDarkMode} toggleDarkMode = {toggleDarkMode} theme = {isDarkMode ? darkTheme : lightTheme}></ThemeToggle>
      <Routes>
        <Route path="/home" theme = {isDarkMode ? darkTheme : lightTheme} element={<Main socket = {socket} loginUser = {loginUser} loginState={loginState} logout = {logoutHandler} token = {token} themeMode = {isDarkMode}/>}></Route>
        <Route path="/login" theme = {isDarkMode ? darkTheme : lightTheme} element={<Login themeMode = {isDarkMode} setLoginState = {setLoginState}/> }></Route>
        <Route path="/signup" theme = {isDarkMode ? darkTheme : lightTheme} element={<Join themeMode = {isDarkMode}/>}></Route>
        <Route path="/mypage" theme = {isDarkMode ? darkTheme : lightTheme} element={<MyPage />}></Route>
        <Route path="/greetings" theme = {isDarkMode ? darkTheme : lightTheme} element={<Greetings />}></Route>
        <Route path="/error" theme = {isDarkMode ? darkTheme : lightTheme} element={<Error />}></Route>
        <Route path="/chats" theme = {isDarkMode ? darkTheme : lightTheme} element={<Chat logoutHandler = {logoutHandler} socket = {socket} themeMode = {isDarkMode} loginUser = {loginUser}/>}></Route>
        <Route path="/" theme = {isDarkMode ? darkTheme : lightTheme} element={<Welcome />}></Route>
      </Routes>
      </ThemeProvider>
    </>
  );
}

//  17번 라인 /mypage/:userId 로 바꿀 것
export default App;
