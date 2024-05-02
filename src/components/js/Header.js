import React, {useEffect, useState} from 'react'
import "../css/header.css";
import axios from "axios";


const Header = () => {
  // const [userdata, setUserdata] = useState({}); 
  // console.log("Header response" , userdata);
  // console.log("User Email" , userdata.email);

  // const getUser = async() => {
  //   try{
  //     const response = await axios.get("http://localhost:1997/auth/login/success" , 
  //   {withCredentials:true});
  //   setUserdata(response.data.user);
  //   console.log("login success with data: " , response.data);
  //   localStorage.setItem('userData', JSON.stringify(response.data.user));
  //   //localStorage.setItem('jwt_token', JSON.stringify(response.data.auth));
  //   console.log("Response from Header.js : ", response.data.user);

 
  //   }catch(error){
  //     console.log("error", error); 
  //   }
  // }

  // useEffect(()=>{
  //     getUser();

  // }, []);




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