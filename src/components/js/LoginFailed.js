// auth/LoginFailed.js

import React from "react";
import { useNavigate } from "react-router-dom";

function LoginFailed() {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/auth/google");
  };

  return (
    <div>
      <h1>Login Failed</h1>
      <p>We were unable to log you in after multiple attempts. Please try again or contact support.</p>
      <button onClick={handleRetry}>Retry Login</button>
    </div>
  );
}

export default LoginFailed;
