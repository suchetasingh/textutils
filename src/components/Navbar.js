import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button> */}
              <div
                className="btn-group mx-3"
                role="group"
                aria-label="Basic radio toggle button group "
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autoComplete="off"
                  // checked
                  onClick={props.gColor}
                />
                <label
                  className="btn btn-outline-primary"
                  htmlFor="btnradio1"
                  style={{ backgroundColor: "green", color: "white" }}
                >
                  Green
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autoComplete="off"
                  onClick={props.rColor}
                />
                <label
                  className="btn btn-outline-primary"
                  htmlFor="btnradio2"
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  Red
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio3"
                  autoComplete="off"
                  onClick={props.bColor}
                />
                <label
                  className="btn btn-outline-primary"
                  htmlFor="btnradio3"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Black
                </label>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleSwitch}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable dark mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };
