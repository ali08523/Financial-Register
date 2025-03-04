import React from 'react'
import financeworker from "../image/financeworker.png"
import financesvg from "../image/financesvg.png"
import financesvg1 from "../image/financesvg1.png"
import financesvg2 from "../image/financesvg2.png"
import financework from "../image/financework.png"
import financesvg3 from "../image/financesvg3.png"
import financework1 from "../image/financework1.png"
import financework2 from "../image/financework2.png"
export default function financeabout() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <img src={financeworker} alt="" className='w-100' />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <p>Who we help?</p>
            <h1>Register Your Company in Three <span  style={{color:"#EC111A"}}>Easy Steps</span></h1>
            <br />
            <br />
            <div className='d-flex'>
            <div>
              <img src={financesvg} alt="" />
            </div>
            <div className='ms-3'>
              <h6>Choose Your Package</h6>
              <p>Start with what you need right now & Add specialist services later as you grow.</p>
            </div>
            </div>
            <br />
            <br />
            <div className='d-flex'>
            <div>
              <img src={financesvg1} alt="" />
            </div>
            <div className='ms-3'>
              <h6>Submit Your Deatils</h6>
              <p>We’ll update do what documents do you need to provide for registration.</p>
            </div>
            </div>
            <br />
            <br />
            <div className='d-flex'>
            <div>
              <img src={financesvg2} alt="" />
            </div>
            <div className='ms-3'>
              <h6>Get Confirmation & Paper work</h6>
              <p>Receive you certificate of incorporation & key company documents. It’s that simple.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <h1 className='text-center'>Feel fully in control of your <br /> business finances</h1>
        
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
         <div className='p-4 mt-5'>
         <img src={financesvg3} alt="" className='mt-5'/>
            <h2>Experts on <br /> your side</h2>
            <p>We believe that in years entrepreneurs will know that administrative routine is not their job. They will not even consider taking it upon themselves. Osome stands for freedom from this routine and working to bring this future closer.</p>
         </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <img src={financework} alt="" className='w-100 mt-3'/>
          </div>
        </div>
        <br />
        <div className="row">        
         
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <img src={financework1} alt="" className='w-100 mt-3'/>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
         <div className='p-4 mt-5'>
         <img src={financesvg3} alt="" className='mt-5'/>
            <h2>Get clear on <br /> cash flow</h2>
            <p>We believe that in years entrepreneurs will know that administrative routine is not their job. They will not even consider taking it upon themselves. Osome stands for freedom from this routine and working to bring this future closer.</p>
         </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">        
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
         <div className='p-4 mt-5'>
         <img src={financesvg3} alt="" className='mt-5'/>
            <h2>Pay the <br /> right tax</h2>
            <p>We believe that in years entrepreneurs will know that administrative routine is not their job. They will not even consider taking it upon themselves. Osome stands for freedom from this routine and working to bring this future closer.</p>
         </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <img src={financework2} alt="" className='w-100 mt-3'/>
          </div>
          
        </div>
      </div>
    </>
  )
}
