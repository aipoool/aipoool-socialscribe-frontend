/* global chrome */
import React, { useState, useEffect } from "react";
import axios from "axios";
import OpenAIKeyForm from "../js/OpenAIKeyForm.js";
import { Buffer } from "buffer";
import { jwtDecode } from "jwt-decode";
import "../css/enteropenaikey.css"
import { Navigate , useNavigate} from "react-router-dom"; // Import Redirect from react-router-dom
import RegisteredUser from "./RegisteredUser.js";

const EnterOpenAIKey = () => {
  const [userdata, setUserdata] = useState({});
  const [userjwtToken, setUserJwtToken] = useState({});
  const [isLoading, setIsLoading] = useState(true); 
  const [retryCount, setRetryCount] = useState(0);
  const navigate = useNavigate();

  const MAX_RETRIES = 3;
  const extensionId = "bhnpbgfnodkiohanbolcdkibeibncobf";

  function hexStringToArrayBuffer(hexString) {
    if (hexString.length % 2 !== 0) {
      throw new Error("Invalid hexString");
    }
    const buffer = new ArrayBuffer(hexString.length / 2);
    const view = new Uint8Array(buffer);
    for (let i = 0; i < hexString.length; i += 2) {
      view[i / 2] = parseInt(hexString.substr(i, 2), 16);
    }
    return buffer;
  }
  
  // Function to derive key material from password
  async function getKeyMaterial(password) {
    const enc = new TextEncoder();
    return window.crypto.subtle.importKey(
      "raw",
      enc.encode(password),
      "PBKDF2",
      false,
      ["deriveKey"]
    );
  }
  
  // Function to derive a key using PBKDF2
  async function deriveKey(keyMaterial, salt) {
    const enc = new TextEncoder();
    const saltBuffer = enc.encode(salt);
    return window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: saltBuffer,
        iterations: 100000,
        hash: "SHA-256",
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"]
    );
  }
  
  // Function to decrypt the token
  async function decryptToken(encryptedTokenWithIv) {
    const [ivHex, authTagHex, encryptedHex] = encryptedTokenWithIv.split(':');
  
    const iv = hexStringToArrayBuffer(ivHex);
    const authTag = hexStringToArrayBuffer(authTagHex);
    const encrypted = hexStringToArrayBuffer(encryptedHex);
  
    // Combine encrypted data and auth tag
    const ciphertext = new Uint8Array([...new Uint8Array(encrypted), ...new Uint8Array(authTag)]);
  
    // Derive the key using PBKDF2
    const password = "kaif123";
    const salt = "salt123";
  
    const keyMaterial = await getKeyMaterial(password);
    const key = await deriveKey(keyMaterial, salt);
  
    // Decrypt the ciphertext
    try {
      const decrypted = await window.crypto.subtle.decrypt(
        {
          name: "AES-GCM",
          iv: iv,
        },
        key,
        ciphertext
      );
  
      const decoder = new TextDecoder();
      const decryptedToken = decoder.decode(decrypted);
      return decryptedToken;
    } catch (e) {
      console.error("Decryption failed", e);
      throw new Error("Decryption failed");
    }
  }

  function decodeJwtToken(token) {
    try {
      const decoded = jwtDecode(token);
      return decoded;
    } catch (error) {
      console.error("Failed to decode JWT token:", error);
      return null;
    }
  }

  const fetchSessionData = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const encryptedTokenWithIv = urlParams.get('token');

    if (encryptedTokenWithIv) {
      decryptToken(encryptedTokenWithIv)
      .then(jwtToken => {
        // Decode the token to get the payload data
        setUserJwtToken(jwtToken);
        const tokenData = decodeJwtToken(jwtToken);
        setUserdata(tokenData);

        // You can now use tokenData directly in your frontend
        console.log("Userdata decrypted from JWT Token:", tokenData);
      })
      .catch(error => {
        console.error("Failed to decrypt token:", error);
      });
    }
  };
  
  useEffect(() => {
    fetchSessionData().then(() => {
      setIsLoading(false);
    });

    chrome.runtime.sendMessage(
      extensionId,
      {
        type: "socialscribe-login-data",
        info: userdata,
        jwtToken: userjwtToken,
      },
      function (response) {
        if (!response.success) {
          console.log("error sending message", response);
          return response;
        }
      }
    );

    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");

    if (status === "no-user-data" && retryCount < MAX_RETRIES) {
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
