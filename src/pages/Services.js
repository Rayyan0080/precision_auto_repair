import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="modern-theme min-vh-100 py-5">
      <div className="container">
        <h1 className="mb-4 text-center fw-bold">Our Services & Pricing</h1>
        <p className="text-center mb-5 col-md-8 mx-auto">
          We offer transparent pricing and comprehensive care. Find the service
          that fits your vehicle's needs.
        </p>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <ServiceCard
              title="Oil Change"
              price="Starting at $59.99"
              description="Keep your engine running smoothly with our premium oil and filter changes."
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <ServiceCard
              title="Brake Repair"
              price="Inspection & Replacement"
              description="Ensure your safety with thorough brake pad and rotor replacements."
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <ServiceCard
              title="Tire Services"
              price="Rotation & Replacement"
              description="Seasonal tire changes, balancing, and alignments for optimal handling."
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <ServiceCard
              title="Diagnostics"
              price="Computerized Testing"
              description="Check engine light on? We diagnose and identify issues quickly."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
