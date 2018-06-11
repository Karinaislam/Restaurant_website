import React, { Component } from "react";
import "./Header.css";
import "../OrderSummary/OrderSummary";

import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import MenuItem from "react-bootstrap/lib/MenuItem";
import NavDropdown from "react-bootstrap/lib/NavDropdown";

import { Link } from "react-router-dom";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <Navbar className="navbar" fixedTop={true} inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/" className="brandName" onClick={this.handleClose}>
                Cozy Restaurant
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/about" onClick={this.handleClose}>
                About Us
              </NavItem>
              
              <NavItem eventKey={2} href="/menu">
                Menu
              </NavItem>
              <NavItem eventKey={2} href="https://www.seamless.com/menu/cozy-noodles--rice-1018-davis-st-evanston/597?utm_source=google&utm_medium=organic&utm_campaign=place-action-link">
                Online Order
              </NavItem>
              {/* <NavItem eventKey={2} href="#">
                Gallery
              </NavItem>{" "} */}
              <NavItem eventKey={2} href="/about">
                Contact
              </NavItem>
            </Nav>

            <Nav pullRight>
            <NavItem eventKey={1} href="#">
            <span>Cart Size: {this.props.cartLength}</span>
      </NavItem>
              <NavItem eventKey={2} href="#">
              <Link to="../OrderSummary">
              
  <span class="glyphicon glyphicon-shopping-cart cart_color" aria-hidden="false"> </span>

</Link>     </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>;
      </div>
    );
  }
}

export default Header;
