import React, { Component } from 'react'
import financeimg from "../image/financeimg.png"
import financeimglogo from "../image/financeimglogo.png"
import financelogo from '../image/financelogo.png';
import { RiArrowRightUpLine } from "react-icons/ri";
import financecardimg from "../image/financecardimg.png"
import financecardimg1 from "../image/financecardimg1.png"
import financecardimg2 from "../image/financecardimg2.png"
import financecardimg3 from "../image/financecardimg3.png"
export default class financesetup extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
                     <div className="col-6">
                         <div className='mt-5 pt-5'>
                         <h1>Register a <span className='text-danger'>Canadian <br /> Business</span> Now!</h1>
                         <br />
                         <small className=''>Registering your company in the Canada doesn’t have to be complicated. RGSTR can take care of the entire process online, allowing you to concentrate on growing your business. Begin by checking the availability of your Ltd company name today.</small>
                         </div>
                         <div>
                          <br />
                          <small>
                          Any company name you have in mind
                          </small>
                          <br />
                          <br />
                          <div className="input-group flex-nowrap">
  {/* Input Field */}
  <input 
    type="text" 
    className="form-control rounded-start-4 p-3" 
    placeholder="RGSTR is Awesome LTD" 
    aria-label="Search Query" 
    aria-describedby="search-button" 
  />

  {/* Search Button */}
  <button 
    type="button" 
    className="btn btn-danger text-light rounded-end-4 px-4" 
    id="search-button"
  >
    Search <RiArrowRightUpLine />
  </button>
</div>


                           <div className='mt-5'>
                          <img src={financelogo} alt="" /> <small>1000+ Trusted Customers All Over Canada.</small>   
                          </div>
                         </div>
                      
                     </div>
                     <div className="col-6 position-relative">
  {/* Main Image */}
  <img 
    src={financeimg} 
    alt="Finance Woman" 
    className="img-fluid rounded-3" 
  />

  {/* Overlay Section */}
  <div 
    className="d-flex align-items-center position-absolute bottom-0 ms-3 p-2" 
    style={{
      width: "60%",
      backgroundColor: "#fff",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      borderRadius: "50px",
    }}
  >
    {/* Logo */}
    <img 
      src={financeimglogo} 
      alt="Finance Logo" 
      className="img-fluid me-3 ms-2" 
      style={{ maxWidth: "80px" }} 
    />

    {/* Text Content */}
    <div>
      <p 
        className="mb-1 text-dark fw-bold" 
        style={{ fontSize: "1.1rem" }}
      >
        From <span className="text-danger">RGSTR</span>
      </p>
      <small 
        className="text-muted" 
        style={{ fontSize: "0.9rem" }}
      >
        Congratulations! Your company is successfully registered now.
      </small>
    </div>
  </div>
                     </div>

         
                 </div>
        </div>
        <br />
        <div className="container-fluid financebgcolor">
          <div className="container">
          <div className="row text-dark">
            <div className='text-center mt-4'>
              <small className='text-light'>What do you Get ?</small>
              <h1 className='text-light'>Register your company online <br /> with <span style={{color:"gold"}}>RGSTR</span></h1>
            </div>
            <div className="col-3">
              <div className='rounded-4 p-3' style={{backgroundColor:"#FFFFFF"}}>
                <img src={financecardimg} alt="" className='w-25'/>
                <h6 className='mt-3'>Access to experts</h6>
                <small>Register your limited company with us and a dedicated business expert will always be at hand, via live chat or over the phone.</small>
              </div>
            </div>
            <div className="col-3">
              <div className='rounded-4 p-3' style={{backgroundColor:"#FFFFFF"}}>
                <img src={financecardimg1} alt="" className='w-25'/>
                <h6 className='mt-3'>Effortless process</h6>
                <small>Register your limited company with us and a dedicated business expert will always be at hand, via live chat or over the phone.</small>
              </div>
            </div>
            <div className="col-3">
              <div className='rounded-4 p-3' style={{backgroundColor:"#FFFFFF"}}>
                <img src={financecardimg2} alt="" className='w-25'/>
                <h6 className='mt-3'>Provide Help</h6>
                <small>Register your limited company with us and a dedicated business expert will always be at hand, via live chat or over the phone.</small>
              </div>
            </div>
            <div className="col-3">
              <div className='rounded-4 p-3' style={{backgroundColor:"#FFFFFF"}}>
                <img src={financecardimg3} alt="" className='w-25'/>
                <h6 className='mt-3'>Centralized Storage</h6>
                <small>Register your limited company with us and a dedicated business expert will always be at hand, via live chat or over the phone.</small>
              </div>
            </div>
          </div>
          </div>
          
        </div>
        <br />
      
      </>
    )
  }
}

