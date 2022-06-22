import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery, useMutation } from "react-query";

import Modal from "../Components/Modal";
import { patchMyDB, loadMyDB } from "../redux/modules/myPageReducer";

import styled from "styled-components";
import axios from "axios";

// import { getCookie } from "../Shared/Cookie";

import { BodyBox, LoginWrap, InputStyle, UserButton } from "../Components/UserComponents/UserStyled";

import { StWrap , MainWrap } from "../Components/MainComponents/MainStyled";
import FooterIsLogin from "../Components/MainComponents/FooterIsLogin";
import { useNavigate } from "react-router-dom";



const MyPage = ({token}) => {
  // console.log(props.children)

  // hooks
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const mypageData = useSelector((state) =>state.mypageReducer.intialstate);
  // console.log(mypageData)
  // states
  const [imageUrl,setFiles] = useState(null)
  const [introMessage,setMessage] = useState(null)
  const [music, setMusic] = useState(null)
  // console.log(imageUrl,introMessage)
  const [modalOpen, setModalOpen] = useState(false);

  // useEffect
    useEffect(()=>{
      dispatch(loadMyDB(token))
      dispatch(Playlistfetcher(mypageData?.playlist))
   },[dispatch,mypageData?.imageUrl,mypageData?.introMessage])
  
  

  // events
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const onClick = async (event) => {
    event.preventDefault();
    console.log(imageUrl,introMessage)

    let formData = new FormData
    formData.append('image',imageUrl)
    // console.log(formData.getAll('image'))
    
    formData.append("introMessage", introMessage)
    // console.log(formData.getAll('introMessage'))

   const patchData = await axios({
    method : "patch",
    url : "http://3.39.161.93:3000/api/mypage",
    data : formData,
    headers : {
      "Content-Type" : "multipart/form-data",
      Authorization : `Bearer ${token}`
    }})
    // console.log(mypageData)
    dispatch(patchMyDB({patchData}))
    setModalOpen(false)
  }
  //   console.log(formData.getAll('image'))

  // console.log(mypageData?.playlist)


  // useQuery data - get 
  const Playlistfetcher = (payload) => {
    return async function (dispatch) { 
    const PlayData = await axios.get(`http://3.39.161.93:3000/api/playlists/${payload}`);
    // console.log(payload)
    // console.log(PlayData.config.url)
    setMusic(PlayData?.config.url)
  }
}
  // const { data, isLoading, isSuccess, isError } = useQuery('data', Playlistfetcher);
  // console.log(data)
  
 
  return (
    <>
    <StWrap>
    <BodyBox>
      <MainWrap>
      
      <HeaderBox>
        
        <Circle/>
        <Circle/>
        <Circle/>
      
      </HeaderBox>
    <Main_Div>
      <Div2>
        <Div2_1>
      사이 좋은 사람들, 싸이월드 
      <button onClick={openModal} >EDIT</button>
        </Div2_1>
      <React.Fragment>
      <Modal width="100%" open={modalOpen} close={closeModal} header="모달이 머리">
        {/* 여기 아래 내용들 Modal.jsx의 <Main> {props.children} <Main>으로 들어감 
             children의 범위에 대해서 다른 HTML에서 콘솔로 확인해볼 것 !  */}
       <>
        <Modal_div1>

        <input type="file"  onChange={(event)=>{
          event.preventDefault();
          setFiles(event.target.files[0])}}/> 
        
        <input type="text" placeholder="내 기분을 적어주세요"  onChange={(event)=>{
           event.preventDefault();
          setMessage(event.target.value)}}/>
         

       
        
        <button onClick={onClick}>
              제출하기
        </button>
        </Modal_div1>
      </>
      </Modal>
      </React.Fragment>
      </Div2>
       <Div3>
         <img  style={{width: '350px', height: '220px' }} src={
          `https://hanghae-mini-project.s3.ap-northeast-2.amazonaws.com/${mypageData?.imageUrl}`
         } ></img>  
       <p>{mypageData?.User.username}</p>
       <p>{mypageData?.introMessage}</p>   
       </Div3>

       <MusicDiv>
       <audio src={music} controls  />
       
       </MusicDiv>

       <Div5>
       MINI ROOM
       </Div5>
      </Main_Div>
      <Div6>     
     <FooterIsLogin/>
       </Div6>
      
      </MainWrap>
     </BodyBox>
     </StWrap>
     </>
  );
}

const HeaderBox = styled.div`
  width : calc(100vh - 53vh);
  height : 90px;
  background-color: var(--blue);
  display : flex;
  align-items: flex-end;
  box-sizing: border-box;
  position : fixed;
  top : 0;
`

const Circle = styled.div`
  width : 10px;
  height: 10px;
  border: 1px solid white;
  background-color: #FFFFFF ;
  z-index: 1;
  position: absolute;
  top : 0;
`


const Main_Div = styled.div`
  width : 100%;
  height: 756px;
  display: flex;
  justify-content: center;
  /* justify-content: space-around; */
  align-items: center;
  flex-direction: column;
  margin-bottom: 2px;
  /* flex-direction: column; */
`
const Div2 = styled.div`
  width: 360px;
  position: absolute;
  top: 100px;
  /* display: flex; */
  /* justify-content: space-between; */
 
`

const Div2_1 = styled.div`
  display: flex;
  justify-content: space-between;
`


const Div3 = styled.div`
width: 360px;
border : 1px solid black;
height : 248px;
position: absolute;
  top: 130px
`
const MusicDiv = styled.div`
width: 360px;
border: 1px solid black;
height : 105px;
position: absolute;
  top: 386px
`
const Div5 = styled.div`
 width: 360px;
 border: 1px solid black;
 height : 248px;
 position: absolute;
  top: 500px
`
const Div6 = styled.div`
width: 360px;
height : 80px;
border: 1px solid black
`

//Modal
const Modal_div1 = styled.form`
display : flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

/* const Audio = styled.audio`
    filter: sepia(20%) saturate(70%) grayscale(1) contrast(99%) invert(12%);
    width: 200px;
    height: 25px;
` */



export default MyPage;