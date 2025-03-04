import React from 'react'
import financelogo from "../image/financethreelogo.png"
import financewoman from "../image/financewoman.png"
import financewomanlogo from "../image/financewomanlogo.png"
import financegroup from "../image/financegroup.png"
import financearrow1 from "../image/financearrow1.png"
import financesvg3 from "../image/financesvg3.png"
import financegroup1 from "../image/financegroup1.png"
import financerocket from "../image/financerocket.png"

export default function About() {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className='mt-5 pt-5'>
                <h1>About Register</h1>
                <br />
                <small className=''>Registering your company in the Canada doesn’t have to be complicated. RGSTR can take care of the entire process online, allowing you to concentrate on growing your business. Begin by checking the availability of your Ltd company name today.</small>
                </div>
               <div className='mt-5'>
               <img src={financelogo} alt="" />
               <small>1000+ Trusted Customers All Over Canada.</small>
               <h1 className="text-light fw-bold display-4 d-none d-md-block" style={{ fontSize: '9rem' }}>
               Being Register
                 </h1>
               </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 position-relative">
  <img src={financewoman} alt="Finance Woman" className="img-fluid" style={{ borderRadius: "15px" }} />
  
  <div className="d-flex align-items-center p-2 position-absolute bottom-0 start-50" style={{ width:"60%", backgroundColor: "white", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "110px" }}>
    <div className="me-3">
      <img src={financewomanlogo} alt="Finance Logo" className="img-fluid ms-2" style={{ maxWidth: "80px" }} />
    </div>
    <div>
      <p className="mb-1" style={{ fontSize: "1.1rem", fontWeight: "600" }}>
        From <span className="text-danger">RGSTR</span>
      </p>
      <small className="text-muted" style={{ fontSize: "0.9rem" }}>
        Congratulations! Your company is successfully registered now.
      </small>
    </div>
  </div>
</div>

        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
            <img src={financearrow1} alt="" className='w-75 ms-5 ps-5' />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <img src={financegroup} alt="" className='w-100'/>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3"></div>
        </div>
        <div className="row">
          <h1 className='text-center mt-2'>Our mission is to enable entrepreneurs to <br /> accelerate positive changes</h1>
           <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                   <div className='p-4'>
                   <img src={financesvg3} alt="" className='mt-5'/>
                      <h2>Building a better future for the entrepreneurs
                      </h2>
                      <p>We believe that in years entrepreneurs will know that administrative routine is not their job. They will not even consider taking it upon themselves. Osome stands for freedom from this routine and working to bring this future closer.</p>
                   </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <img src={financegroup1} alt="" className='w-100 mt-4'/>
                    </div>
        </div>
        <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <img src={financerocket} alt="" className='w-75 mt-5 pt-4'/>
                    </div>
           <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                   <div className='p-4'>
                   <img src={financesvg3} alt="" className=' mt-5'/>
                      <h2>Register a Canadian Business Now!
                      </h2>
                      <p>We believe that in years entrepreneurs will know that administrative routine is not their job. They will not even consider taking it upon themselves. Osome stands for freedom from this routine and working to bring this future closer.</p>
                   </div>
                    </div>
                  
        </div>
      </div>
    </>
  )
}
