import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";

import { Navbar } from "react-bootstrap";
import Logo from "../assets/logo.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Weather from "./Weather";

function AppNavbar() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="d-"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Weather />
            <Nav className="me-auto">
              <NavLink
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                className="s navBtn p-2 m-3 border border-white rounded-3"
                to="/"
              >
                Ana Sayfa
              </NavLink>
              <NavLink
                className="s navBtn p-2 m-3 border border-white rounded-3"
                to="about"
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Hakkımızda
              </NavLink>

              <NavLink
                className="navBtn p-2 m-3 border border-white rounded-3 "
                to="contact"
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                iletişim
              </NavLink>
            </Nav>
            <Nav>
              <NavLink
                className="navLink navBtn p-2 m-3 border border-white rounded-3"
                to={-1}
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Geri
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default AppNavbar;
