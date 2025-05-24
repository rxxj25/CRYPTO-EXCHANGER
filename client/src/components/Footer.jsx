import React from 'react';
import logo from '../../images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="logo" className="footer-logo" />
        </div>
        <div className="footer-right">
          <p className="footer-link">Market</p>
          <p className="footer-link">Exchange</p>
          <p className="footer-link">Tutorials</p>
          <p className="footer-link">Wallets</p>
        </div>
      </div>

      <div className="footer-middle">
        <p className="footer-join">
          Come join us and hear for the unexpected miracle&nbsp;
          <a href="mailto:rajdeep04@icloud.com" className="footer-email">rajdeep04@icloud.com</a>
        </p>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>All rights are reserved 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
