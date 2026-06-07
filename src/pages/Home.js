import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary-custom text-center py-5 text-white">
        <div className="container py-5">
          <h1 className="display-4 fw-bold text-white mb-3">
            Reliable Automotive Care You Can Trust
          </h1>
          <p className="lead mb-4 footer-text">
            Professional service for all makes and models in Ottawa.
          </p>
          <Link to="/book" className="btn btn-primary-custom btn-lg shadow-sm">
            Book Appointment Today
          </Link>
        </div>
      </div>

      {/* Quick Services */}
      <div className="container py-5 my-4">
        <h2 className="text-center mb-5">Our Top Services</h2>
        <div className="row g-4 text-center">
          <div className="col-md-3">
            <div className="p-4 bg-white rounded shadow-sm">
              <h5>Oil Changes</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-4 bg-white rounded shadow-sm">
              <h5>Brake Repair</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-4 bg-white rounded shadow-sm">
              <h5>Tire Services</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-4 bg-white rounded shadow-sm">
              <h5>Diagnostics</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
