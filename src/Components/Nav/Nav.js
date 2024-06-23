


import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css";
// import { FormConsumer } from '../Context/context';

class NavBar extends Component {
  render() {
    const { formData, handleApprove } = this.props; // Assuming handleApprove is a prop function
    console.log(formData)
    return (
      // <FormConsumer>
      <Navbar expand="lg" className="navbar-custom justify-content-between">
        <Container style={{ marginLeft: "0px" }}>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="navbar-content">
                <div>
                  <span className="navbar-item">Currency :<span className="currency"> INR</span></span>&nbsp;&nbsp;
                  <span className="navbar-item">Inv Basic Amt :<span> 15,000.00</span></span>&nbsp;&nbsp;
                  <span className="navbar-item">Basic Tax Amt :<span> 1,000.00</span></span>&nbsp;&nbsp;
                  <span className="navbar-item">Inv Total Amt :<span> 16,000.00</span></span>&nbsp;&nbsp;
                  <span className="navbar-item">TDS Amt :<span> 15.00</span></span>&nbsp;&nbsp;
                  <span className="navbar-item">Net Payable Amt :<span> 16,000.00</span></span>&nbsp;&nbsp;
                  <span className="navbar-item">Basic Amt Diff:<span className="diff"> NA</span></span>&nbsp;&nbsp;
                </div>
                <div className="navbar-actions">
                  <select type='select' defaultValue="Select Action">
                    <option value="select">Select Action</option>
                  </select>
                  <button className="btn btn-reject">Reject</button>
                  <button className="btn btn-approve" onClick={handleApprove}>Approve</button>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      // </FormConsumer>
    );
  }
}

export default NavBar;
























