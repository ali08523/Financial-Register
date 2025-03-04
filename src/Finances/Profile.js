import React from 'react'
import financeman from "../image/finance-man.png"
import financemanlogo from "../image/financemanlogo.png"
import financecard1 from "../image/finance-card1.png"
import financecard2 from "../image/financecard2.png"
import financecard3 from "../image/financecard3.png"
import financeidea from "../image/financeidea.png"
import '../App.css';

export default function Profile() {
  return (
    <>
    <br />
      <div className="container">
        <div className="row">
            <div className="col-12 col-sm-6 col-md-5 col-lg-5 col-xl-5">
           <div className='p-3'>
           <small>Accounting</small>
                <h1 style={{fontSize:"49px"}}> Your <span style={{color:"#EC111A"}}>finances</span> <br /> sorted with all-in- <br />one accounting services</h1>
                <small>Free yourself from financial admin. Our dedicated experts and easy-to-use tools make managing your money easier.</small>
                <br />
                <br />
                <br />
                <button type="button" class="btn btn-danger rounded-5">Get Started</button>
                <button type="button" class="btn btn-outline-danger rounded-5 ms-2">Pricing</button>
           </div>
            </div>
            <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <img src={financeman} alt="" className=' rounded-4'/>
            </div>
        </div>
      </div>
      <img src={financemanlogo} alt="Finance Man Logo" className="financemanlogo img-fluid" />
      <br />
      <div className="container-fluid financebg">
        <div className="row">
        <small className='text-center text-light mt-5'>What you get</small>
        <h1 className='text-center text-light'>Total visibility and control over <br /> your finances</h1>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <div className="rounded-4 p-3 d-flex flex-column align-items-center"
        style={{ backgroundColor: "white" }}>
       <img src={financecard1} alt="" className="mb-3 mt-4" />
       <h3 className="text-center text-dark">Dedicated <br /> accountant</h3>
       <small className="text-center mb-4 text-dark">
       Your dedicated accountant is on-call through live chat and responds within 24 hours.
        </small>
        </div>
       </div>

       <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <div className="rounded-4 p-3 d-flex flex-column align-items-center"
        style={{ backgroundColor: "white" }}>
       <img src={financecard2} alt="" className="mb-3 mt-4" />
       <h3 className="text-center text-dark">Easy-to-use  <br /> software</h3>
       <small className="text-center mb-1 text-dark">
       Our financial tools give you control, automating invoicing, payments, and expenses with real-time cash flow insight.
        </small>
        </div>
       </div>
       <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <div className="rounded-4 p-3 mb-3 d-flex flex-column align-items-center"
        style={{ backgroundColor: "white" }}>
       <img src={financecard3} alt="" className="mb-3 mt-4" />
       <h3 className="text-center text-dark">Unlimited  <br /> bookkeeping</h3>
       <small className="text-center text-dark">
       Bookkeeping is part of your package. We'll take care of your financial records, taxes, transaction matching, and billing.
        </small>
        </div>
       </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
           
                <div className='p-5'>
                <h2 className='mt-5 text-dark'>Switching to <br /> Register is simple</h2>
                <small className='text-dark'>Registering your company in the Canada doesn’t have to be  complicated. <br /> RGSTR can take care of the entire process online, allowing you to concentrate  <br />  on growing your  business. Begin by checking the availability of your Ltd <br /> company name today.</small>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <img src={financeidea} alt="" className='w-100 mb-0'/>
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
    </>
  )
}
