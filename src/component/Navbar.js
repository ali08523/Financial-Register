import React from 'react'
import Profile from '../Finances/Profile';
import FinanceBenefits from '../component/fFnanceBenefits';
import Financeabvout from '../financeabout/financeabout';
import Financeselling from '../financeselling/financeprice';
import About from '../pages/About';
import Financebusiness from "../component/financebusiness"
import Financesetup from "../component/financesetup"
import Financerepaid from "../component/financerepaid"
import '../App.css';

export default function Navbar() {
  return (
    <>
       <nav id="navbar-example2" class="navbar px-3 mb-3 fixed-top " style={{backgroundColor:"#07000e"}}>
    <a class="navbar-brand text-light" href="#">Navbar</a>
    <ul class="nav nav-pills mx-auto p-3">
      <li class="nav-item">
        <a class="nav-link about-text" href="#scrollspyHeading1">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link about-text text-light" href="#scrollspyHeading2">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link about-text text-light" href="#scrollspyHeading3">Expertise</a>
      </li>
      <li class="nav-item">
        <a class="nav-link about-text text-light" href="#scrollspyHeading4">Work Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link about-text text-light" href="#scrollspyHeading5">team</a>
      </li>
      <li class="nav-item">
         <a class="nav-link about-text text-light" href="#scrollspyHeading6">Testmonial</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light about-text" href="#scrollspyHeading7">Withdrawal Proof</a>
      </li>
    
    </ul>

<button type="button" class="btn btn-danger rounded-5" data-bs-toggle="modal" data-bs-target="#authModal">
  Login
</button>

<div class="modal fade" id="authModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="authModalLabel">Login</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <ul class="nav nav-tabs mb-3" id="authTabs">
          <li class="nav-item">
            <a class="nav-link active" id="login-tab" data-bs-toggle="tab" href="#login-form">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="signup-tab" data-bs-toggle="tab" href="#signup-form">Create Account</a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane fade show active" id="login-form">
            <form>
              <div class="mb-3">
                <label for="login-email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="login-email" placeholder="Enter your email" required />
              </div>
              <div class="mb-3">
                <label for="login-password" class="form-label">Password</label>
                <input type="password" class="form-control" id="login-password" placeholder="Enter your password" required />
              </div>
              <div class="form-check mb-3">
                <input type="checkbox" class="form-check-input" id="rememberMe" />
                <label class="form-check-label" for="rememberMe">Remember me</label>
              </div>
            </form>
          </div>

          <div class="tab-pane fade" id="signup-form">
            <form>
              <div class="mb-3">
                <label for="signup-name" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="signup-name" placeholder="Enter your name" required />
              </div>
              <div class="mb-3">
                <label for="signup-email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="signup-email" placeholder="Enter your email" required />
              </div>
              <div class="mb-3">
                <label for="signup-password" class="form-label">Password</label>
                <input type="password" class="form-control" id="signup-password" placeholder="Create a password" required />
              </div>
              <div class="mb-3">
                <label for="signup-confirm-password" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="signup-confirm-password" placeholder="Confirm your password" required />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>





  </nav>
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
  <h4 id="scrollspyHeading1"></h4>
  <Profile/>

  <h4 id="scrollspyHeading2"></h4>
      <Financeabvout/>
  
  <h4 id="scrollspyHeading3"></h4>
      <Financeselling/>
  
  <h4 id="scrollspyHeading4"></h4>
  <About/>

  <h4 id="scrollspyHeading5"></h4>
  <FinanceBenefits/>

  <h4 id="scrollspyHeading6"></h4>
  <Financebusiness/>

  <h4 id="scrollspyHeading7"></h4>
     <Financesetup/>
     <Financerepaid/>
  
  </div>

    </>
  )
}
