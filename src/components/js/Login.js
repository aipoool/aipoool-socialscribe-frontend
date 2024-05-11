import React from "react";
import Layout from "./Layout";
import "../css/login.css";

const Login = () => {
  const loginwithgoogle = () => {
    window.open(
      "https://aipoool-socialscribe-backend.onrender.com/auth/google/callback",
      "_self"
    );
  };

  return (
    <>
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
                      Welcome to SocialScribe!
                    </h2>
                    {/* <div class="elementor-element elementor-element-9a3d259 elementor-widget__width-auto elementor-mobile-align-center elementor-widget-mobile__width-inherit elementor-align-left elementor-widget elementor-widget-button" data-id="9a3d259" data-element_type="widget" data-widget_type="button.default"> */}

                    {/* <div class="elementor-widget-container">
                                    <div class="elementor-button-wrapper">
                                        <button class="elementor-button elementor-button-link elementor-size-sm" onClick={loginwithgoogle} target="_blank">
                                            <span class="elementor-button-content-wrapper">
                                                <span class="elementor-button-icon elementor-align-icon-left">
                                                    <svg aria-hidden="true" class="e-font-icon-svg e-fab-chrome" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"></path>
                                                    </svg> 
                                                </span>
                                                <span class="elementor-button-text">Sign in With Google</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div class="spacing"></div>
                                <a className="return-homepage" href="https://socialscribe.aipoool.com/">Return to Homepage</a> */}

                  </div>
                </div>
              </div>
            </div>
            <div class="card login-card">
                      <div class="row no-gutters">
                        <div class="col-md-5">
                          <img
                            src="/src/image/signin-img.png"
                            alt="login"
                            class="login-card-img"
                          />
                        </div>
                        <div class="col-md-7">
                          <div class="card-body">
                            <div class="brand-wrapper">
                              <img
                                src="./icons//128.png"
                                alt="logo"
                                class="logo"
                              />
                            </div>
                            <p class="login-card-description">
                              Please Log In to the Extension
                            </p>
                            <button
                              id="loginBtn"
                              class="btn btn-block login-btn mb-4"
                            >
                              Login
                            </button>
                            <a
                              href="https://aipoool.com/about-us/"
                              class="forgot-password-link"
                            >
                              Curious about AIPOOOL ?
                            </a>
                            <p class="login-card-footer-text">
                              Have feedbacks or queries?{" "}
                              <a href="#!" class="text-reset">
                                Click here
                              </a>
                            </p>
                            <nav class="login-card-footer-nav">
                              <a href="#!">Terms of use.</a>
                              <a href="#!">Privacy policy</a>
                            </nav>
                          </div>
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
    </>
  );
};

export default Login;
