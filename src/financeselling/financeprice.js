import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import financecardgirl from "../image/financecardgirl.png";
import financecardboy from "../image/financecardboy.png";
import { IoStar } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
export default function FinancePrice() {
  return (
    <>
      <div className="container-fluid financebg1">
        <div className="row">
          <div className="col-12 col-sm-4 col-md-2 col-lg-2 col-xl-2"></div>
          <div className="col-8">
            <div className="d-flex flex-column align-items-center text-center">
              <small className="mt-5">Pricing</small>
              <h1>
                Rapid and Easy Company Setup <br />
                <span style={{ color: "#EC111A" }}>Start Today!</span>
              </h1>
              <small>
                RGSTR offers flexible company registration and management
                options. <br />
                Explore your choices below.
              </small>
              <div
                className="mt-3 p-2 rounded-5"
                style={{ backgroundColor: "#F8F8F8" }}
              >
                <button type="button" className="btn btn-light rounded-5 mx-2">
                  Canada Residents
                </button>
                <button type="button" className="btn btn-light rounded-5 mx-2">
                  Non-Residents
                </button>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className="p-4 financebg2 rounded-4 text-dark">
                  <h6>SOLE PROPRIETORSHIP</h6>
                  <small>
                    Set up as a limited company and receive all legal paperwork
                  </small>
                  <div className="d-flex mt-3">
                    <h1>$49</h1>
                    <small className="ms-2 mt-3">/ ONE-TIME FEE</small>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-dark rounded-5 mt-3 p-3 w-100"
                  >
                    Get Started Now
                  </button>
                  <br />
                  <br />
                  <div className=" d-flex">
                    <FaCircleCheck
                      style={{ color: "#7749B8", fontSize: "2rem" }}
                    />
                    <p className="ms-2 mt-1">Company formation</p>
                  </div>
                  <div className=" d-flex">
                    <FaCircleCheck
                      style={{ color: "#7749B8", fontSize: "2rem" }}
                    />
                    <p className="ms-2 mt-1">Company formation</p>
                  </div>
                  <div className=" d-flex">
                    <FaCircleCheck
                      style={{ color: "#7749B8", fontSize: "2rem" }}
                    />
                    <p className="ms-2 mt-1">Share Certificate</p>
                  </div>
                  <div className=" d-flex">
                    <FaCircleCheck
                      style={{ color: "#7749B8", fontSize: "2rem" }}
                    />
                    <p className="ms-2 mt-1">Live chat with an expert</p>
                  </div>
                  <div className=" d-flex">
                    <FaCircleCheck
                      style={{ color: "#7749B8", fontSize: "2rem" }}
                    />
                    <p className="ms-2 mt-1">
                      Exclusive offers from our Banking
                    </p>
                  </div>
                  <div className=" d-flex">
                    <CiCircleCheck style={{ fontSize: "2rem", opacity: 0.5 }} />
                    <p className="ms-2 mt-1">Companies House fee included</p>
                  </div>
                  <div className=" d-flex">
                    <CiCircleCheck style={{ fontSize: "2rem", opacity: 0.5 }} />
                    <p className="ms-2 mt-1">Companies House fee included</p>
                  </div>
                  <div className=" d-flex">
                    <CiCircleCheck style={{ fontSize: "2rem", opacity: 0.5 }} />
                    <p className="ms-2 mt-1">
                      Registered Canadian office address
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className="p-4 financebg2 rounded-4 text-dark">
                  <h6>INCORPORATION</h6>
                  <small>
                    Register a limited company and get all compliance related to
                    your incorporation
                  </small>
                  <div className="d-flex mt-3">
                    <h1>$399</h1>
                    <small className="ms-2 mt-3">/ ONE-TIME FEE</small>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-danger rounded-5 mt-3 w-100 p-3"
                  >
                    Get Started Now
                  </button>
                  <br />
                  <br />
                  <div className=" d-flex">
                    <FaCircleCheck
                      style={{ color: "#7749B8", fontSize: "2rem" }}
                    />
                    <p className="ms-2 mt-1">Company formation</p>
                  </div>
                  <div className=" d-flex">
                    <FaCircleCheck
                      style={{ color: "#7749B8", fontSize: "2rem" }}
                    />
                    <p className="ms-2 mt-1">Company formation</p>
                  </div>
                  <div className=" d-flex">
                    <FaCircleCheck
                      style={{ color: "#7749B8", fontSize: "2rem" }}
                    />
                    <p className="ms-2 mt-1">Share Certificate</p>
                  </div>
                  <div className=" d-flex">
                    <FaCircleCheck
                      style={{ color: "#7749B8", fontSize: "2rem" }}
                    />
                    <p className="ms-2 mt-1">Live chat with an expert</p>
                  </div>
                  <div className=" d-flex">
                    <FaCircleCheck
                      style={{ color: "#7749B8", fontSize: "2rem" }}
                    />
                    <p className="ms-2 mt-1">
                      Exclusive offers from our Banking
                    </p>
                  </div>
                  <div className=" d-flex">
                    <FaCircleCheck
                      style={{ color: "#7749B8", fontSize: "2rem" }}
                    />
                    <p className="ms-2 mt-1">Companies House fee included</p>
                  </div>
                  <div className=" d-flex">
                    <FaCircleCheck
                      style={{ color: "#7749B8", fontSize: "2rem" }}
                    />
                    <p className="ms-2 mt-1">Companies House fee included</p>
                  </div>
                  <div className=" d-flex">
                    <FaCircleCheck
                      style={{ color: "#7749B8", fontSize: "2rem" }}
                    />
                    <p className="ms-2 mt-1">
                      Registered Canadian office address
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-2 col-lg-2 col-xl-2"></div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
        <br />
          <h1 className="text-center text-dark">Customers Testimonials</h1>
          <br />
          <br />
          <br />
          <div className="text-center">
            <IoArrowBackCircleOutline style={{ fontSize: "4rem" }} />
            <IoArrowForwardCircleOutline style={{ fontSize: "4rem" }} />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div
              className="card shadow rounded-4 p-3"
              style={{
                backgroundColor: "#fff",
                border: "none",
                position: "relative",
              }}
            >
              <img
                src={financecardgirl}
                alt=""
                className="w-50"
                style={{
                  position: "absolute",
                  top: "-20%",
                  left: "20%",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                }}
              />
              <br />
              <br />
              <br />
              <p className="text-card fw-bold" style={{ fontSize: "1.1rem" }}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-0 fw-bold" style={{ fontSize: "1.1rem" }}>
                    Dianne Russell
                  </p>
                  <small className="text-muted" style={{ fontSize: "0.9rem" }}>
                    CEO, Let’s Connect
                  </small>
                </div>

                <div className="d-flex align-items-center">
                  <IoStar style={{ color: "gold", fontSize: "1.2rem" }} />
                  <IoStar style={{ color: "gold", fontSize: "1.2rem" }} />
                  <IoStar style={{ color: "gold", fontSize: "1.2rem" }} />
                  <IoStar style={{ color: "gold", fontSize: "1.2rem" }} />
                  <IoMdStarOutline
                    style={{ color: "silver", fontSize: "1.2rem" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div
              className="card shadow rounded-4 p-3"
              style={{
                backgroundColor: "#fff",
                border: "none",
                position: "relative",
              }}
            >
              <img
                src={financecardboy}
                alt=""
                className="w-50"
                style={{
                  position: "absolute",
                  top: "-20%",
                  left: "20%",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                }}
              />
              <br />
              <br />
              <br />
              <p className="text-card fw-bold" style={{ fontSize: "1.1rem" }}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-0 fw-bold" style={{ fontSize: "1.1rem" }}>
                    Pushpa kumar arora
                  </p>
                  <small className="text-muted" style={{ fontSize: "0.9rem" }}>
                    CEO, Let’s Connect
                  </small>
                </div>

                <div className="d-flex align-items-center">
                  <IoStar style={{ color: "gold", fontSize: "1.2rem" }} />
                  <IoStar style={{ color: "gold", fontSize: "1.2rem" }} />
                  <IoStar style={{ color: "gold", fontSize: "1.2rem" }} />
                  <IoStar style={{ color: "gold", fontSize: "1.2rem" }} />
                  <IoMdStarOutline
                    style={{ color: "silver", fontSize: "1.2rem" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div
              className="card shadow rounded-4 p-3"
              style={{
                backgroundColor: "#fff",
                border: "none",
                position: "relative",
              }}
            >
              <img
                src={financecardboy}
                alt=""
                className="w-50"
                style={{
                  position: "absolute",
                  top: "-20%",
                  left: "20%",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                }}
              />
              <br />
              <br />
              <br />
              <p className="text-card fw-bold" style={{ fontSize: "1.1rem" }}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-0 fw-bold" style={{ fontSize: "1.1rem" }}>
                    Pushpa kumar arora
                  </p>
                  <small className="text-muted" style={{ fontSize: "0.9rem" }}>
                    CEO, Let’s Connect
                  </small>
                </div>

                <div className="d-flex align-items-center">
                  <IoStar style={{ color: "gold", fontSize: "1.2rem" }} />
                  <IoStar style={{ color: "gold", fontSize: "1.2rem" }} />
                  <IoStar style={{ color: "gold", fontSize: "1.2rem" }} />
                  <IoStar style={{ color: "gold", fontSize: "1.2rem" }} />
                  <IoMdStarOutline
                    style={{ color: "silver", fontSize: "1.2rem" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
