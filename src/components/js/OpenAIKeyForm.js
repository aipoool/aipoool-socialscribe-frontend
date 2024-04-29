import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/openaikeyform.css";

const OpenAIKeyForm = ({ userId }) => {
  const [openAIKey, setOpenAIKey] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const history = useNavigate();

  console.log("User Email Page: ", userId);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const keyFormat = /^sk-proj-[a-zA-Z0-9]{20}T3BlbkFJ[a-zA-Z0-9]{20}$/;
    if (!keyFormat.test(openAIKey)) {
      alert("Invalid OpenAI Key format. Please enter again.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "http://localhost:1997/api/enter-your-key/success",
        {
          id: userId,
          openAIKey: openAIKey,
        },
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("jwt_token")),
          },
        }
      );
      console.log(response.data.id, response.data.openAIKey);
      setMessage("Key updated successfully!");
      history("/registered");
    } catch (error) {
      setMessage("Failed to update key. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="openai-key-form">
      <h2>Enter Your OpenAI Key</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="openai-key-input">OpenAI Key:</label>
        <input
          id="openai-key-input"
          type="text"
          value={openAIKey}
          onChange={(e) => {

            setOpenAIKey(e.target.value);
          }}
          placeholder="Enter your OpenAI Key here"
          required
        />
        <button className="buttonSubmit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default OpenAIKeyForm;
