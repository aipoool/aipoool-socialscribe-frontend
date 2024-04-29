import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OpenAIKeyForm from '../js/OpenAIKeyForm.js';

const EnterOpenAIKey = () => {
  const [userdata, setUserdata] = useState({});
  //const userEmail = userdata.email;
  const id = userdata._id;

  console.log("Enter OpenAI Key Page with id : " , id);
  
  const fetchSessionData = async() => {
    try{
      const response = await axios.get("http://localhost:1997/api/login/success", {withCredentials:true});
      setUserdata(response.data.User);
      
    }catch(error){ 
      console.log("error", error); 
    }
  }

  useEffect(() => {
    fetchSessionData()
  }, [])

  return (
    <div>
      <OpenAIKeyForm userId={id} />
    </div>
  );
};

export default EnterOpenAIKey;
