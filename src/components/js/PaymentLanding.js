/* global chrome */
import React from "react";
import "../css/landing.css";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const paymentlanding = () => {
  /** GET THE USER DATA FROM THE SOURCE AND ADD EMAIL TO THE BODY TO HARDCODE IT IN THE BLANK */

  async function makePayment(planType) {
    const stripe = await loadStripe(
      "pk_test_51NkpdNSGYG2CnOjscEUK9B0JfqNSzZEqj1GXLZEHPJrzCGPfTDv2DnleEid0HVNvmlf0qUVjNFTRV3UzpAsucioU00Kthd5o4Z"
    );

    // Get the data
    // Send a message to your background script
    window.postMessage({ type: "GET_USER_DATA_FOR_PAYMENT" }, "*");

    // Listen for messages from your background script
    window.addEventListener("message", function (event) {
      // Only accept messages from the same frame
      if (event.source !== window) {
        return;
      }

      var message = event.data;

      // Only accept messages that we know are ours
      if (typeof message !== "object" || message === null || !message.type) {
        return;
      }

      if (message.type === "USER_DATA_FOR_PAYMENT") {
        console.log("Data received from background script: " + message.data);
        // Now you can use message.data in your payment procedures
      }
    });

    let planPay, price;
    if (planType === "free") {
      console.log("Processing free plan");
      // Add your logic for processing free plan
    } else if (planType === "premium") {
      console.log("Processing premium plan");
      planPay = "SocialScribe Premium Plan";
      price = 1;
    } else if (planType === "pro") {
      console.log("Processing pro plan");

      planPay = "SocialScribe Pro Plan";
      price = 2;
    } else {
      console.log("Invalid plan");
    }

    // Call the userdata and send the email and id via the body
    const response = await axios.post(
      "http://localhost:1997/api/create-checkout-session",
      {
        data: {
          plan: planPay,
          type: planType,
          price: price,
          userEmail: "ahmed.kaif.0603@gmail.com",
          userId: "6653238db46d7bded020ac3b",
        },
      },
      { withCredentials: true }
    );

    console.log(response);
    console.log(response.data.redirectUrl);
    console.log(response.config.data);

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
        class="elementor-element elementor-element-9e0036e e-flex e-con-boxed e-con e-parent e-lazyloaded snipcss-97bdC"
        data-id="9e0036e"
        data-element_type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div class="containercard snipcss-iaZTI">
          <h5 class="text-center pricing-table-subtitle">PRICING PLAN</h5>
          <h1 class="text-center pricing-table-title">Pricing Table</h1>
          <div class="row">
            <div class="col-md-4">
              <div class="card pricing-card pricing-plan-basic">
                <div class="card-body">
                  <i class="mdi mdi-cube-outline pricing-plan-icon"></i>
                  <p class="pricing-plan-title">Basic</p>
                  <h3 class="pricing-plan-cost ml-auto">FREE</h3>
                  <ul class="pricing-plan-features">
                    <li>Unlimited conferences</li>
                    <li>100 participants max</li>
                    <li>Custom Hold Music</li>
                    <li>10 participants max</li>
                  </ul>
                  <button
                    class="btn pricing-plan-purchase-btn"
                    onClick={() => makePayment("free")}
                  >
                    Free
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card pricing-card pricing-card-highlighted  pricing-plan-pro">
                <div class="card-body">
                  <i class="mdi mdi-trophy pricing-plan-icon"></i>
                  <p class="pricing-plan-title">Pro</p>
                  <h3 class="pricing-plan-cost ml-auto">$49</h3>
                  <ul class="pricing-plan-features">
                    <li>Unlimited conferences</li>
                    <li>100 participants max</li>
                    <li>Custom Hold Music</li>
                    <li>10 participants max</li>
                  </ul>
                  <button
                    class="btn pricing-plan-purchase-btn"
                    onClick={() => makePayment("premium")}
                  >
                    Premium
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card pricing-card pricing-plan-enterprise">
                <div class="card-body">
                  <i class="mdi mdi-wallet-giftcard pricing-plan-icon"></i>
                  <p class="pricing-plan-title">Enterprise</p>
                  <h3 class="pricing-plan-cost ml-auto">$69</h3>
                  <ul class="pricing-plan-features">
                    <li>Unlimited conferences</li>
                    <li>100 participants max</li>
                    <li>Custom Hold Music</li>
                    <li>10 participants max</li>
                  </ul>
                  <button
                    class="btn pricing-plan-purchase-btn"
                    onClick={() => makePayment("pro")}
                  >
                    Pro
                  </button>
                </div>
              </div>
            </div>
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

export default paymentlanding;
