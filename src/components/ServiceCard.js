import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, price, description }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="card-body p-4 text-center">
        <h3 className="card-title h4">{title}</h3>
        <h6 className="text-muted mb-3">{price}</h6>
        <p className="card-text">{description}</p>
        <Link to="/book" className="btn btn-outline-secondary mt-2">
          Book Service
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
