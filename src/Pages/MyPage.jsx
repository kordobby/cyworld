import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../Components/Modal";
import { loadMyDB, patchMyDB } from "../redux/modules/myPageReducer";

import styled from "styled-components";

import { getCookie } from "../Shared/Cookie";

import { BodyBox, LoginWrap, InputStyle, UserButton } from "../Components/UserComponents/UserStyled";

const MyPage = () => {
  // console.log(props.children)

  // hooks
  const dispatch = useDispatch()
  const mypageData = useSelector((state) =>state.mypageReducer?.list);
  
  // states
  const [imageUrl,setFiles] = useState(null)
  const [introMessage,setMessage] = useState(null)
  console.log(imageUrl,introMessage)
  const [modalOpen, setModalOpen] = useState(false);

  // events
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(imageUrl,introMessage)
    let formData = new FormData
    formData.append('image',imageUrl)
    // console.log(formData.append)
    
    dispatch(patchMyDB({formData,
                        introMessage,
                        token: getCookie('token') }))
    // console.log(formData.getAll('files'))
    }
  //1. 위의 onSubmit에서 console.log(formData.getAll('files')) 이렇게 치면 formData 객체 안의 값을 확인 할 수 있다.
  //   위와 같은 방법으로 콘솔 확인을 안 하면 navtive code 라는 형식으로 안의 키와 값을 볼 수 없을 것.

  // useEffect
  useEffect(()=>{
     dispatch(loadMyDB())
  },[dispatch])

  return (
    <BodyBox>
      <LoginWrap>
      <HeaderBox>
      설정, 메뉴, 홈 등의 버튼
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
        <Modal_div1 onSubmit={onSubmit}>

        <input type="file"  onChange={(event)=>{
          event.preventDefault();
          setFiles(event.target.files[0])}}/> 
        
        <input type="text" placeholder="내 기분을 적어주세요"  onChange={(event)=>{setMessage(event.target.value)}}/>
         

       
        
        <button>
              제출하기
        </button>
        </Modal_div1>
      </>
      </Modal>
      </React.Fragment>
      </Div2>
    
       <Div3>
       <span>왼쪽 imageUrl,  </span> 
       <span>오른쪽 UserName</span>
       <span>오른쪽 아래 introMessage</span>
       </Div3>
       <Div4>
       다이어리, 사진첩, 주크박스, 방명록
       </Div4>
       <Div5>
       MINI ROOM
       </Div5>
     </Main_Div>
     <Div6>
         홈, 미니홈피, 파도타기, 더보기 
       </Div6>
      </LoginWrap>
    
     </BodyBox>
  );
}

const HeaderBox = styled.div`
  width : 360px;
  height : 90px;
  background-color: var(--blue);

  display : flex;
  align-items: flex-end;
  box-sizing: border-box;

  position : fixed;
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
const Div4 = styled.div`
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



export default MyPage;