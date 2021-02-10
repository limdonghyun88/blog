import React, { Fragment } from "react";
import { Container, Navbar, NavbarToggler, Collapse, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import LoginModal from "../components/auth/LoginModal";

const AppNavbar = () => {
  return (
    <Fragment>
      <Navbar color="dark" dark expand="lg" className="sticky-top">
        <Container>
          <Link to="/" className="text-white text-decoration-none">
            side project blog
          </Link>
        </Container>
        <NavbarToggler />
        <Collapse isOpen={true} navbar>
          <Nav className="m1-auto d-flex justify-content-around" navbar />
          {true ? <LoginModal /> : <h1 className="text-white">guestLink</h1>}
        </Collapse>
      </Navbar>
    </Fragment>
  );
};

export default AppNavbar;
