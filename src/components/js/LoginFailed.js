// auth/LoginFailed.js

import React from "react";
import { useNavigate } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import "../css/loginfailed.css";

function LoginFailed() {
  const navigate = useNavigate();

  const handleRetry = () => {
    window.open(
      "https://socialscribe-aipoool.onrender.com/login",
      "_self"
    );
  };

  const handleReportIssue = () => {
    navigate("/feedback"); // Assuming there's a feedback page to report issues
  };

  const cloud = new Cloudinary({
    cloud: {
      cloudName: 'dcuecnxx4', // Replace with your Cloudinary cloud name
    },
  });

  const sadRobotImage = cloud.image("aipoool-socialscribe-frontend/login-failed"); // Replace with your image public ID

  return (
<div class="container">
    <div class="body d-md-flex align-items-center justify-content-between">
        <div class="box-1">
        <AdvancedImage cldImg={sadRobotImage} alt="login" class=""/>
        </div>
        <div class="box-2 d-flex flex-column h-100">
            <div>
                <p class="mb-1 h-1">We're sorry 😔!!</p>
                <p class="text-muted mb-2">We were unable to log you in after multiple attempts. Please try again or contact support.</p>
                <div class="d-flex flex-column mt-3">
                    <button 
                        onClick={handleRetry} class="btn btn-primary mb-3">Retry Login</button>
                    <a href="mailto:support@aipoool.com?subject=Reporting%20the%20issue%20of%20consistent%20login%20failures" class="btn btn-secondary">Report Issue</a>

                </div>
            </div>
        </div>
    </div>
</div>


  );
}

export default LoginFailed;
