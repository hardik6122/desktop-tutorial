import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";



export default function Navbar1(props) {
   
  
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${
          props.dark === "light" ? "dark" : "light"
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
                <Link className="nav-link active" aria-current="page" to='/'>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <div className="form" style={{display:props.mode === 'dark'?'block':'none',}}>
              <input
                className="form-check-input me-1 bg-dark"
                type="radio"
                name="flexRadioDefault"
                id="black"
                onClick={props.black}
                
              />
              <input
                className="form-check-input me-1 bg-success"
                type="radio"
                name="flexRadioDefault"
                id="green"
                onClick={props.green}
                
              />
              <input
                className="form-check-input me-1 bg-danger"
                type="radio"
                name="flexRadioDefault"
                id="red"
                onClick={props.red}
              />
              <input
                className="form-check-input me-1 bg-primary"
                type="radio"
                name="flexRadioDefault"
                id="blue"
                onClick={props.blue}
              
              />
            </div>
            <span className="form-check form-switch ">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.dmode}
              />
              <label
                className={`form-check-label me-2 text-${props.dark}`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.dark + " Mode"}
              </label>
            </span>

            <form className="d-flex" role="search">
              <input
                className={`form-control me-2 bg-${props.mode} text-${
                  props.dark === "light" ? "light" : "dark"
                } `}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>

  )
  
};





Navbar1.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string.isRequired,
};
Navbar1.defaultProps = {
  title: "hardik",
};
