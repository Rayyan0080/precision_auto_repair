import React from "react";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-custom navbar-dark py-3">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          Precision Auto Repair
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/book" className="btn btn-primary-custom ms-3">
                Book Appointment
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
