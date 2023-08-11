import React from "react";
import nassFitness from "../assets/nasa-fitness-tracking-mobile-app.png";
import nassMobile from "../assets/measure-total-body-weight-through-fitness-app.png";
import slider1img1 from "../assets/nexgtv-entertainment-mobile-app-development.png";
import slider1img2 from "../assets/nexgtv-mobile-app-ui-design.png";
import slider1imgBanner from "../assets/world-communication-awards-for-best-digital-experience.png";
import slider2img1 from "../assets/veme-blockchain-app-developed.png";
import slider2img2 from "../assets/veme-app-ui-design.png";
import slider4img1 from "../assets/pizza_box.png";
import slider4img2 from "../assets/domi-img1.png";
import slider4img3 from "../assets/ux-strategy-for-mobile-app-devlopment.png";
import slider4img4 from "../assets/on-demand-app-development-company.png";
import slider5img1 from "../assets/karavan-social-networking-app-screen.png";
import slider5img2 from "../assets/karavan_2.png";
import slider5img3 from "../assets/social-networking-app-case-study.png";
import slider5img4 from "../assets/karavan-social-networking-app-screen-2.png";
import slider5img5 from "../assets/developers-for-social-media-app.png";
import slider6img1 from "../assets/erp-app-development-service.png";
import slider7img1 from "../assets/melltoo-img2.png";
import slider7img2 from "../assets/melltoo-img1.png";
import slider7imgBanner from "../assets/mobile-app-of-the-year-by-entrepreneur.png";
const MobileScreen = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="rounded-circle active"
          style={{ height: "12px", width: "12px" }}
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          className="rounded-circle"
          style={{ height: "12px", width: "12px" }}
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          className="rounded-circle"
          style={{ height: "12px", width: "12px" }}
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          className="rounded-circle"
          style={{ height: "12px", width: "12px" }}
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          className="rounded-circle"
          style={{ height: "12px", width: "12px" }}
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          className="rounded-circle"
          style={{ height: "12px", width: "12px" }}
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          className="rounded-circle"
          style={{ height: "12px", width: "12px" }}
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active vh-100">
          <div
            className="d-flex h-100 justify-content-end"
            style={{ background: "#ceccd0" }}
          >
            <div className="overflow-hidden d-flex flex-column pt-5">
              <img
                src={slider1img1}
                className="d-block"
                style={{ width: "55vmin" }}
                alt="..."
              />
            </div>
            <div className="overflow-hidden d-flex flex-column pt-5">
              <img
                src={slider1img2}
                className="d-block"
                style={{ width: "55vmin" }}
                alt="..."
              />
            </div>
          </div>
          <div
            className="carousel-caption w-100 d-block d-md-none start-0 end-0 bottom-0 text-start"
            style={{ backgroundColor: "#5f10a2" }}
          >
            <div
              className="align-self-center d-flex
             flex-column px-2 py-5 position-relative"
            >
              <div className="position-absolute bottom-100 start-10 z-3">
                <img src={slider1imgBanner} alt="" className="w-75" />
              </div>
              <h5 className="text-uppercase fs-1">abc 2</h5>
              <p className="fs-5">
                This is the sample text for ABC 2. This is the sample text for
                ABC 2
              </p>
              <p className="text-uppercase">
                case study -{" "}
                <button className="text-capitalize btn btn-light rounded-pill fw-bold">
                  comming soon
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item vh-100">
          <div className="d-flex h-100" style={{ backgroundColor: "#0e103a" }}>
            <div
              className="overflow-hidden d-flex flex-column align-self-end"
              style={{ width: "55vmin", height: "75%" }}
            >
              <img
                src={slider2img1}
                className="d-block"
                style={{ width: "55vmin" }}
                alt="..."
              />
            </div>
            <div
              className="overflow-hidden d-flex flex-column align-self-end"
              style={{ width: "50vmin", height: "115%" }}
            >
              <img
                src={slider2img2}
                className="d-block"
                style={{ width: "55vmin" }}
                alt="..."
              />
            </div>
          </div>
          <div
            className="carousel-caption w-100 d-block d-md-none align-self-center start-0 end-0 bottom-0 text-start px-2 py-5"
            style={{
              background:
                "linear-gradient(138deg, rgba(191,42,182,1) 0%, rgba(53,22,107) 90%)",
            }}
          >
            <h5 className="text-uppercase fs-1">abc 2</h5>
            <p className="fs-4">This is the sample text for ABC 2</p>
            <p className="text-uppercase">
              case study -{" "}
              <button
                className="text-capitalize btn btn-light rounded-pill border-0 text-light"
                style={{ background: "#d2248b" }}
              >
                comming soon
              </button>
            </p>
          </div>
        </div>
        <div className="carousel-item vh-100">
          <div className="d-flex h-100" style={{ backgroundColor: "#14154a" }}>
            <div
              className="overflow-hidden d-flex flex-column align-self-end"
              style={{ width: "55vmin", height: "65%" }}
            >
              <img
                src={nassFitness}
                className="d-block"
                style={{ width: "55vmin" }}
                alt="..."
              />
            </div>
            <div
              className="overflow-hidden d-flex flex-column align-self-end"
              style={{ width: "50vmin", height: "115%" }}
            >
              <img
                src={nassMobile}
                className="d-block"
                style={{ width: "55vmin" }}
                alt="..."
              />
            </div>
          </div>
          <div
            className="carousel-caption w-100 d-block d-md-none align-self-center start-0 end-0 bottom-0 text-start px-2 py-5"
            style={{ backgroundColor: "#0e103a" }}
          >
            <h5 className="text-uppercase fs-1">abc 2</h5>
            <p className="fs-4">This is the sample text for ABC 2</p>
            <p className="text-uppercase">
              case study -{" "}
              <button className="text-capitalize btn btn-light rounded-pill fw-bold">
                comming soon
              </button>
            </p>
          </div>
        </div>
        <div className="carousel-item vh-100">
          <div className="d-flex h-100" style={{ backgroundColor: "#0d121b" }}>
            <img src={slider4img1} alt="" className="position-absolute w-50" />
            <div
              className="overflow-hidden d-flex flex-column align-self-end"
              style={{ width: "55vmin", height: "60%" }}
            >
              <img
                src={slider4img2}
                className="d-block"
                style={{ width: "55vmin" }}
                alt="..."
              />
            </div>
            <div
              className="overflow-hidden d-flex flex-column align-self-end"
              style={{ width: "50vmin", height: "103%" }}
            >
              <img
                src={slider4img3}
                className="d-block"
                style={{ width: "55vmin" }}
                alt="..."
              />
              <img
                src={slider4img4}
                className="d-block"
                style={{ width: "55vmin" }}
                alt="..."
              />
            </div>
          </div>
          <div
            className="carousel-caption w-100 d-block d-md-none align-self-center start-0 end-0 bottom-0 text-start px-2 py-5"
            style={{ backgroundColor: "#142238" }}
          >
            <h5 className="text-uppercase fs-1">abc 3</h5>
            <p className="fs-4">This is the sample text for ABC 3</p>
            <p className="text-capitalize">view case study</p>
          </div>
        </div>
        <div className="carousel-item vh-100">
          <div className="d-flex h-100 bg-info">
            <div
              className="overflow-hidden d-flex flex-column align-self-center"
              style={{ width: "40vmin" }}
            >
              <img
                src={slider5img1}
                className="d-block"
                style={{ width: "40vmin" }}
                alt="..."
              />
              <img
                src={slider5img2}
                className="d-block"
                style={{ width: "40vmin" }}
                alt="..."
              />
            </div>
            <div
              className="overflow-hidden d-flex flex-column align-self-center"
              style={{ width: "40vmin" }}
            >
              <img
                src={slider5img3}
                className="d-block"
                style={{ width: "40vmin" }}
                alt="..."
              />
              <img
                src={slider5img4}
                className="d-block"
                style={{ width: "40vmin" }}
                alt="..."
              />
            </div>
            <div
              className="overflow-hidden d-flex flex-column align-self-center"
              style={{ width: "30vmin" }}
            >
              <img
                src={slider5img5}
                className="d-block"
                style={{ width: "55vmin" }}
                alt="..."
              />
            </div>
          </div>
          <div className="carousel-caption w-100 d-block d-md-none align-self-center start-0 end-0 bottom-0 text-start px-2 py-5 bg-primary">
            <h5 className="text-uppercase fs-1">abc 4</h5>
            <p className="fs-4">This is the sample text for ABC 4</p>
            <p className="text-capitalize">view case study</p>
          </div>
        </div>
        <div className="carousel-item vh-100">
          <div
            className="d-flex h-100"
            style={{
              background: "url(../src/assets/interior.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="overflow-hidden d-flex flex-column h-100">
              <img src={slider6img1} className="d-block" alt="..." />
            </div>
          </div>
          <div
            className="carousel-caption w-100 d-block d-md-none align-self-center start-0 end-0 bottom-0 text-start px-2 py-5"
            style={{ background: "#02298f" }}
          >
            <h5 className="text-uppercase fs-1">abc 4</h5>
            <p className="fs-4">This is the sample text for ABC 4</p>
            <p className="text-capitalize">view case study</p>
          </div>
        </div>
        <div className="carousel-item vh-100">
          <div
            className="d-flex h-100 justify-content-end"
            style={{ background: "#01b76a" }}
          >
            <div className="overflow-hidden d-flex flex-column pt-5">
              <img
                src={slider7img1}
                className="d-block"
                style={{ width: "75vmin" }}
                alt="..."
              />
            </div>
            <div className="overflow-hidden d-flex flex-column pt-5">
              <img
                src={slider7img2}
                className="d-block"
                style={{ width: "55vmin" }}
                alt="..."
              />
            </div>
          </div>
          <div
            className="carousel-caption w-100 d-block d-md-none start-0 end-0 bottom-0 text-start"
            style={{ backgroundColor: "#017344" }}
          >
            <div
              className="align-self-center d-flex
             flex-column px-2 py-5 position-relative"
            >
              <div className="position-absolute bottom-100 start-10 z-3">
                <img src={slider7imgBanner} alt="" className="w-75" />
              </div>
              <h5 className="text-uppercase fs-1">xyz 123</h5>
              <p className="fs-5">
                This is the sample text for ABC 2. This is the sample text for
                XYZ 123
              </p>
              <p className="text-uppercase">
                case study -{" "}
                <button className="text-capitalize btn btn-light rounded-pill fw-bold text-success">
                  comming soon
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScreen;
