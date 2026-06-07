import React from "react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="container py-5 text-center mt-5">
      <div
        className="col-md-8 mx-auto p-5 bg-white rounded shadow-sm border-top border-5"
        style={{ borderColor: "#ff6b00" }}
      >
        <h1 className="text-success mb-3">Appointment Confirmed!</h1>
        <p className="lead mb-4">
          Thank you for booking with Precision Auto Repair.
        </p>
        <p className="mb-5 text-muted">
          We have sent a confirmation email with your appointment details. We
          look forward to serving you.
        </p>
        <Link to="/" className="btn btn-outline-primary px-4 py-2">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
