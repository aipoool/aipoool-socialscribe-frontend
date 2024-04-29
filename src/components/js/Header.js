import React, {useEffect, useState} from 'react'
import "../css/header.css";
import {NavLink} from "react-router-dom"
import axios from "axios";


const Header = () => {
  const [userdata, setUserdata] = useState({}); 
  console.log("Header response" , userdata);
  console.log("User Email" , userdata.email);

  const getUser = async() => {
    try{
      const response = await axios.get("http://localhost:1997/api/login/success", {withCredentials:true});
      setUserdata(response.data.User);

      if(response.data.auth){
        localStorage.setItem('userData', JSON.stringify(response.data.User));
        localStorage.setItem('jwt_token', JSON.stringify(response.data.auth));
      }
 
    }catch(error){
      console.log("error", error); 
    }
  }

  useEffect(()=>{
    getUser()
  })




  return (
    <>
    <header>
      <nav>
        <div className="left">
          <h1>SocialScribe</h1>
        </div>
      </nav>
    </header>
    </>

  )
}

export default Header
