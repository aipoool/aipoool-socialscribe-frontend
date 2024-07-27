import React from "react";
import "../css/login.css";
import logo from "../logo/Icon social scribe (128 x 128 px).png";
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
const Login = () => {
  const loginwithgoogle = () => {
    window.open(
      "https://socialscribe-v1-backend.onrender.com/auth/google/callback",
      "_self"
    );
  };

  const cloud = new Cloudinary({
    cloud: {
      cloudName: 'dcuecnxx4'
    }
  });

  const signInImgCloudinary = cloud.image('aipoool-socialscribe-frontend/sign-in');

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
                    <h1 class="elementor-heading-title elementor-size-default">
                      Welcome to SocialScribe!
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="spacing"></div>
            
            <div class="card login-card">
              <div class="row no-gutters">
                <div class="col-md-5">
                  <AdvancedImage cldImg={signInImgCloudinary} alt="login" class="login-card-img"/>
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
                    <nav class="login-card-footer-nav">
                        <a href="https://aipoool.com/terms-conditions/">Terms of use.</a>
                        <a href="https://aipoool.com/privacy-policy/">Privacy policy</a>
                      </nav>
                  </div>
                </div>
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
