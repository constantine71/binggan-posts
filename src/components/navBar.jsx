import React, { Component } from "react";
import "wired-button";
import "wired-divider";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Link to="/">Lovers</Link>
        <NavLink to="/home">
          <wired-button elevation="1">HOME</wired-button>
        </NavLink>
        <NavLink to="/about">
          <wired-button elevation="2">ABOUT</wired-button>
        </NavLink>
        <NavLink to="/contact">
          <wired-button elevation="3">CONTACT</wired-button>
        </NavLink>
        <wired-divider style={{ margin: 20 }}></wired-divider>
      </div>
    );
  }
}

export default NavBar;
