/* global chrome */
import React, { useEffect } from 'react';
import '../css/registeredUser.css';
//var Token = localStorage.getItem('accessToken');
//var Email = localStorage.getItem('email');
//var Username = localStorage.getItem('username'); 
var userData = JSON.parse(localStorage.getItem('userData'));
var extensionId = 'dnjmipaneoddchfeamgdabpiomihncii'; 

const RegisteredUser = () => {
  console.log(userData); 
  
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

  const redirectToLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com';
  };

  const redirectToX = () => {
    window.location.href = 'https://twitter.com/';
  };


  // useEffect(() => {
  //   // Set a timeout to redirect the user to LinkedIn after 5 seconds
  //   const timer = setTimeout(() => {
  //     window.location.href = 'https://www.linkedin.com';
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="registered-user-page">
      <h1>Registration Successful!</h1>
      <p>Thank you for submitting your OpenAI key.</p>
      <div className="redirect-buttons">
        <button onClick={redirectToLinkedIn}>Go to LinkedIn</button>
        <button onClick={redirectToX}>Go to X</button>
      </div>
    </div>
  );
};

export default RegisteredUser;
