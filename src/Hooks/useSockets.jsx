import io, { Socket } from 'socket.io-client';
import { useCallback } from 'react';

const backUrl = '';
// socket.on : 서버에서 클라이언트로 보내는 이벤트
// socket. emit
const useSocket = () => {
  const socket = io.connect(`${backUrl}`)
  socket.emit('hello', 'world');  // event, args
  socket.on('message', (data)=>{  
    console.log(data);
  });
  socket.on('data', (data) => {
    console.log(data);
  });
  socket.on('onlineList', (data) => {
    console.log(data);
  });
  socket.disconnect();
};

export default useSocket;