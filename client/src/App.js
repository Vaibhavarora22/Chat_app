import './App.css';
//import socketIO from 'socket.io-client';
import { Routes, Route } from "react-router-dom"; 
import Join from './component/join/Join.js';
import Chat from './component/Chat/Chat';

// const ENDPOINT = 'http://localhost:8080/'
// const socket = socketIO(ENDPOINT , {transports:['websocket']} );


function App() {

  // socket.on("connect" , () => {

  // })

  return (
    <>
      <Routes>
        <Route path="/" element={< Join/>} />
        <Route path='/chat' element={< Chat/>}/>
      </Routes>
    </>
  );
}

export default App;
