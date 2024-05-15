import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/openaikeyform.css";
import openAIKeyEnter from "../image/openAIKeyGen-page.png";
import logoImage from "../logo/Icon social scribe (128 x 128 px).png";

const OpenAIKeyForm = ({ userId }) => {
  const [openAIKey, setOpenAIKey] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const keyFormat = /^sk-proj-[a-zA-Z0-9]{20}T3BlbkFJ[a-zA-Z0-9]{20}$/;
    if (!keyFormat.test(openAIKey)) {
      alert("Invalid OpenAI Key format. Please enter again.");
      return;
    }

    setIsSubmitting(true);
    try {
      console.log("User Id: ", userId);
      const response = await axios.post(
        "https://aipoool-socialscribe-backend.onrender.com/auth/enter-your-key/success",
        {
          id: userId,
          openAIKey: openAIKey,
        },
        { withCredentials: true }
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
    // <div className="openai-key-form">
    //   <h2>Enter Your OpenAI Key</h2>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="openai-key-input">OpenAI Key:</label>
    //     <input
    //       id="openai-key-input"
    //       type="text"
    //       value={openAIKey}
    //       onChange={(e) => {

    //         setOpenAIKey(e.target.value);
    //       }}
    //       placeholder="Enter your OpenAI Key here"
    //       required
    //     />
    //     <button className="buttonSubmit" type="submit" disabled={isSubmitting}>
    //       {isSubmitting ? "Submitting..." : "Submit"}
    //     </button>
    //   </form>
    //   {message && <p>{message}</p>}
    // </div>
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
                    <h3 class="elementor-heading-title elementor-size-default">
                      Kindly input your API key below
                    </h3>
                    <div
                      class="elementor-element elementor-element-9a3d259 elementor-widget__width-auto elementor-mobile-align-center elementor-widget-mobile__width-inherit elementor-align-left elementor-widget elementor-widget-button"
                      data-id="9a3d259"
                      data-element_type="widget"
                      data-widget_type="button.default"
                    >
                      <div class="container snipcss-EmI9c">
                        <div class="card login-card">
                          <div class="row no-gutters">
                            <div class="col-md-5">
                              <img
                                src={openAIKeyEnter}
                                alt="login"
                                class="login-card-img"
                              />
                            </div>
                            <div class="col-md-7">
                              <div class="card-body">
                                <div class="brand-wrapper">
                                  <img
                                    src={logoImage}
                                    alt="logo"
                                    class="logo"
                                  />
                                </div>
                                <p class="login-card-description">
                                  Please enter your OpenAI Key{" "}
                                </p>
                                <form action="#!">
                                  <div class="form-group">
                                    <label for="email" class="sr-only">
                                      Email
                                    </label>
                                    <input
                                      type="email"
                                      name="email"
                                      id="email"
                                      class="form-control"
                                      placeholder="e.g. sk-proj-12345..."
                                    />
                                  </div>

                                  <input
                                    name="login"
                                    id="login"
                                    class="btn btn-block login-btn mb-4"
                                    type="button"
                                    value="Submit"
                                  />
                                </form>
                                <a href="#!" class="forgot-password-link">
                                  Return to Homepage
                                </a>
                                <p class="login-card-footer-text">
                                  How to generate OpenAI Key?{" "}
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

                      <div class="spacing"></div>
                      <a
                        className="return-homepage"
                        href="https://socialscribe.aipoool.com/"
                      >
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
      </div>
      <div
        class="site-below-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-3-cheavy ast-builder-grid-row-tablet-3-equal ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack snipcss-28lnc"
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
                  <p>© 2024 SocialScribe. Powered by [aipoool].</p>
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

export default OpenAIKeyForm;
