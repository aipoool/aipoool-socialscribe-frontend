/* global chrome */
import React, { useState, useEffect } from "react";
import axios from "axios";
import OpenAIKeyForm from "../js/OpenAIKeyForm.js";
import "../css/enteropenaikey.css"
import { Navigate , useNavigate} from "react-router-dom"; // Import Redirect from react-router-dom
import RegisteredUser from "./RegisteredUser.js";

const EnterOpenAIKey = () => {
  const [userdata, setUserdata] = useState({});
  const [isLoading, setIsLoading] = useState(true); 
  const [retryCount, setRetryCount] = useState(0);
  const navigate = useNavigate();

  const MAX_RETRIES = 3;
  const extensionId = "bhnpbgfnodkiohanbolcdkibeibncobf";

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
    });

    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");

    if(status !== 'no-user-data'){
      chrome.runtime.sendMessage(
        extensionId,
        {
          type: "socialscribe-login-data",
          info: userdata,
        },
        function (response) {
          if (!response.success) {
            console.log("error sending message", response);
            return response;
          }
        }
      );
    }else {
      if (retryCount < MAX_RETRIES) {
        setRetryCount((prevCount) => prevCount + 1);
        setTimeout(() => {
          window.open(
            "https://socialscribe-v1-backend.onrender.com/auth/google/callback",
            "_self"
          );
        }, 1000); // 1 second delay before retrying
      } else if (retryCount >= MAX_RETRIES) {
        navigate("/login-failed"); // Redirect to a failure page if retries are exhausted
      } 
    }

    // if (status === "no-user-data" && retryCount < MAX_RETRIES) {
    //   setRetryCount((prevCount) => prevCount + 1);
    //   setTimeout(() => {
    //     window.open(
    //       "https://socialscribe-v1-backend.onrender.com/auth/google/callback",
    //       "_self"
    //     );
    //   }, 1000); // 1 second delay before retrying
    // } else if (retryCount >= MAX_RETRIES) {
    //   navigate("/login-failed"); // Redirect to a failure page if retries are exhausted
    // } else {
    //   chrome.runtime.sendMessage(
    //     extensionId,
    //     {
    //       type: "socialscribe-login-data",
    //       info: userdata,
    //     },
    //     function (response) {
    //       if (!response.success) {
    //         console.log("error sending message", response);
    //         return response;
    //       }
    //     }
    //   );
    // }
  }, [retryCount, navigate]);


  // Check if userdata has OpenAIKey field and it is not null
  if(isLoading) {
    <div class="loader"></div>

  }else if (userdata.isANewUser === true) {
    // If OpenAIKey exists and is not null, redirect to Welcomeagain page
    //return <Navigate to="/welcomeagain" />
    console.log("User data here from frontend code :: " , userdata);
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
