import React, { useState } from 'react'
import './Join.css';
import logo from "../../images/logo.png"
import {Link} from "react-router-dom";

let user ;
const sendUser = () => {
  user = document.getElementById('joinInput').value;
  document.getElementById('joinInput').value = "";
}

const Join = () => {

  
  const [name , setName] = useState("");
  return (
    <div className='JoinPage'>
      <div className='JoinContainer'>
        <img src={logo} alt='logo' />
        <h1>CHAT-X</h1>
        <input placeholder="Enter name" type="text"  id="joinInput" onChange={(e) => setName(e.target.value)} />
        
          <Link to="/chat" onClick={(e) => !name ? e.preventDefault : null}>
            <button className='joinbtn' onClick={sendUser}>Login </button>
          </Link>
        


      </div>
    </div>
  )
}

export default Join
export {user}