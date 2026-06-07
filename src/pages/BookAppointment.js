import React from "react";
import { useNavigate } from "react-router-dom";

const BookAppointment = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, API logic goes here.
    navigate("/confirmation");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 p-4">
            <h2 className="mb-4 text-center">Book an Appointment</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  placeholder="Michael Thompson"
                />
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label fw-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label fw-bold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="service" className="form-label fw-bold">
                  Service Needed
                </label>
                <select className="form-select" id="service" required>
                  <option value="">Select a service...</option>
                  <option value="oil">Oil Change</option>
                  <option value="brakes">Brake Repair</option>
                  <option value="tires">Tire Service</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <label htmlFor="date" className="form-label fw-bold">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="time" className="form-label fw-bold">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="time"
                    required
                  />
                  <div className="form-text-custom mt-1">
                    Operating hours: 8 AM - 6 PM
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary-custom w-100 py-2"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
