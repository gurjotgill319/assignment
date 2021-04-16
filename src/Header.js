import React, { Component } from "react";

class Header extends Component
{
    render()
    {
        return(
<div>
            <header>
  <div className="collapse bg-dark" id="navbarHeader">
    <div className="container">
      <div className="row">
        <div className="col-sm-10 col-md-10 py-4">
          <h4 className="text-white">About SCP pages</h4>
          <p className="text-muted">SCP stands for Secure, Contain and Protect. The website is full of hundreds of crowd-sourced entries about objects and strange entities that violate natural law.</p>
        </div>
        
      </div>
    </div>
  </div>
  <div className="navbar navbar-dark bg-dark shadow-sm">
    <div className="container">
      <p href="#" className="navbar-brand d-flex align-items-center">
        <strong> Homepage</strong>
      </p>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>
<section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-8 col-md-6 mx-auto">
        <h1 className="fw-strong">SCP - (Special Containment Procedures)</h1>
      </div>
    </div>
  </section>
</div>

        );
    }
}

export default Header;