import React from "react";
import myLogo from "/assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="foot-container">
      <footer>
        <div className="d-flex flex-row justify-content-center align-items-center mt-3">
          <img src={myLogo} alt="battle bots logo" className="imgStyle" />

          <div className="text-content">
            <div>
              Feel free to reach out to me directly.
              <br />
              <hr className="bg-secondary d-inline-block mb-4" />
              Email: alexan2863@gmail.com <br />
              Phone: (801) 940-4758
            </div>
          </div>
        </div>

        <div className="footer-bottom pt-5 pb-5">
          <div className="container">
            <div className="row text-center text-white">
              <div className="col-12">
                <div className="footer-bottom__copyright">
                  © Copyright 2024 | Created by Alex Powell
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
