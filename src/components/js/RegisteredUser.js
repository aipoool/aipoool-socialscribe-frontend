/* global chrome */
import React, { useEffect, useState } from "react";
import "../css/registeredUser.css";
import axios from "axios";

var extensionId = "dnjmipaneoddchfeamgdabpiomihncii";

const RegisteredUser = ({ isNewUser = true }) => {
  const [userData, setUserdata] = useState({});
  console.log("Header response", userData);
  console.log("User Email", userData.email);

  // Getting the user details here so that we won't have to call it again and again
  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://aipoool-socialscribe-backend.onrender.com/auth/login/success",
        { withCredentials: true }
      );
      setUserdata(response.data.user);
      console.log("login success with data: ", response.data);
      console.log("Response from Header.js : ", response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  chrome.runtime.sendMessage(
    extensionId,
    {
      userData,
    },
    function (response) {
      if (!response.success) {
        console.log("error sending message", response);
        return response;
      }
    }
  );

  const heading = isNewUser
    ? "Registration Successful!"
    : "It's great to have you back ! 🥳.";

  const para = isNewUser
    ? "Thank you for submitting your OpenAI key."
    : `You're logged in as ${userData.email}. \n You can start using the extension by going to X.com or other supported websites.`;
  const redirectToLinkedIn = () => {
    window.location.href = "https://www.linkedin.com";
  };

  const redirectToX = () => {
    window.location.href = "https://twitter.com/";
  };

  const aboutSocialScribe = () => {
    window.location.href = "https://socialscribe.aipoool.com/";
  };

  const openSettings = () => {
    // Add your open settings logic here
    window.location.href =
      "chrome-extension://dnjmipaneoddchfeamgdabpiomihncii/assets/settings.html";
  };

  return (
    <><div
      class="elementor-element elementor-element-9e0036e e-flex e-con-boxed e-con e-parent e-lazyloaded snipcss-97bdC"
      data-id="9e0036e"
      data-element_type="container"
      data-settings='{"background_background":"classic"}'
    >
      <div class="e-con-inner">
        <div
          class="elementor-element elementor-element-ed79abc e-con-full e-flex e-con e-child"
          data-id="ed79abc"
          data-element_type="container"
        >
          <div
            class="elementor-element elementor-element-597b965 e-con-full e-flex e-con e-child"
            data-id="597b965"
            data-element_type="container"
          >
            <div
              class="elementor-element elementor-element-11d9bb4 e-con-full e-flex e-con e-child"
              data-id="11d9bb4"
              data-element_type="container"
            >
              <div
                class="elementor-element elementor-element-1f4402a elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget elementor-widget-heading"
                data-id="1f4402a"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div class="elementor-widget-container">
                  <h2 class="elementor-heading-title elementor-size-default">
                    {heading}
                  </h2>
                  <p class="elementor-size-default">{para}</p>
                  <div
                    class="elementor-element elementor-element-9a3d259 elementor-widget__width-auto elementor-mobile-align-center elementor-widget-mobile__width-inherit elementor-align-left elementor-widget elementor-widget-button"
                    data-id="9a3d259"
                    data-element_type="widget"
                    data-widget_type="button.default"
                  >
                    <div class="elementor-widget-container">
                      <div class="elementor-button-wrapper container">
                        {/* <button class="elementor-button elementor-button-link elementor-size-sm"  target="_blank">
                    <span class="elementor-button-content-wrapper">
                        <span class="elementor-button-icon elementor-align-icon-left">
                            <svg aria-hidden="true" class="e-font-icon-svg e-fab-chrome" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"></path>
                            </svg>
                        </span>
                        <span class="elementor-button-text">Sign in With Google</span>
                    </span>
                </button> */}
                        <div className="redirect-buttons">
                          {isNewUser ? (
                            <>
                              {/* <div class="container">
              <div class="row">
                <div class="col">
                  <img src="/src/gif/LinkedIn GIF.gif" alt="alt"></img>
                  <button onClick={redirectToLinkedIn}>
                    Go to LinkedIn
                  </button>
                </div>
                <div class="col-2"></div>
                <div class="col">
                <img src="/src/gif/X GIF.gif" alt="alt"></img>
                  <button onClick={redirectToX}>
                    Go to X
                  </button>
                </div>
              </div>
            </div> */}

                              <div class="card-deck">
                                <div class="card">
                                  <img class="card-img-top" src="https://user-images.githubusercontent.com/14011726/94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif" alt="Add the LinkedIn GIF Here" />
                                  <div class="card-body">
                                    <button onClick={redirectToLinkedIn}>
                                      Go to LinkedIn
                                    </button>
                                  </div>
                                </div>
                                <div class="card">
                                  <img class="card-img-top" src="https://user-images.githubusercontent.com/14011726/94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif" alt="Add X GIF here" />
                                  <div class="card-body">
                                    <button onClick={redirectToX}>
                                      Go to X
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <button onClick={aboutSocialScribe}>
                                About Us
                              </button>
                              <button onClick={openSettings}>
                                Open Settings
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="spacing"></div>

                    <a className="return-homepage" href="/">
                      Return to Homepage
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-element elementor-element-f791ffd elementor-widget elementor-widget-spacer"
              data-id="f791ffd"
              data-element_type="widget"
              data-widget_type="spacer.default"
            >
              <div class="elementor-widget-container">
                <div class="elementor-spacer">
                  <div class="elementor-spacer-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="elementor-element elementor-element-3b42446 e-con-full e-flex e-con e-child"
          data-id="3b42446"
          data-element_type="container"
        ></div>
      </div>
    </div><script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script></>
  );
};

export default RegisteredUser;
