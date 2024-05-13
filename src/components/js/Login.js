import React from "react";
import Layout from "./Layout";
import "../css/login.css";
import signinImage from "../image/signin-img.png";
import logo from "../logo/Icon social scribe (128 x 128 px).png";

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
            <div class="spacing"></div>
            
            <div class="card login-card">
              <div class="row no-gutters">
                <div class="col-md-5">
                  <img src={signinImage} alt="login" class="login-card-img" />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <div class="brand-wrapper">
                      <img src={logo} alt="logo" class="logo" />
                    </div>
                    <p class="login-card-description">
                      Use your Google Account to Sign In
                    </p>
                    <button
                      id="loginBtn"
                      class="btn btn-block login-btn mb-4"
                      onClick={loginwithgoogle}
                    >
                      <span class="elementor-button-content-wrapper">
                        <span class="elementor-button-text">
                          Sign in With Google
                        </span>
                      </span>
                    </button>
                    <a
                      href="https://socialscribe.aipoool.com/"
                      class="forgot-password-link"
                    >
                      Return to Homepage
                    </a>
                    
                    <p class="login-card-footer-text">
                      Have feedbacks or queries?{" "}
                      <a href="https://socialscribe.aipoool.com/feedback/" class="text-reset">
                        Click here
                      </a>
                    </p>
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
        class="site-below-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-3-cheavy ast-builder-grid-row-tablet-3-equal ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack snipcss-YE11r"
        data-section="section-below-footer-builder"
      >
        <div class="ast-builder-grid-row-container-inner">
          <div class="ast-builder-footer-grid-columns site-below-footer-inner-wrap ast-builder-grid-row">
            <div class="site-footer-below-section-1 site-footer-section site-footer-section-1">
              <div
                class="footer-widget-area widget-area site-footer-focus-item ast-footer-html-1"
                data-section="section-fb-html-1"
              >
                <div class="ast-header-html inner-link-style-">
                  <div class="ast-builder-html-element">
                    <p>
                      <img
                        class="size-full wp-image-1628"
                        src="https://socialscribe.aipoool.com/wp-content/uploads/2024/05/AIpool-1.png"
                        alt="footer logo"
                        width="250"
                        height="100"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="site-footer-below-section-2 site-footer-section site-footer-section-2">
              <div
                class="ast-builder-layout-element ast-flex site-footer-focus-item ast-footer-copyright"
                data-section="section-footer-builder"
              >
                <div class="ast-footer-copyright">
                  <p>© 2024 socialscribe. Powered by [aipoool].</p>
                </div>
              </div>
            </div>
            <div class="site-footer-below-section-3 site-footer-section site-footer-section-3">
              <div
                class="footer-widget-area widget-area site-footer-focus-item"
                data-section="section-footer-menu"
              >
                <div class="footer-bar-navigation">
                  <nav
                    class="site-navigation ast-flex-grow-1 navigation-accessibility footer-navigation"
                    id="footer-site-navigation"
                    aria-label="Site Navigation: Footer - terms"
                    itemtype="https://schema.org/SiteNavigationElement"
                    itemscope="itemscope"
                  >
                    <div class="footer-nav-wrap">
                      <ul
                        id="astra-footer-menu"
                        class="ast-nav-menu ast-flex astra-footer-horizontal-menu astra-footer-tablet-vertical-menu astra-footer-mobile-vertical-menu"
                      >
                        <li
                          id="menu-item-808"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-808"
                        >
                          <a
                            href="https://aipoool.com/terms-conditions/"
                            class="menu-link"
                          >
                            Terms and Conditions
                          </a>
                        </li>
                        <li
                          id="menu-item-809"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-809"
                        >
                          <a
                            href="https://aipoool.com/privacy-policy/"
                            class="menu-link"
                          >
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
