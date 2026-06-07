import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary-custom py-4 mt-auto">
      <div className="container text-center footer-text">
        <h5>Precision Auto Repair</h5>
        <p className="mb-1">
          123 Main Street, Ottawa, ON | Phone: 613-555-1234 | Email:
          info@precisionauto.ca
        </p>
        <p className="mb-0 mt-3" style={{ fontSize: "0.9rem" }}>
          Designed by Rayyan Omar &copy; 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
