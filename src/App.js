import React from "react";
import "./App.css";
import Headers from "./components/js/Header";
import PayLanding from "./components/js/PaymentLanding";
import Success from "./components/js/Success"
import Cancel from "./components/js/Cancel";
import Login from "./components/js/Login";
import EnterOpenAIKey from "./components/js/EnterOpenAIKey";
import RegisteredUser from "./components/js/RegisteredUser";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/enter-your-key" element={<EnterOpenAIKey />} />
        <Route path="/registered" element={<RegisteredUser />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/choose-your-plan" element={<PayLanding />} />
      </Routes>
    </>
  );
}

export default App;
