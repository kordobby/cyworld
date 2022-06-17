import React from 'react';
import styled from "styled-components";
import './Modal.css'


const Modal = (props) => {
    // console.log(props.children) 아마 내용 안 나올 것 < Modal 창 열리면 콘솔 내용 나올듯?
    const { open, close, header } = props;

    return (
        <div className={open ? 'modal':'modal_close'}>
            {open ? (
                <div>
                    <header>
                        {header}
                        <button className='close' onClick={close}>
                         close
                        </button>
                    </header>
                </div>
            )
            }
        </div>
    );
};

export default Modal;