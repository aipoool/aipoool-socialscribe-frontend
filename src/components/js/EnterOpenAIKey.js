import React, { useState, useEffect } from "react";
import axios from "axios";
import OpenAIKeyForm from "../js/OpenAIKeyForm.js";
import "../css/enteropenaikey.css"
import { Navigate } from "react-router-dom"; // Import Redirect from react-router-dom
import RegisteredUser from "./RegisteredUser.js";

const EnterOpenAIKey = () => {
  const [userdata, setUserdata] = useState({});
  const [isLoading, setIsLoading] = useState(true); 
  //const userEmail = userdata.email;
  const id = userdata._id;


  const fetchSessionData = async () => {
    try {
      const response = await axios.get(
        "https://socialscribe-v1-backend.onrender.com/auth/login/success",
        { withCredentials: true }
      );
      setUserdata(response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchSessionData().then(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  // Check if userdata has OpenAIKey field and it is not null
  if(isLoading) {
    <div class="loader"></div>

  }else if (userdata.accessToken && userdata.isANewUser === true) {
    // If OpenAIKey exists and is not null, redirect to Welcomeagain page
    //return <Navigate to="/welcomeagain" />
    return (
      <div>
        <RegisteredUser isNewUser={true} />
      </div>
    );
  } else {
    return (
      <div>
        <RegisteredUser isNewUser={false} />
      </div>
    );
  }
};

export default EnterOpenAIKey;
