import React, { useState } from "react";
import Modal from "../Components/Modal";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const MyPage = () => {
  // console.log(props.children)

  // const { userId } = useParams();  userId 받을 떄 바꿀 것, App와 함께


  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
    <Div1>
      설정, 메뉴, 홈 등의 버튼
    </Div1>
    <Main_Div>
    
      <span>사이 좋은 사람들, 싸이월드 </span>
      <React.Fragment>
      <button onClick={openModal} >EDIT</button>
      <Modal open={modalOpen} close={closeModal} header="모달이 머리">
        {/* 여기 아래 내용들 Modal.jsx의 <Main> {props.children} <Main>으로 들어감 
             children의 범위에 대해서 다른 HTML에서 콘솔로 확인해볼 것 !  */}
       <> 
        <span>왼쪽 imageUrl,  </span> 
        <span>오른쪽 UserName</span>
        <span>오른쪽 아래 introMessage</span>
       </>
      </Modal>
      </React.Fragment>
    
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
    </>
  );
}


const Div1 = styled.div`

`

const Main_Div = styled.div`

`
const Div2 = styled.div`
 
 
`

const Div3 = styled.div`


`
const Div4 = styled.div`
   

`
const Div5 = styled.div`
   

`
const Div6 = styled.div`
 

`

export default MyPage;