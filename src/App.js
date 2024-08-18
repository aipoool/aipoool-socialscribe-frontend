import React from "react";
import "./App.css";
import Headers from "./components/js/Header";
import PayLanding from "./components/js/PaymentLanding";
import Success from "./components/js/Success"
import Cancel from "./components/js/Cancel";
import Login from "./components/js/Login";
import PaymentRedirect from "./components/js/EnterPaymentRedirect"; 
import EnterOpenAIKey from "./components/js/EnterOpenAIKey";
import RegisteredUser from "./components/js/RegisteredUser";
import LoginFailed from "./components/js/LoginFailed";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/redirecting" element={<EnterOpenAIKey />} />
        <Route path="/payment-plan-options" element={<PaymentRedirect />} />
        <Route path="/registered" element={<RegisteredUser />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/choose-your-plan" element={<PayLanding />} />
        <Route path="/login-failed" element={<LoginFailed />} />
      </Routes>
    </>
  );
}

export default App;
