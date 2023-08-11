import React, { useEffect } from "react";
import { gsap } from "gsap";
import slider1img1 from "../assets/nexgtv-entertainment-mobile-app-development.png";
import slider1img2 from "../assets/nexgtv-mobile-app-ui-design.png";
import slider1imgBanner from "../assets/world-communication-awards-for-best-digital-experience.png";
import slider2img1 from "../assets/veme-blockchain-app-developed.png";
import slider2img2 from "../assets/veme-app-ui-design.png";
import slider4img1 from "../assets/pizza_box.png";
import slider4img2 from "../assets/domi-img1.png";
import slider4img3 from "../assets/ux-strategy-for-mobile-app-devlopment.png";
import slider5img1 from "../assets/karavan-social-networking-app-screen.png";
import slider5img2 from "../assets/karavan_2.png";
import slider5img3 from "../assets/social-networking-app-case-study.png";
import slider5img4 from "../assets/karavan-social-networking-app-screen-2.png";
import slider5img5 from "../assets/developers-for-social-media-app.png";
import slider6img1 from "../assets/erp-app-development-service.png";
import slider7img1 from "../assets/melltoo-img2.png";
import slider7img2 from "../assets/melltoo-img1.png";
import slider7imgBanner from "../assets/mobile-app-of-the-year-by-entrepreneur.png";
import "./styles/WebScreen.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
// const SvgComponent = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     xmlSpace="preserve"
//     style={{
//       enableBackground: "new 0 0 414 414",
//       width: "35vmin",
//     }}
//     viewBox="0 0 414 414"
//   >
//     <path
//       d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
//       className="transrg"
//       style={{
//         opacity: 0.4,
//         fill: "none",
//         stroke: "#fff",
//         strokeWidth: 2,
//         strokeMiterlimit: 10,
//         enableBackground: "new",
//       }}
//     />
//     <path
//       strokeDasharray="0,1000"
//       d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
//       className="transrgwht"
//       style={{
//         fill: "none",
//         stroke: "#fff",
//         strokeWidth: 2,
//         strokeMiterlimit: 10,
//         strokeDasharray: "10,1000",
//       }}
//     />
//     <g
//       className="dots-nav active"
//       data-bs-target="#carouselExampleIndicators"
//       data-bs-slide-to="0"
//       aria-current="true"
//       aria-label="Slide 1"
//     >
//       <path
//         d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
//         className="dotsst dotsfill1"
//         style={{
//           fill: "#0092ff",
//           opacity: 1,
//         }}
//       />
//       <path
//         d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
//         className="dotsstro1"
//         style={{
//           opacity: 1,
//           fill: "none",
//           stroke: "#fff",
//           strokeWidth: 2,
//           strokeMiterlimit: 10,
//         }}
//       />
//     </g>
//     <g
//       className="dots-nav"
//       data-bs-target="#carouselExampleIndicators"
//       data-bs-slide-to="1"
//       aria-label="Slide 2"
//     >
//       <path
//         d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"
//         className="dotsst dotsfill2"
//         style={{
//           fill: "#0092ff",
//           opacity: 1,
//         }}
//       />
//       <path
//         d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"
//         className="dotsstro2"
//         style={{
//           opacity: 1,
//           fill: "none",
//           stroke: "#fff",
//           strokeWidth: 2,
//           strokeMiterlimit: 10,
//         }}
//       />
//     </g>
//     <g
//       className="dots-nav"
//       data-bs-target="#carouselExampleIndicators"
//       data-bs-slide-to="2"
//       aria-label="Slide 3"
//     >
//       <path
//         d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
//         className="dotsst dotsfill3"
//         style={{
//           fill: "#0092ff",
//           opacity: 1,
//         }}
//       />
//       <path
//         d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
//         className="dotsstro3"
//         style={{
//           opacity: 1,
//           fill: "none",
//           stroke: "#fff",
//           strokeWidth: 2,
//           strokeMiterlimit: 10,
//         }}
//       />
//     </g>
//     <g className="dots-nav">
//       <path
//         d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
//         className="dotsst dotsfill4"
//         style={{
//           fill: "#0092ff",
//           opacity: 1,
//         }}
//       />
//       <path
//         d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
//         className="dotsstro4"
//         style={{
//           opacity: 1,
//           fill: "none",
//           stroke: "#fff",
//           strokeWidth: 2,
//           strokeMiterlimit: 10,
//         }}
//       />
//     </g>
//     <g className="dots-nav">
//       <path
//         d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
//         className="dotsst dotsfill5"
//         style={{
//           fill: "#0092ff",
//           opacity: 1,
//         }}
//       />
//       <path
//         d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
//         className="dotsstro5"
//         style={{
//           opacity: 1,
//           fill: "none",
//           stroke: "#fff",
//           strokeWidth: 2,
//           strokeMiterlimit: 10,
//         }}
//       />
//     </g>
//     <g className="dots-nav">
//       <path
//         d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
//         className="dotsst dotsfill6"
//         style={{
//           fill: "#0092ff",
//           opacity: 1,
//         }}
//       />
//       <path
//         d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
//         className="dotsstro6"
//         style={{
//           opacity: 1,
//           fill: "none",
//           stroke: "#fff",
//           strokeWidth: 2,
//           strokeMiterlimit: 10,
//         }}
//       />
//     </g>
//     <g className="dots-nav">
//       <path
//         d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6z"
//         className="dotsst dotsfill7"
//         style={{
//           fill: "#0092ff",
//           opacity: 1,
//         }}
//       />
//       <path
//         d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6z"
//         className="dotsstro7"
//         style={{
//           opacity: 1,
//           fill: "none",
//           stroke: "#fff",
//           strokeWidth: 2,
//           strokeMiterlimit: 10,
//         }}
//       />
//     </g>
//   </svg>
// );

const WebScreen = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Draggable);

    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: ".mainCarouselDiv",
    });
    gsap.to(".carousel-indicator-div svg .transrgwht", {
      scrollTrigger: ".slide-container2",
      duration: 1,
      fill: "#4e27ce",
      strokeDasharray: "129, 700",
    });
    gsap.to(".carousel-indicator-div svg .transrgwht", {
      scrollTrigger: ".slide-container3",
      duration: 1,
      fill: "#17263c",
      strokeDasharray: "277, 700",
    });
    gsap.to(".carousel-indicator-div svg .transrgwht", {
      scrollTrigger: ".slide-container4",
      duration: 1,
      fill: "#134ca2",
      strokeDasharray: "420, 700",
    });
    gsap.to(".carousel-indicator-div svg .transrgwht", {
      scrollTrigger: ".slide-container5",
      duration: 1,
      fill: "#022b92",
      strokeDasharray: "530, 700",
    });
    gsap.to(".carousel-indicator-div svg .transrgwht", {
      scrollTrigger: ".slide-container6",
      duration: 1,
      fill: "#01824d",
      strokeDasharray: "668, 700",
    });
    gsap.to(".slide-container2 .rightPart img:nth-child(2)", {
      scrollTrigger: ".slide-container2",
      duration: 2,
      translateY: 100,
    });
    gsap.to(".slide-container2 .rightPart img:nth-child(1)", {
      scrollTrigger: ".slide-container2",
      duration: 2,
      translateY: -100,
    });
    gsap.to(".slide-container3 .rightPart img:nth-child(3)", {
      scrollTrigger: ".slide-container3",
      duration: 2,
      translateY: 100,
    });
    gsap.to(".slide-container3 .rightPart img:nth-child(2)", {
      scrollTrigger: ".slide-container3",
      duration: 2,
      translateY: -100,
    });
    gsap.to(".slide-container4 .rightPart div img:nth-child(1)", {
      scrollTrigger: ".slide-container4",
      duration: 2,
      translateY: 25,
    });
    gsap.to(".slide-container4 .rightPart div img:nth-child(2)", {
      scrollTrigger: ".slide-container4",
      duration: 2,
      translateY: -25,
    });
    gsap.to(".slide-container4 .rightPart img:nth-child(3)", {
      scrollTrigger: ".slide-container4",
      duration: 2,
      translateX: 25,
    });
    gsap.to(".slide-container5 .rightPart img", {
      scrollTrigger: ".slide-container5",
      duration: 2,
      opacity: 1,
    });
    gsap.to(".slide-container6 .rightPart img", {
      scrollTrigger: ".slide-container6",
      duration: 2,
      translateY: -25,
    });
    gsap.to(".slide-container2 .content-banner", {
      scrollTrigger: ".slide-container2",
      duration: 3,
      opacity: 1,
    });
    gsap.to(".slide-container3 .content-banner", {
      scrollTrigger: ".slide-container3",
      duration: 3,
      opacity: 1,
    });
    gsap.to(".slide-container4 .content-banner", {
      scrollTrigger: ".slide-container4",
      duration: 3,
      opacity: 1,
    });
    gsap.to(".slide-container5 .content-banner", {
      scrollTrigger: ".slide-container5",
      duration: 3,
      opacity: 1,
    });
    gsap.to(".slide-container6 .content-banner", {
      scrollTrigger: ".slide-container6",
      duration: 3,
      opacity: 1,
    });
    gsap.to(".slide-container2 .leftPart div", {
      scrollTrigger: ".slide-container2",
      duration: 3,
      opacity: 1,
    });
    gsap.to(".slide-container3 .leftPart div", {
      scrollTrigger: ".slide-container3",
      duration: 3,
      opacity: 1,
    });
    gsap.to(".slide-container4 .leftPart div", {
      scrollTrigger: ".slide-container4",
      duration: 3,
      opacity: 1,
    });
    gsap.to(".slide-container5 .leftPart div", {
      scrollTrigger: ".slide-container5",
      duration: 3,
      opacity: 1,
    });
    gsap.to(".slide-container6 .leftPart div", {
      scrollTrigger: ".slide-container6",
      duration: 3,
      opacity: 1,
    });
  }, []);
  return (
    <div>
      <div className="mainCarouselDiv">
        <div className="carousel-indicator-div z-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            style={{
              enableBackground: "new 0 0 414 414",
              width: "35vmin",
            }}
            viewBox="0 0 414 414"
          >
            <path
              d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
              className="transrg"
              style={{
                opacity: 0.4,
                fill: "none",
                stroke: "#fff",
                strokeWidth: 2,
                strokeMiterlimit: 10,
                enableBackground: "new",
              }}
            />
            <path
              strokeDasharray="0,1000"
              d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
              className="transrgwht"
              style={{
                fill: "#6411a9",
                stroke: "#fff",
                strokeWidth: 2,
                strokeMiterlimit: 10,
                strokeDasharray: "10,1000",
              }}
            />
            <g
              className="dots-nav active"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
            >
              <path
                d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                className="dotsst dotsfill1"
                style={{
                  fill: "#0092ff",
                  opacity: 1,
                }}
              />
              <path
                d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                className="dotsstro1"
                style={{
                  opacity: 1,
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g
              className="dots-nav"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            >
              <path
                d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"
                className="dotsst dotsfill2"
                style={{
                  fill: "#0092ff",
                  opacity: 1,
                }}
              />
              <path
                d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"
                className="dotsstro2"
                style={{
                  opacity: 1,
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g
              className="dots-nav"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            >
              <path
                d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                className="dotsst dotsfill3"
                style={{
                  fill: "#0092ff",
                  opacity: 1,
                }}
              />
              <path
                d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                className="dotsstro3"
                style={{
                  opacity: 1,
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g className="dots-nav">
              <path
                d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                className="dotsst dotsfill4"
                style={{
                  fill: "#0092ff",
                  opacity: 1,
                }}
              />
              <path
                d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                className="dotsstro4"
                style={{
                  opacity: 1,
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g className="dots-nav">
              <path
                d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
                className="dotsst dotsfill5"
                style={{
                  fill: "#0092ff",
                  opacity: 1,
                }}
              />
              <path
                d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
                className="dotsstro5"
                style={{
                  opacity: 1,
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g className="dots-nav">
              <path
                d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
                className="dotsst dotsfill6"
                style={{
                  fill: "#0092ff",
                  opacity: 1,
                }}
              />
              <path
                d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
                className="dotsstro6"
                style={{
                  opacity: 1,
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g className="dots-nav">
              <path
                d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6z"
                className="dotsst dotsfill7"
                style={{
                  fill: "#0092ff",
                  opacity: 1,
                }}
              />
              <path
                d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6z"
                className="dotsstro7"
                style={{
                  opacity: 1,
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
              />
            </g>
          </svg>
        </div>
        <div className="carouselBody slide-container1">
          <div className="content-banner opacity-100">
            <h1 className="text-light text-capitalize fs-1">25M+ downloads</h1>
            <p className="text-light fs-3">on appstore & google playstore</p>
          </div>
          <div className="leftPart">
            <img src={slider1imgBanner} alt="" />
            <h1>abc 123</h1>
            <p>We are the best web development company in he world</p>
            <div className="opacity-100">
              <a href="#">view case study</a>
              <a href="#">skip</a>
            </div>
          </div>
          <div className="rightPart">
            <img src={slider1img2} alt="" />
            <img src={slider1img1} alt="" />
          </div>
        </div>
        <div className="carouselBody slide-container2">
          <div className="content-banner">
            <p className="text-light fs-3">the next big</p>
            <h1 className="text-light text-capitalize fs-1">blockchain</h1>
            <p className="text-light fs-3 text-capitalize">revolution</p>
          </div>
          <div className="leftPart" style={{ background: "#4e27ce" }}>
            <h1>abc 234</h1>
            <p>We are the best web development company in he world</p>
            <div>
              <a href="#">coming soon</a>
              <a href="#">skip</a>
            </div>
          </div>
          <div className="rightPart" style={{ background: "#1d0363" }}>
            <img src={slider2img1} alt="" className="align-self-end" />
            <img src={slider2img2} alt="" className="align-self-start" />
          </div>
        </div>
        <div className="carouselBody slide-container3">
          <div className="content-banner">
            <p className="text-light fs-3">redefining</p>
            <h1 className="text-light text-capitalize fs-1">UX stratergy</h1>
            <p className="text-light fs-3 text-capitalize">and ui design</p>
          </div>
          <div className="leftPart" style={{ background: "#17263c" }}>
            <h1>abc 456</h1>
            <p>We are the best web development company in he world</p>
            <div>
              <a href="#">coming soon</a>
              <a href="#">skip</a>
            </div>
          </div>
          <div
            className="rightPart position-relative"
            style={{ background: "#000000" }}
          >
            <img
              src={slider4img1}
              alt=""
              className="position-absolute top-0 start-0"
            />
            <img src={slider4img2} alt="" className="align-self-end" />
            <img src={slider4img3} alt="" className="align-self-start" />
          </div>
        </div>
        <div className="carouselBody slide-container4">
          <div className="content-banner">
            <p className="text-light fs-3 text-capitalize">text headline</p>
            <h1 className="text-light text-capitalize fs-1">text headline</h1>
            <p className="text-light fs-3 text-capitalize text-end">
              footer headline
            </p>
          </div>
          <div className="leftPart" style={{ background: "#134ca2" }}>
            <h1>abc 567</h1>
            <p>We are the best web development company in he world</p>
            <div>
              <a href="#">coming soon</a>
              <a href="#">skip</a>
            </div>
          </div>
          <div
            className="rightPart position-relative"
            style={{ background: "#32bdc3" }}
          >
            <div className="d-flex flex-column justify-content-between h-100">
              <img src={slider5img1} alt="" className="w-100" />
              <img src={slider5img2} alt="" className="w-100" />
            </div>
            <div className="d-flex flex-column justify-content-between h-100">
              <img src={slider5img3} alt="" className="w-100" />
              <img src={slider5img4} alt="" className="w-100" />
            </div>
            <img src={slider5img5} alt="" className="w-25" />
          </div>
        </div>
        <div className="carouselBody slide-container5">
          <div className="content-banner">
            <p className="text-light fs-3 text-capitalize">
              developing ERP solution for
            </p>
            <h1 className="text-light text-capitalize fs-1">text headline</h1>
            <p className="text-light fs-3 text-capitalize text-end">
              in furniture industry
            </p>
          </div>
          <div className="leftPart" style={{ background: "#022b92" }}>
            <h1>abc 678</h1>
            <p>Best since 2017</p>
            <p>We are the best web development company in he world</p>
            <div>
              <a href="#">coming soon</a>
              <a href="#">skip</a>
            </div>
          </div>
          <div
            className="rightPart position-relative justify-content-center align-items-center"
            style={{
              background: "url(./src/assets/interior.jpg)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <img
              src={slider6img1}
              alt=""
              style={{ width: "100%", opacity: 0 }}
            />
          </div>
        </div>
        <div className="carouselBody slide-container6">
          <div className="content-banner">
            <h1 className="text-light text-capitalize fs-1">25M+ downloads</h1>
            <p className="text-light fs-3">on appstore & google playstore</p>
          </div>
          <div className="leftPart" style={{ background: "#01824d" }}>
            <img src={slider7imgBanner} alt="" />
            <h1>abc 23478</h1>
            <p>We are the best web development company in he world</p>
            <div>
              <a href="#">comming soon</a>
              <a href="#">skip</a>
            </div>
          </div>
          <div
            className="rightPart justify-content-end align-items-end"
            style={{ background: "#01b76a" }}
          >
            <img src={slider7img1} alt="" className="w-50" />
            <img src={slider7img2} alt="" className="w-" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebScreen;
