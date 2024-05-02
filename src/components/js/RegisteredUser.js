/* global chrome */
import React, {useEffect, useState} from 'react'
import '../css/registeredUser.css';
import axios from 'axios';

//var userData = JSON.parse(localStorage.getItem('userData')); // optional chaining ??
//var userEmail = userData.email;

var extensionId = 'dnjmipaneoddchfeamgdabpiomihncii'; 

const RegisteredUser = ({isNewUser = true}) => {
  const [userData, setUserdata] = useState({}); 
  console.log("Header response" , userData);
  console.log("User Email" , userData.email);


  // Getting the user details here so that we won't have to call it again and again
  const getUser = async() => {
    try{
      const response = await axios.get("http://localhost:1997/auth/login/success" , 
    {withCredentials:true});
    setUserdata(response.data.user);
    console.log("login success with data: " , response.data);
    //localStorage.setItem('userData', JSON.stringify(response.data.user));
    //localStorage.setItem('jwt_token', JSON.stringify(response.data.auth));
    console.log("Response from Header.js : ", response.data.user);

 
    }catch(error){
      console.log("error", error); 
    }
  }

  useEffect(()=>{
      getUser();

  }, []);


  chrome.runtime.sendMessage(extensionId, 
    {
      userData 
    } 
    , function (response) {
    if (!response.success) {
      console.log('error sending message', response);
      return response;
    }
  }); 

  const heading = isNewUser 
  ? "Registration Successful!"
  : "It's great to have you back ! 🥳.";

  const para = isNewUser ? "Thank you for submitting your OpenAI key." : `You're logged in as ${userData.email}. \n You can start using the extension by going to X.com or other supported websites.`;
  const redirectToLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com';
  };

  const redirectToX = () => {
    window.location.href = 'https://twitter.com/';
  };

  const logout = () => {
    // Add your logout logic here
      // Clearing the userdata in the storages 
      chrome.storage.sync.clear();
      window.location.reload();
  };

  const openSettings = () => {
    // Add your open settings logic here
    window.location.href = "chrome-extension://dnjmipaneoddchfeamgdabpiomihncii/assets/settings.html"; 
  };


  return (
    <div className="registered-user-page">
      <h2>{heading}</h2>
      <p>{para}</p>
      <div className="redirect-buttons">
        {isNewUser ? (
          <>
            <button onClick={redirectToLinkedIn}>Go to LinkedIn</button>
            <button onClick={redirectToX}>Go to X</button>
          </>
        ) : (
          <>
            <button onClick={logout}>Logout</button>
            <button onClick={openSettings}>Open Settings</button>
          </>
        )}
      </div>
    </div>
  );
};

export default RegisteredUser;