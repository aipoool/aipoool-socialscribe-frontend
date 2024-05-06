import React, { useState, useEffect } from "react";
import axios from "axios";
import OpenAIKeyForm from "../js/OpenAIKeyForm.js";
import { Navigate } from "react-router-dom"; // Import Redirect from react-router-dom
import RegisteredUser from "./RegisteredUser.js";

const EnterOpenAIKey = () => {
  const [userdata, setUserdata] = useState({});
  //const userEmail = userdata.email;
  const id = userdata._id;

  console.log("Enter OpenAI Key Page with id : ", id);

  const fetchSessionData = async () => {
    try {
      const response = await axios.get(
        "https://aipoool-socialscribe-backend.vercel.app/auth/login/success",
        { withCredentials: true }
      );
      setUserdata(response.data.user);
      console.log("Response from EnterOpenAIKey.js : ", response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchSessionData();
  }, []);

  // Check if userdata has OpenAIKey field and it is not null
  if (userdata && userdata.openAIKey) {
    // If OpenAIKey exists and is not null, redirect to Welcomeagain page
    //return <Navigate to="/welcomeagain" />
    return (
      <div>
        <RegisteredUser isNewUser={false} />
      </div>
    );
  } else {
    return (
      <div>
        <OpenAIKeyForm userId={id} />
      </div>
    );
  }
};

export default EnterOpenAIKey;
