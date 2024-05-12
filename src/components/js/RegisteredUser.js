/* global chrome */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../css/registeredUser.css";
import axios from "axios";
import linkedInGIF from "../gif/LinkedIn GIF.gif";
import XGIF from "../gif/X GIF.gif";
import aboutusImg from "../image/about-us-img.png";
import openSetting from "../image/open-settings-img.png";

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
    : "It's great to have you back ! 🥳";

  const para = isNewUser
    ? "Thank you for submitting your OpenAI key."
    : `Welcome back, ${userData.userName}! \n You can start using the extension by going to X.com or other supported websites.`;
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
    <>
      <Helmet>
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>
      </Helmet>

      <div
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
          <div className="redirect-buttons">
            {isNewUser ? (
              <>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={linkedInGIF}
                        class="card-img-top"
                        alt="..."
                        style={{ width: "100%", height: "auto" }}
                      />
                      <div class="card-body">
                        <button
                          style={{ width: "auto", height: "auto" }}
                          onClick={redirectToLinkedIn}
                        >
                          Go to LinkedIn
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={XGIF}
                        class="card-img-top"
                        alt="..."
                        style={{ width: "100%", height: "auto" }}
                      />
                      <div class="card-body">
                        <button
                          style={{ width: "auto", height: "auto" }}
                          onClick={redirectToX}
                        >
                          Go to X
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div class="container">
                      <div class="card-deck row">
                        <div class="col-sm-6 col-md-6">
                          <div class="card">
                            <div class="view overlay">
                              <img
                                class="card-img-top"
                                src={linkedInGIF}
                                alt="Card image cap"
                              />
                              <a href="#!">
                                <div class="mask rgba-white-slight"></div>
                              </a>
                            </div>

                            <div class="card-body">
                            <button onClick={redirectToLinkedIn}>
                            Go to LinkedIn
                          </button>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-6 col-md-6">
                          <div class="card mb-4">
                            <div class="view overlay">
                              <img
                                class="card-img-top"
                                src={XGIF}
                                alt="Card image cap"
                              />
                              <a href="#!">
                                <div class="mask rgba-white-slight"></div>
                              </a>
                            </div>

                            <div class="card-body">
                            <button onClick={redirectToX}>Go to X</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}

                {/* <button onClick={redirectToLinkedIn}>
                            Go to LinkedIn
                          </button>

                          <button onClick={redirectToX}>Go to X</button> */}
              </>
            ) : (
              <>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                  <div class="col">
                    <div class="card mb-3">
                      <img
                        src={aboutusImg}
                        class="card-img-top"
                        alt="..."
                        style={{ width: "100%", height: "auto" }}
                      />
                      <div class="card-body">
                        <button
                          style={{ width: "auto", height: "auto" }}
                          onClick={aboutSocialScribe}
                        >
                          About Us
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card mb-3">
                      <img
                        src={openSetting}
                        class="card-img-top"
                        alt="..."
                        style={{ width: "100%", height: "auto" }}
                      />
                      <div class="card-body">
                        <button
                          style={{ width: "auto", height: "auto" }}
                          onClick={openSettings}
                        >
                          Open Settings
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div
            class="elementor-element elementor-element-3b42446 e-con-full e-flex e-con e-child"
            data-id="3b42446"
            data-element_type="container"
          ></div>
        </div>
      </div>
    </>
  );
};

export default RegisteredUser;
