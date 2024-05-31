/* global chrome */
import React, { useState, useEffect } from "react";
import "../css/landing.css";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const PaymentLanding = () => {
  const [userdata, setUserdata] = useState({});
  const [isMonthly, setIsMonthly] = useState(false);
  const toggleBilling = () => {
    setIsMonthly(!isMonthly);
  };

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

  async function makePayment(planType, isMonthly) {
    const stripe = await loadStripe(
      "pk_test_51NkpdNSGYG2CnOjscEUK9B0JfqNSzZEqj1GXLZEHPJrzCGPfTDv2DnleEid0HVNvmlf0qUVjNFTRV3UzpAsucioU00Kthd5o4Z"
    );

    let sPriceId, sProductId;
    if (planType === "free") {
      console.log("Processing free plan");
      // Add your logic for processing free plan
    } else if (planType === "premium") {
      console.log("Processing premium plan");
      if(isMonthly){
        sPriceId = "price_1PKzSsSGYG2CnOjsDpM6cUau";
      }
      else {
        sPriceId = "price_1PMU4ASGYG2CnOjs6jriPfOa";
      }
      
      sProductId = "prod_QBMBmxVrYZ26Hp";

      // planPay = "SocialScribe Premium Plan";
      // price = 1;
    } else if (planType === "pro") {
      console.log("Processing pro plan");

      if(isMonthly){
        sPriceId = "price_1PKzTSSGYG2CnOjs0iTitDDU";
      }else{
        sPriceId = "price_1PMUSxSGYG2CnOjsYYFNnMmL";
      }
      
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
        class="elementor-element elementor-element-9e0036e e-flex e-con-boxed e-con e-parent e-lazyloaded snipcss-x3KAs"
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
              class="elementor-element elementor-element-3b42446 e-con-full e-flex e-con e-child"
              data-id="3b42446"
              data-element_type="container"
            >
              <div
                class="elementor-element elementor-element-9439560 e-con-full e-flex e-con e-child"
                data-id="9439560"
                data-element_type="container"
              >
                <div
                  class="elementor-element elementor-element-3e93d52 elementor-widget elementor-widget-heading"
                  data-id="3e93d52"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div class="elementor-widget-container"></div>
                </div>
                <div
                  class="elementor-element elementor-element-50f89ff elementor-widget elementor-widget-image-carousel e-widget-swiper"
                  data-id="50f89ff"
                  data-element_type="widget"
                  data-settings='{"slides_to_show":"2","slides_to_scroll":"1","navigation":"none","slides_to_show_tablet":"4","slides_to_show_mobile":"2","image_spacing_custom":{"unit":"px","size":66,"sizes":[]},"autoplay_speed":8000,"speed":1000,"autoplay":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","infinite":"yes","image_spacing_custom_tablet":{"unit":"px","size":"","sizes":[]},"image_spacing_custom_mobile":{"unit":"px","size":"","sizes":[]}}'
                  data-widget_type="image-carousel.default"
                  aria-roledescription="carousel"
                  aria-label="Carousel | Horizontal scrolling: Arrow Left &amp; Right"
                >
                  <div class="elementor-widget-container">
                    <header>
                      <h1>Our Pricing</h1>
                      <div class="toggle">
                        <label>Annually </label>
                        <div class="toggle-btn">
                          <input
                            type="checkbox"
                            class="checkbox"
                            id="checkbox"
                            checked={isMonthly}
                            onChange={toggleBilling}
                          />
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
                          <li class="pack">FREE</li>
                          <li id="basic" class="price bottom-bar">
                            {isMonthly ? "$19.99" : "$199.99"}
                          </li>
                          <li class="bottom-bar">500 GB Storage</li>
                          <li class="bottom-bar">2 Users Allowed</li>
                          <li class="bottom-bar">Send up to 3 GB</li>
                          <li>
                            <button class="btn">Get Affiliate Program</button>
                          </li>
                        </ul>
                      </div>
                      <div class="card active">
                        <ul>
                          <li class="pack">PREMIUM</li>
                          <li id="professional" class="price bottom-bar">
                            {isMonthly ? "$24.99" : "$249.99"}
                          </li>
                          <li class="bottom-bar">1 TB Storage</li>
                          <li class="bottom-bar">5 Users Allowed</li>
                          <li class="bottom-bar">Send up to 10 GB</li>
                          <li>
                            <button 
                            class="btn active-btn"
                            onClick={() => makePayment("premium" , isMonthly)}>
                              Get Premium
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div class="card shadow">
                        <ul>
                          <li class="pack">PROFESSIONAL</li>
                          <li id="master" class="price bottom-bar">
                            {isMonthly ? "$39.99" : "$399.99"}
                          </li>
                          <li class="bottom-bar">2 TB Storage</li>
                          <li class="bottom-bar">10 Users Allowed</li>
                          <li class="bottom-bar">Send up to 20 GB</li>
                          <li>
                            <button 
                            class="btn"
                            onClick={() => makePayment("pro" , isMonthly)}>
                              Get Pro
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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

export default PaymentLanding;
