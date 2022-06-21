import React, { useEffect, useState, useRef } from 'react';
import { Socket } from 'socket.io-client';

const Yoon = ({socket, userName, room}) => {
  const [ currentMsg, setCurrentMsg ] = useState('');
  const [ msgList, setMsgList ] = useState([]);
  const inputRef = useRef();

  const sendMsg = async() => {
    if (currentMsg !== "") {
      const msgData = {
        room : room,
        author : userName,
        message : currentMsg,
        time :
        new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
      };
      await socket.emit('message', msgData);
      setMsgList((list) => [...list, msgData]);
      inputRef.current.value = "";
    }
  }

  useEffect(() => {
    socket.on('chat', (data) => {
      setMsgList((list) => [...list, data]);
    })
  }, [socket]);

  return (
    <>
      <div>
        <div className = "header"><span>오늘의 날짜</span></div>
        <div className = "body">
          { msgList.map((value, index) => {
            return (
              <>
                <div
                  className = 'message'
                  id = {userName === value.author ? 'other' : 'you'}
                  key = {index}>
                </div>

                <div className = 'msg-content'>
                  <p>{value.message}</p>
                </div>
                
                <div className = 'msg-meta'>
                  <p id = 'time'>{value.time}</p>
                  <p id = 'author'>{value.author}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>    
      <div className = 'footer'>
        <input
          type = 'text'
          placeholder='대화입력'
          onChange = { (event) => setCurrentMsg(event.target.value)}
          onKeyDown = { (event) => {
            event.key === 'Enter' && sendMsg();
          }}
          ref = {inputRef}
        />
        <button onClick = {sendMsg}>send!</button>
      </div>
    </>
        )
}
