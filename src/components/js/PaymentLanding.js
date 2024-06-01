/* global chrome */
import React, { useState, useEffect } from "react";
import "../css/landing.css";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet";

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
        <div class="pricing3 py-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-2 col-md-3 align-self-center">
                <div class="nav flex-column nav-pills" role="tablist">
                  <a
                    class="nav-link "
                    data-toggle="pill"
                    href="#p3-1"
                    role="tab"
                    aria-expanded="true"
                  >
                    <h2>$0</h2>
                    <h6 class="subtitle">Free</h6>
                  </a>
                  <a
                    class="nav-link active"
                    data-toggle="pill"
                    href="#p3-2"
                    role="tab"
                    aria-expanded="true"
                  >
                    <h2>
                      $1<small>/m</small>
                    </h2>
                    <h6 class="subtitle">Premium</h6>
                  </a>
                  <a
                    class="nav-link"
                    data-toggle="pill"
                    href="#p3-3"
                    role="tab"
                    aria-expanded="true"
                  >
                    <h2>
                      $2<small>/m</small>
                    </h2>
                    <h6 class="subtitle">Pro</h6>
                  </a>
                </div>
              </div>
              <div class="col-lg-10 col-md-9">
                <div class="tab-content">
                  <div class="tab-pane fade" id="p3-1" role="tabpanel">
                    <div class="row">
                      <div class="col-lg-7">
                        <div class="pricing-box">
                          <h2 class="text-uppercase title mb-0">Free</h2>
                          <h6 class="subtitle">The base montly plan</h6>
                          <ul class="list-inline">
                            <li>
                              <i class="text-center overflow-hidden d-inline-block icon-picture"></i>{" "}
                              <span>
                                1 Premium images <br />
                                Per day
                              </span>
                            </li>
                            <li>
                              <i class="text-center overflow-hidden d-inline-block icon-camrecorder"></i>{" "}
                              <span>
                                1 Premium Videos <br />
                                Per day
                              </span>
                            </li>
                            <li>
                              <i class="text-center overflow-hidden d-inline-block icon-people"></i>{" "}
                              <span>
                                Not operate the <br />
                                Account
                              </span>
                            </li>
                            <li>
                              <i class="text-center overflow-hidden d-inline-block icon-people"></i>{" "}
                              <span>
                                Not operate the <br />
                                Account
                              </span>
                            </li>
                          </ul>
                          <div class="d-flex align-items-center">
                            <span class="display-5 text-dark mr-3 vm font-weight-medium">
                              $0
                            </span>
                            <a
                              class="btn btn-danger-gradiant btn-md border-0 text-white rounded-pill"
                              href="#f1"
                            >
                              <span>
                                BUY NOW <i class="ti-arrow-right"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div
                        class="col-lg-5 bg-image text-center align-items-end position-relative d-flex"
                        style="background-image:url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/pricing/bg.jpg)"
                      >
                        <div class="quote-box">
                          <h3 class="text-white font-weight-light mb-4">
                            I am using this plan for last two years and i am
                            very much impressed with the quality ...
                          </h3>
                          <h6 class="text-white">Hanna Gover</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade active show"
                    id="p3-2"
                    role="tabpanel"
                  >
                    <div class="row">
                      <div class="col-lg-7">
                        <div class="pricing-box">
                          <h2 class="text-uppercase title mb-0">Regular</h2>
                          <h6 class="subtitle">The base montly plan</h6>
                          <ul class="list-inline">
                            <li>
                              <i class="text-center overflow-hidden d-inline-block icon-picture"></i>{" "}
                              <span>
                                10 Premium images <br />
                                Per day
                              </span>
                            </li>
                            <li>
                              <i class="text-center overflow-hidden d-inline-block icon-camrecorder"></i>{" "}
                              <span>
                                10 Premium Videos <br />
                                Per day
                              </span>
                            </li>
                            <li>
                              <i class="text-center overflow-hidden d-inline-block icon-people"></i>{" "}
                              <span>
                                Users can operate the <br />
                                Account
                              </span>
                            </li>
                          </ul>
                          <div class="d-flex align-items-center">
                            <span class="display-5 text-dark mr-3 vm font-weight-medium">
                              $5
                            </span>
                            <a
                              class="btn btn-danger-gradiant btn-md border-0 text-white rounded-pill"
                              href="#f1"
                            >
                              <span>BUY NOW</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div
                        class="col-lg-5 bg-image text-center align-items-end position-relative d-flex"
                        style="background-image:url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/pricing/bg.jpg)"
                      >
                        <div class="quote-box">
                          <h3 class="text-white font-weight-light mb-4">
                            I am using this plan for last two years and i am
                            very much impressed with the quality ...
                          </h3>
                          <h6 class="text-white">Hanna Gover</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="p3-3" role="tabpanel">
                    <div class="row">
                      <div class="col-lg-7">
                        <div class="pricing-box">
                          <h2 class="text-uppercase title m-b-0">Premium</h2>
                          <h6 class="subtitle">The base montly plan</h6>
                          <ul class="list-inline">
                            <li>
                              <i class="text-center overflow-hidden d-inline-block icon-picture"></i>{" "}
                              <span>
                                50 Premium images <br />
                                Per day
                              </span>
                            </li>
                            <li>
                              <i class="text-center overflow-hidden d-inline-block icon-camrecorder"></i>{" "}
                              <span>
                                50 Premium Videos <br />
                                Per day
                              </span>
                            </li>
                            <li>
                              <i class="text-center overflow-hidden d-inline-block icon-people"></i>{" "}
                              <span>
                                Users can operate the <br />
                                Account
                              </span>
                            </li>
                          </ul>
                          <div class="d-flex align-items-center">
                            <span class="display-5 text-dark mr-3 font-weight-medium">
                              $10
                            </span>
                            <a
                              class="btn btn-danger-gradiant btn-md border-0 text-white rounded-pill"
                              href="#f1"
                            >
                              <span>BUY NOW</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-lg-5 bg-image text-center align-items-end position-relative d-flex"
                        style="background-image:url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/pricing/bg.jpg)"
                      >
                        <div class="quote-box">
                          <h3 class="text-white font-weight-light mb-4">
                            I am using this plan for last two years and i am
                            very much impressed with the quality ...
                          </h3>
                          <h6 class="text-white">Hanna Gover</h6>
                        </div>
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
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>

    </>
  );
};

export default PaymentLanding;
