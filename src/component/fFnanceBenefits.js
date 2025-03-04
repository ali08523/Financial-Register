import React, { Component } from 'react'
import financecardlogo from "../image/financecardlogo.png"
import financecardlogo1 from "../image/financecardlogo1.png"
import financereg1 from "../image/financereg1.png"
import { IoAddCircleSharp } from "react-icons/io5";
import financemanlogo1 from "../image/financemanlogo1.png"

export default class FinanceBenefits extends Component {
  questions = [
    "What specific steps does RGSTR handle as a company in Canada?",
    "How does RGSTR ensure the availability of a Ltd in Canada?",
    "What are the advantages of registering online with RGSTR?",
    "How long does registration take with RGSTR?",
    "Does RGSTR provide services after registration?",
    "What info is needed to check a company name with RGSTR?",
    "How secure is RGSTR’s online registration process?",
  ];

  render() {
    return (
      <>
        <div className="container">
            <div className="row">
                <h1 className='text-center mt-3 mb-4'>Our Benefits</h1>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div  className='rounded-4'
  style={{ 
    backgroundColor: "#F9F7FB", 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    textAlign: "center", 
    padding: "20px" 
  }}
>
  <img 
    src={financecardlogo} 
    alt="Finance Card Logo" 
  />
  <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#333", marginBottom: "10px" }}>
    Improving our services and products continuously
  </h2>
  <small style={{ fontSize: "1rem", color: "#666", lineHeight: "1.6" }}>
    We are a team of professionals that always strive to become better — as individuals, employees, business partners, and a company. Osome never stops seeking a faster and better-quality way to work.
  </small>
</div>

                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div   className='rounded-4'
  style={{ 
    backgroundColor: "#F9F7FB", 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    textAlign: "center", 
    padding: "20px" 
  }}
>
  <img 
    src={financecardlogo1} 
    alt="Finance Card Logo" 
  />
  <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#333", marginBottom: "10px" }}>
  Taking details into account
  </h2>
  <small className='mb-4' style={{ fontSize: "1rem", color: "#666", lineHeight: "1.6" }}>
    We are a team of professionals that always strive to become better — as individuals, employees, business partners, and a company. Osome never stops seeking a faster and better-quality way to work.
  </small>
</div>

                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div  className='rounded-4'
  style={{ 
    backgroundColor: "#F9F7FB", 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    textAlign: "center", 
    padding: "20px", 
  }}
>
  <img 
    src={financecardlogo} 
    alt="Finance Card Logo" 
  />
  <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#333", marginBottom: "10px" }}>
    Improving our services and products continuously
  </h2>
  <small style={{ fontSize: "1rem", color: "#666", lineHeight: "1.6" }}>
    We are a team of professionals that always strive to become better — as individuals, employees, business partners, and a company. Osome never stops seeking a faster and better-quality way to work.
  </small>
                  </div>

                </div>
            </div>
        </div>
        <br />
          <div className="container-fluid financebg4">
                <div className="row">
                  <div className="col-12 col-sm-4 col-md-2 col-lg-2 col-xl-2"></div>
                  <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                    <div className='text-center mt-5'>
                    <h1 className='text-center text-light'>Caring for teammates as we care for customers</h1>
                <small className='text-center text-light mt-5'>Registering your company in the Canada doesn’t have to be complicated. RGSTR can take care of the entire process online, allowing you to concentrate on growing your business. Begin by checking the availability of your Ltd company name today.</small>
                
                <button type="button" class="btn btn-danger tetx-light w-25 text-center rounded-5 p-3 mt-4" style={{backgroundColor:"#EC111A"}}>Get Started</button>
                <br />
                <br />
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 col-md-2 col-lg-2 col-xl-2"></div>
               
              
                </div>
                <div className="container">
                <div className="row">
                 <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                  <div className='p-3 text-center' style={{backgroundColor:"#FFFFFF",borderRadius:"30px 0px 0px 30px"}}>
                    <h1 className='ms-3 pt-4 mt-3 text-dark'>15,000+</h1>
                    <small className='ms-3 text-dark'>Clients worldwide</small>
                  </div>
                 </div>
                 <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="row" style={{backgroundColor:"#FFFFFF"}}>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div className='p-4 text-center' >
                    <h1 className='text-dark'>4,200</h1>
                    <small className='text-dark'>Companies we’ve <br /> helped to create</small>
                  </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div className='p-4 text-center' >
                    <h1 className='text-dark'>40</h1>
                    <small className='text-dark'>Hours freed up from admin work for our clients monthly</small>
                  </div>
                    </div>
                  </div>
                 
                 </div>
                 <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                  <div className='p-4 text-center' style={{backgroundColor:"#FFFFFF",borderRadius:"0px 30px 30px 0px"}}>
                    <h1 className='text-dark'>26,800</h1>
                    <small className='text-dark'>Documents received, tagged and processed monthly</small>
                  </div>
                 </div>
                  </div>
                </div>         
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="container pt-5">
  <div className="row">
    <h1 className="text-center mt-2 mb-4 text-dark" style={{ fontSize: '2rem', fontWeight: '700' }}>Frequently Asked Questions</h1>

    <div className="col-12 col-sm-6 col-md-5 col-lg-5 col-xl-5">
      <div className=" text-center">
        <img src={financereg1} alt="" className="img-fluid" />
      </div>
    </div>
    <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
            {this.questions.map((question, index) => (
              <div
                key={index}
                className="mt-3 d-flex align-items-center justify-content-between shadow-sm"
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "12px",
                  backgroundColor: "#ffffff",
                  padding: "15px",
                  transition: "box-shadow 0.3s ease",
                  marginBottom: "15px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <p
                  style={{
                    margin: 0,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontWeight: "600",
                    color: "#333",
                    fontSize: "1rem",
                    flexGrow: 1,
                  }}
                >
                  {question}
                </p>
                <IoAddCircleSharp
                  style={{
                    color: "#EC111A",
                    fontSize: "2.5rem",
                    cursor: "pointer",
                    transition: "transform 0.2s ease",
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText(question);
                    alert("Text copied: " + question); // Optional confirmation
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            ))}
          </div>
  </div>
                </div>
              </div>
             
      </>
    )
  }
}
