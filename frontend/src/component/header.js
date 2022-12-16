import React from "react";

function Header(){
    return (
      <nav className="navbar navbar-expand-lg navbar-default bg-light">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">DAILY JOURNAL</a>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            <ul className="navbar-nav ">

              <li class="nav-item active" id="home"><a class="nav-link" aria-current="page" href="/">HOME</a></li>
              <li class="nav-item" id="compose"><a class="nav-link" href="/compose">COMPOSE</a></li>
              {/* <li class="nav-item" id="about"><a class="nav-link" href="/about">ABOUT US</a></li>
    <li class="nav-item" id="contact"><a class="nav-link" href="/contact">CONTACT US</a></li> */}
              <li class="nav-item" id="login"><a class="nav-link" href="/login">LOG IN</a></li>
              <li class="nav-item" id="login"><a class="nav-link" href="/signup">SIGN UP</a></li>
            </ul>
        </div>
      </nav>
    
    )
}
export default Header;