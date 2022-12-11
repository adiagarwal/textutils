import Proptypes from 'prop-types'
import React from 'react';
//import {Link} from 'react-router-dom'
export default function Nav(props) {
  return (
       <nav className ={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">{props.about}</a>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
        <input className="form-check-input" type="checkbox" onClick = {props.toggle} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" for="flexSwitchCheckDefault">{props.mode === 'dark' ? 'TurnOff' : 'DarkMode'}</label>
      </div>
    </div>
  </div>
</nav>
  );
}

Nav.propTypes = {title: Proptypes.string.isRequired , about:Proptypes.string.isRequired}
Nav.defaultProps = {
    title : "Set Title Here!",
    about : "Set About Here!"
}