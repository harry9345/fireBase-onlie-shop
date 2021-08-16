import React from "react";
import classes from "../App.module.css";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Nav className={classes.navbar}>
      <Nav.Item className={classes.navItem}>
        <NavLink to="/">Shop</NavLink>
      </Nav.Item>
      <Nav.Item className={classes.navItem}>
        <NavLink to="/checkout">Check Out</NavLink>
      </Nav.Item>
    </Nav>
  );
}
