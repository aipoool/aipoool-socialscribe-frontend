/* global chrome */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../css/registeredUser.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import linkedInGIF from "../gif/LinkedIn(Edited-2).gif";
import XGIF from "../gif/X(Edited).gif";
import aboutusImg from "../image/about-us-img.png";
import openSetting from "../image/open-settings-img.png";
import linkedInImg from "../image/linkedIn-registered-2.png";
import XImg from "../image/X-registered.png";

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
          src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
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
                    <h1 class="elementor-heading-title elementor-size-default">
                      {heading}
                    </h1>
                    <div width="10px"></div>
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
                        src={linkedInImg}
                        class="card-img-top"
                        alt="..."
                        style={{ width: "100%", height: "auto" }}
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">
                          Revolutionize Your Online Presence: AI-Enhanced
                          Interactions on LinkedIn
                        </h5>
                        <p class="card-text">
                          Enhance your professional network with ease. Our
                          chrome extension offers AI-generated responses that
                          are tailored to your LinkedIn activity. Stand out in
                          the crowd with insightful comments and
                          thought-provoking posts.
                        </p>
                        <button
                          style={{ width: "auto", height: "auto" }}
                          onClick={redirectToLinkedIn}
                        >
                          Go to LinkedIn
                        </button>
                      </div>
                      {/* <div class="card-body">
                        <button
                          style={{ width: "auto", height: "auto" }}
                          onClick={redirectToLinkedIn}
                        >
                          Go to LinkedIn
                        </button>
                      </div> */}
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={XImg}
                        class="card-img-top"
                        alt="..."
                        style={{ width: "100%", height: "auto" }}
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">
                          Tweet Smarter, Not Harder: AI-Driven Creativity for
                          Twitter
                        </h5>
                        <p class="card-text">
                          Stay ahead of the curve with AI-assisted tweet
                          crafting. Our chrome extension gives you the edge with
                          responses that capture attention and spark
                          conversations. Be the voice that stands out in the
                          fast-paced world of Twitter.
                        </p>
                        <button
                          style={{ width: "auto", height: "auto" }}
                          onClick={redirectToX}
                        >
                          Go to X
                        </button>
                      </div>
                      {/* <div class="card-body">
                        <button
                          style={{ width: "auto", height: "auto" }}
                          onClick={redirectToX}
                        >
                          Go to X
                        </button>
                      </div> */}
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

                      <div class="card-img-overlay">
                        <h5 class="card-title">
                          Why We Exist: Bridging the Gap with Technology
                        </h5>
                        <p class="card-text">
                          In a fast-paced digital landscape, meaningful
                          connections matter more than ever. Our chrome
                          extension was born out of the desire to bridge gaps,
                          spark conversations, and foster authentic
                          relationships. Discover how we blend AI with human
                          touch.
                        </p>

                        <button
                          style={{ width: "auto", height: "auto" }}
                          onClick={aboutSocialScribe}
                        >
                          About Us
                        </button>
                      </div>

                      {/* <div class="card-body">
                        <button
                          style={{ width: "auto", height: "auto" }}
                          onClick={aboutSocialScribe}
                        >
                          About Us
                        </button>
                      </div> */}
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
                      <div class="card-img-overlay">
                        <h5 class="card-title">Customize Your Experience</h5>
                        <p class="card-text">
                          Enter Settings page to see your progress with us !
                        </p>
                        <button
                          style={{ width: "auto", height: "auto" }}
                          onClick={openSettings}
                        >
                          Open Settings
                        </button>
                      </div>
                      {/* <div class="card-body">
                        <button
                          style={{ width: "auto", height: "auto" }}
                          onClick={openSettings}
                        >
                          Open Settings
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* <div class="card-deck">
                    <div class="card bg-dark text-white">
                      <img
                        class="card-img"
                        src="https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1"
                        alt="Card image"
                        style={{ width: "100%", height: "auto" }}
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <button type="button" class="btn btn-primary">
                          Primary
                        </button>
                      </div>
                    </div>
                    <div class="card bg-dark text-white">
                      <img
                        class="card-img"
                        src="https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1"
                        alt="Card image"
                        style={{ width: "100%", height: "auto" }}
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <button type="button" class="btn btn-primary">
                          Primary
                        </button>
                      </div>
                    </div>
                  </div> */}
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
      <div
        class="site-below-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-3-cheavy ast-builder-grid-row-tablet-3-equal ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack snipcss0-0-0-1 snipcss-8hDoQ"
        data-section="section-below-footer-builder"
      >
        <div class="ast-builder-grid-row-container-inner snipcss0-1-1-2">
          <div class="ast-builder-footer-grid-columns site-below-footer-inner-wrap ast-builder-grid-row snipcss0-2-2-3">
            <div class="site-footer-below-section-1 site-footer-section site-footer-section-1 snipcss0-3-3-4">
              <div
                class="footer-widget-area widget-area site-footer-focus-item ast-footer-html-1 snipcss0-4-4-5"
                data-section="section-fb-html-1"
              >
                <div class="ast-header-html inner-link-style- snipcss0-5-5-6">
                  <div class="ast-builder-html-element snipcss0-6-6-7">
                    <p class="snipcss0-7-7-8">
                      <img
                        class="size-full wp-image-1628 snipcss0-8-8-9"
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
            <div class="site-footer-below-section-2 site-footer-section site-footer-section-2 snipcss0-3-3-10">
              <div
                class="ast-builder-layout-element ast-flex site-footer-focus-item ast-footer-copyright snipcss0-4-10-11"
                data-section="section-footer-builder"
              >
                <div class="ast-footer-copyright snipcss0-5-11-12">
                  <p class="snipcss0-6-12-13">
                    © 2024 SocialScribe. Powered by [aipoool].
                  </p>
                </div>
              </div>
            </div>
            <div class="site-footer-below-section-3 site-footer-section site-footer-section-3 snipcss0-3-3-14">
              <div
                class="footer-widget-area widget-area site-footer-focus-item snipcss0-4-14-15"
                data-section="section-footer-menu"
              >
                <div class="footer-bar-navigation snipcss0-5-15-16">
                  <nav
                    class="site-navigation ast-flex-grow-1 navigation-accessibility footer-navigation snipcss0-6-16-17"
                    id="footer-site-navigation"
                    aria-label="Site Navigation: Footer - terms"
                    itemtype="https://schema.org/SiteNavigationElement"
                    itemscope="itemscope"
                  >
                    <div class="footer-nav-wrap snipcss0-7-17-18">
                      <ul
                        id="astra-footer-menu"
                        class="ast-nav-menu ast-flex astra-footer-horizontal-menu astra-footer-tablet-vertical-menu astra-footer-mobile-vertical-menu snipcss0-8-18-19"
                      >
                        <li
                          id="menu-item-808"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-808 snipcss0-9-19-20"
                        >
                          <a
                            href="https://aipoool.com/terms-conditions/"
                            class="menu-link snipcss0-10-20-21"
                          >
                            Terms and Conditions
                          </a>
                        </li>
                        <li
                          id="menu-item-809"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-809 snipcss0-9-19-22"
                        >
                          <a
                            href="https://aipoool.com/privacy-policy/"
                            class="menu-link snipcss0-10-22-23"
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

export default RegisteredUser;
