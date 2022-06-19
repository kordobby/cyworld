import React from 'react';
import styled from "styled-components";



const Modal = (props) => {
    // console.log(props.children) 
    const { open, close, header } = props;
    
    return (
        <>
        {open ? ( <ModalBox>
            <Header>
                {header}
                <button className="close" onClick={close}>
                &times;
                </button>
            </Header>

            <main>
                {props.children}
            </main>
         
        </ModalBox>):(null)}
       
        </>
        );
};

const ModalBox = styled.div`
    border: 5px solid black;
    width: 360px;
    height: 540px;
    z-index: 99;
    position:relative;
    background-color: aliceblue;
    /* display : flex;
    justify-content: center;
    align-items: center; */
    /* flex-direction: column; */
`

const Header = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
`

// const Main = styled.div`
//     display: flex;
//     justify-content: space-between;
// `
export default Modal;