import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // State to track which service the user wants to learn more about
  const [activeService, setActiveService] = useState(null);

  // Details for how each service is done
  const serviceDetails = {
    oil: {
      name: "Oil Changes",
      description:
        "How it's done: We safely lift your vehicle, drain the old, dirty engine oil, replace the oil filter, and refill the engine with high-quality synthetic or conventional oil to keep your engine running smoothly.",
    },
    brakes: {
      name: "Brake Repair",
      description:
        "How it's done: We remove your wheels to inspect the brake pads, rotors, and calipers. We then replace worn-out pads and resurface or replace the rotors to ensure maximum stopping power and safety.",
    },
    tires: {
      name: "Tire Services",
      description:
        "How it's done: We remove your old tires, mount the new ones onto your wheels, and use a computerized balancing machine to ensure a smooth ride. Finally, we align the wheels perfectly.",
    },
    diagnostics: {
      name: "Diagnostics",
      description:
        "How it's done: We connect a specialized OBD-II scanner to your car's internal computer to pull exact error codes. Our master mechanics then physically inspect the flagged systems to pinpoint the exact issue.",
    },
  };

  return (
    <div>
      {/* 1. Hero Section */}
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

      {/* 2. Interactive Services Section */}
      <div className="container py-5 my-4">
        <h2 className="text-center mb-4 fw-bold">Our Top Services</h2>
        <p className="text-center text-muted mb-5">
          Click a service to learn how we do it!
        </p>

        <div className="row g-4 text-center justify-content-center">
          {Object.keys(serviceDetails).map((key) => (
            <div className="col-md-3" key={key}>
              <button
                onClick={() => setActiveService(key)}
                className={`btn w-100 py-3 fw-bold shadow-sm ${activeService === key ? "btn-primary-custom" : "btn-light border"}`}
              >
                {serviceDetails[key].name}
              </button>
            </div>
          ))}
        </div>

        {/* Dynamic Service Description Display */}
        {activeService && (
          <div className="row mt-4 justify-content-center">
            <div
              className="col-md-8 text-center p-4 bg-white rounded shadow-sm border-top border-3"
              style={{ borderColor: "#ff6b00" }}
            >
              <h4 className="fw-bold" style={{ color: "#ff6b00" }}>
                {serviceDetails[activeService].name}
              </h4>
              <p className="mb-0 fs-5">
                {serviceDetails[activeService].description}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 3. Shop History Section */}
      <div className="bg-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our History</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <p className="lead">
                Founded right here in Ottawa, Precision Auto Repair started as a
                small two-bay garage with a simple mission: to provide honest,
                transparent, and high-quality vehicle maintenance for our local
                community. Over the years, we have grown into a state-of-the-art
                facility, but our core values remain exactly the same. We treat
                every car as if it were our own.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Meet The Team Section */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">Meet Our Team</h2>
        <div className="row justify-content-center g-4 text-center">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 h-100">
              <div className="display-1 text-muted mb-3">👨‍🔧</div>
              <h4 className="fw-bold">John Smith</h4>
              <h6 className="text-muted mb-3">Lead Mechanic</h6>
              <p>
                With over 15 years of experience, John specializes in deep
                engine diagnostics and complex mechanical repairs.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 h-100">
              <div className="display-1 text-muted mb-3">👩‍💼</div>
              <h4 className="fw-bold">Emily Brown</h4>
              <h6 className="text-muted mb-3">Service Advisor</h6>
              <p>
                Emily ensures you understand exactly what your car needs without
                any confusing jargon or high-pressure sales.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Map & Location Section */}
      <div className="bg-white py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Find Us</h2>
          <div className="row align-items-center">
            <div className="col-md-5 mb-4 mb-md-0 text-center text-md-start">
              <h4 className="fw-bold">Precision Auto Repair</h4>
              <p className="fs-5 mb-1">123 Main Street</p>
              <p className="fs-5 mb-4">Ottawa, ON K1A 0B1</p>

              <h5 className="fw-bold">Hours of Operation:</h5>
              <p className="mb-0">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="mb-0">Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>

              <p className="mt-4 fw-bold fs-5">Call Us: 613-555-1234</p>
            </div>
            <div className="col-md-7">
              {/* Google Maps Embed Placeholder */}
              <div className="ratio ratio-16x9 shadow-sm rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11200.730337375253!2d-75.70425315124037!3d45.42472147171497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04ff4fe494ef%3A0x26bb54f60c29f6e!2sParliament%20Hill!5e0!3m2!1sen!2sca!4v1680000000000!5m2!1sen!2sca"
                  title="Google Map Location"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
