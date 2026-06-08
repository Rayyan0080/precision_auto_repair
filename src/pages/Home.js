import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [activeService, setActiveService] = useState(null);

  const serviceDetails = {
    oil: {
      name: "Oil Changes",
      description:
        "We safely lift your vehicle, drain the old, dirty engine oil, replace the oil filter, and refill the engine with high-quality synthetic or conventional oil to keep your engine running smoothly.",
    },
    brakes: {
      name: "Brake Repair",
      description:
        "We remove your wheels to inspect the brake pads, rotors, and calipers. We then replace worn-out pads and resurface or replace the rotors to ensure maximum stopping power and safety.",
    },
    tires: {
      name: "Tire Services",
      description:
        "We remove your old tires, mount the new ones onto your wheels, and use a computerized balancing machine to ensure a smooth ride. Finally, we align the wheels perfectly.",
    },
    diagnostics: {
      name: "Diagnostics",
      description:
        "We connect a specialized OBD-II scanner to your car's internal computer to pull exact error codes. Our master mechanics then physically inspect the flagged systems to pinpoint the exact issue.",
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
          <Link
            to="/book"
            className="btn btn-primary-custom btn-lg shadow-sm fw-bold"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {/* 2. Interactive Services Section */}
      <div className="container py-5 my-3">
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#003366" }}>
          Our Top Services
        </h2>
        <p className="text-center text-muted mb-4">
          Click a service to learn how it's done!
        </p>

        <div className="row g-3 text-center justify-content-center">
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

        {/* Dynamic Details Box */}
        {activeService && (
          <div className="row mt-4 justify-content-center">
            <div
              className="col-md-8 text-center p-4 bg-white rounded shadow border-top border-3"
              style={{ borderColor: "#ff6b00" }}
            >
              <h5 className="fw-bold" style={{ color: "#ff6b00" }}>
                {serviceDetails[activeService].name}
              </h5>
              <p className="mb-0 text-dark">
                {serviceDetails[activeService].description}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 3. Shop History Section */}
      <div className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-4" style={{ color: "#003366" }}>
            Our History
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <p className="lead text-muted">
                Founded right here in Ottawa, Precision Auto Repair started as a
                small two-bay garage with a simple mission: to provide honest,
                transparent, and high-quality vehicle maintenance for our local
                community. We treat every car as if it were our own.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. PERFECTED TEAM SECTION (High Contrast Cards) */}
      <div className="py-5" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: "#003366" }}>
            Meet Our Team
          </h2>
          <div className="row justify-content-center g-4 text-center">
            <div className="col-md-5">
              <div className="card shadow border p-4 h-100 bg-white">
                <div className="card-body">
                  <div className="display-4 mb-3">👨‍🔧</div>
                  <h4
                    className="card-title fw-bold"
                    style={{ color: "#003366" }}
                  >
                    John Smith
                  </h4>
                  <h6 className="card-subtitle mb-3 text-muted">
                    Lead Mechanic
                  </h6>
                  <p className="card-text text-dark">
                    Specializes in deep engine diagnostics and complex
                    mechanical repairs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card shadow border p-4 h-100 bg-white">
                <div className="card-body">
                  <div className="display-4 mb-3">👩‍💼</div>
                  <h4
                    className="card-title fw-bold"
                    style={{ color: "#003366" }}
                  >
                    Emily Brown
                  </h4>
                  <h6 className="card-subtitle mb-3 text-muted">
                    Service Advisor
                  </h6>
                  <p className="card-text text-dark">
                    Ensures you understand exactly what your car needs without
                    any confusing jargon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Simple Map & Contact Section */}
      <div className="bg-white py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4" style={{ color: "#003366" }}>
            Find Us
          </h2>
          <p className="fs-5 mb-1 text-dark">
            <strong>123 Main Street, Ottawa, ON K1A 0B1</strong>
          </p>
          <p className="fs-5 mb-4 text-dark">
            Call Us: <strong>613-555-1234</strong>
          </p>

          <div
            className="ratio ratio-21x9 shadow-sm rounded overflow-hidden mx-auto border"
            style={{ maxWidth: "800px" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Ottawa&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="Google Map Location"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
