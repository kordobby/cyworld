import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import { useState } from 'react';

const socket = io.connect('url');

const ChatBtn = () => {

  const userName = "Tom";
  const navigate = useNavigate();
  const [ room, setRoom ] = useState('');
  const [ showChat, setShowChat ] = useState(false);

  useEffect(() => {
    setRoom(1)
  }, [userName]);

  const joinRoom = (event) => {
    setShowChat(value => !value);
    socket.emit('update', room); // emit an event to all connected sockets
    console.log( `${userName}께서 채팅방에 입장하셨습니다.`);
  };

  return (
          <>
           <button onClick = {(event) => joinRoom(event)}>채팅창 입장</button>
          </>
        )
}

export default ChatBtn;