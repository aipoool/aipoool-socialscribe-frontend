/* global chrome */
import React, { useState, useEffect } from "react";
import "../css/landing.css";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const PaymentLanding = () => {
  const [userdata, setUserdata] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://aipoool-socialscribe-backend.onrender.com/get-user-data",
        { withCredentials: true }
      );
      if (response.status === 200 || response.status === 302) {
        console.log(response.data.user);
        console.log(
          `${response.data.user.email} :::::: ${response.data.user._id}`
        );
        setUserdata(response.data.user);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        window.location.href =
          "https://socialscribe-aipoool.onrender.com/login";
      } else {
        console.log("error", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function makePayment(planType) {
    const stripe = await loadStripe(
      "pk_test_51NkpdNSGYG2CnOjscEUK9B0JfqNSzZEqj1GXLZEHPJrzCGPfTDv2DnleEid0HVNvmlf0qUVjNFTRV3UzpAsucioU00Kthd5o4Z"
    );

    let sPriceId, sProductId;
    if (planType === "free") {
      console.log("Processing free plan");
      // Add your logic for processing free plan
    } else if (planType === "premium") {
      console.log("Processing premium plan");
      sPriceId = "price_1PKzSsSGYG2CnOjsDpM6cUau";
      sProductId = "prod_QBMBmxVrYZ26Hp";

      // planPay = "SocialScribe Premium Plan";
      // price = 1;
    } else if (planType === "pro") {
      console.log("Processing pro plan");
      sPriceId = "price_1PKzTSSGYG2CnOjs0iTitDDU";
      sProductId = "prod_QBMBqKnsx3xsxg";
    } else {
      console.log("Invalid plan");
    }

    // Call the userdata and send the email and id via the body
    const response = await axios.post(
      "http://localhost:1997/api/create-checkout-session",
      {
        data: {
          priceId: sPriceId,
          productId: sProductId,
          type: planType,
          userEmail: userdata.email,
          userMongoId: userdata._id,
        },
      },
      { withCredentials: true }
    );

    if (response.data && response.data.redirectUrl) {
      window.location.href = response.data.redirectUrl; // rediret the user to billing portal if already subscribed
    } else {
      const session = response.data;
      console.log(session);

      const result = stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.log(result.error);
      }
    }
  }

  return (
    <>
      <div
        class="elementor-element elementor-element-9e0036e e-flex e-con-boxed e-con e-parent e-lazyloaded snipcss-M42OB"
        data-id="9e0036e"
        data-element_type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div class="e-con-inner"></div>
        <header>
          <h1>Our Pricing</h1>
          <div class="toggle">
            <label>Annually </label>
            <div class="toggle-btn">
              <input type="checkbox" class="checkbox" id="checkbox" />
              <label class="sub" id="sub" for="checkbox">
                <div class="circle"></div>
              </label>
            </div>
            <label> Monthly</label>
          </div>
        </header>
        <div class="cards">
          <div class="card shadow">
            <ul>
              <li class="pack">Basic</li>
              <li id="basic" class="price bottom-bar">
                &dollar;199.99
              </li>
              <li class="bottom-bar">500 GB Storage</li>
              <li class="bottom-bar">2 Users Allowed</li>
              <li class="bottom-bar">Send up to 3 GB</li>
              <li>
                <button class="btn">Learn More</button>
              </li>
            </ul>
          </div>
          <div class="card active">
            <ul>
              <li class="pack">Professional</li>
              <li id="professional" class="price bottom-bar">
                &dollar;249.99
              </li>
              <li class="bottom-bar">1 TB Storage</li>
              <li class="bottom-bar">5 Users Allowed</li>
              <li class="bottom-bar">Send up to 10 GB</li>
              <li>
                <button class="btn active-btn">Learn More</button>
              </li>
            </ul>
          </div>
          <div class="card shadow">
            <ul>
              <li class="pack">Master</li>
              <li id="master" class="price bottom-bar">
                &dollar;399.99
              </li>
              <li class="bottom-bar">2 TB Storage</li>
              <li class="bottom-bar">10 Users Allowed</li>
              <li class="bottom-bar">Send up to 20 GB</li>
              <li>
                <button class="btn">Learn More</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
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
      </div>
    </>
  );
};

export default PaymentLanding;
