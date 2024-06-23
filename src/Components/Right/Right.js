




import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./style.css";
import axios from "axios";


class Rightform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        Alternate_Payee_1: '',
        Alternate_Payee_2: '',
        City: '',
        Street: '',
        Country: '',
        Bank_ifsc_code: '',
        Bank_Acc_No: '',
        Reference: '',
      },
      errors: {},
      successMessage: '',
      errorMessage: '',
    };
    // props.handleSubmitRef(this.handleSubmit); // Call handleSubmitRef from props
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };


  validateForm = () => {
    const { formData } = this.state;
    let errors = {};
    let formIsValid = true;

    // Check for required fields
    if (!formData.Alternate_Payee_1) {
      formIsValid = false;
      errors['Alternate_Payee_1'] = 'Alternate Payee 1 is required';
    }

    if (!formData.City) {
      formIsValid = false;
      errors['City'] = 'City is required';
    }

    if (!formData.Street) {
      formIsValid = false;
      errors['Street'] = 'Street is required';
    }

    if (!formData.Country) {
      formIsValid = false;
      errors['Country'] = 'Country is required';
    }

    if (!formData.Bank_ifsc_code) {
      formIsValid = false;
      errors['Bank_ifsc_code'] = 'Bank IFSC Code is required';
    }

    if (!formData.Bank_Acc_No) {
      formIsValid = false;
      errors['Bank_Acc_No'] = 'Bank Account Number is required';
    }

    this.setState({ errors });
    return formIsValid;
  };
  handleSubmit(event) {
    event.preventDefault();
    const data = this.state;

    console.log("Form data submitted: ", data);
    
    axios.post('http://localhost:8080/postdata', data.formData)
      .then(response => {
        console.log("Data sent successfully: ", response);
        // Handle success response
      })
      .catch(error => {
        console.error("Error occurred while sending the data: ", error);
        // Handle error response
      });
  }

 

  
  render() {
    console.log(this.state.formData)
    return (
      <>
        <div className="contents">
          <div className="div">
            <span style={{ color: "purple", fontWeight: "bold" }}>Invoice Details</span>
            <span>Action History</span>
          </div>
          <br />
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>INVOICE AMOUNT DETAILS</Accordion.Header>
              <Accordion.Body>
                <Form >
                  <Form.Group className="form-group" controlId="formGroupCurrency">
                    <Form.Label>Currency<span style={{ color: "red" }}>★</span>:</Form.Label>
                    <Form.Select defaultValue="INR">
                      <option value="INR">INR - Indian Rupee</option>
                      <option value="RUB">RUB - Russian Ruble</option>
                      <option value="USD">USD - US Dollar</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="GBP">GBP - British Pound</option>
                      <option value="AUD">AUD - Australian Dollar</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="form-group" controlId="formGroupBasicAmount">
                    <Form.Label>Inv Basic Amt<span style={{ color: "red" }}>★</span>:</Form.Label>
                    <Form.Control type="number" defaultValue="15000.00" />
                  </Form.Group>
                  <Form.Group className="form-group" controlId="formGroupTaxAmount">
                    <Form.Label>Inv Tax Amt<span style={{ color: "red" }}>★</span>:</Form.Label>
                    <Form.Control type="number" defaultValue="1000.00" />
                  </Form.Group>
                  <Form.Group className="form-group" controlId="formGroupTotalAmount">
                    <Form.Label>Total Inv Amt [Inclu.of tax]<span style={{ color: "red" }}>★</span>:</Form.Label>
                    <Form.Control type="number" defaultValue="16000.00" />
                  </Form.Group>
                  <Form.Group className="form-group" controlId="formGroupAdvancePaid">
                    <Form.Label>Advance Paid<span style={{ color: "red" }}>★</span>:</Form.Label>
                    <Form.Control type="number" defaultValue="0.00" />
                  </Form.Group>
                  <Form.Group className="form-group radio-group" controlId="formGroupTCS">
                    <Form.Label>TCS Applicable<span style={{ color: "red" }}>★</span>:</Form.Label>
                    <div>
                      <Form.Check type="radio" label="Yes" name="tcsApplicable" id="tcsYes" value="yes" />
                      <Form.Check type="radio" label="No" name="tcsApplicable" id="tcsNo" value="no" />
                    </div>
                  </Form.Group>
                  <Form.Group className="form-group" controlId="formGroupNetPayable">
                    <Form.Label>Net Payable Amt [Exclu.of TDS]<span style={{ color: "red" }}>★</span>:</Form.Label>
                    <Form.Control type="number" defaultValue="16000.00" />
                  </Form.Group>
                </Form >
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>ALTERNATE PAYEE DETAILS</Accordion.Header>
              <Accordion.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group className="form-group" controlId="formGroupAltPayee1">
                    <Form.Label>Alternate Payee 1:</Form.Label>
                    <Form.Control type="text" name="Alternate_Payee_1" value={this.state.formData?.Alternate_Payee_1} onChange={this.handleChange} />
                  </Form.Group>
                  <Form.Group className="form-group" controlId="formGroupAltPayee2">
                    <Form.Label>Alternate Payee 2:</Form.Label>
                    <Form.Control type="text" name="Alternate_Payee_2" value={this.state.formData?.Alternate_Payee_2} onChange={this.handleChange} />
                  </Form.Group>
                  <Form.Group className="form-group" controlId="formGroupCity">
                    <Form.Label>City:</Form.Label>
                    <Form.Control type="text" name="City" value={this.state.formData.City} onChange={this.handleChange} />
                  </Form.Group>
                  <Form.Group className="form-group" controlId="formGroupStreet">
                    <Form.Label>Street:</Form.Label>
                    <Form.Control type="text" name="Street" value={this.state.formData.Street} onChange={this.handleChange} />
                  </Form.Group>
                  <Form.Group className="form-group" controlId="formGroupCountry">
                    <Form.Label>Country:</Form.Label>
                    <Form.Control type="text" name="Country" value={this.state.formData.Country} onChange={this.handleChange} />
                  </Form.Group>
                  <Form.Group className="form-group" controlId="formGroupBankKey">
                    <Form.Label>Bank Key/IFSC Code:</Form.Label>
                    <Form.Control type="text" name="Bank_ifsc_code" value={this.state.formData.Bank_ifsc_code} onChange={this.handleChange} />
                  </Form.Group>
                  <Form.Group className="form-group" controlId="formGroupBankAccNo">
                    <Form.Label>Bank Acc No:</Form.Label>
                    <Form.Control type="text" name="Bank_Acc_No" value={this.state.formData.Bank_Acc_No} onChange={this.handleChange} />
                  </Form.Group>
                  <Form.Group className="form-group" controlId="formGroupReference">
                    <Form.Label>Reference:</Form.Label>
                    <Form.Control type="text" name="Reference" value={this.state.formData.Reference} onChange={this.handleChange} />
                  </Form.Group>
                  <button type="submit" style={{backgroundColor:"purple",color:"white"}}>Approve</button>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>LINE ITEMS DETAILS</Accordion.Header>
              <Accordion.Body>
                <Row className="mb-3">
                  <Form.Group as={Col} md="3" controlId="formGroupSelectDebit">
                    <Form.Label>Select Debit</Form.Label>
                    <Form.Control type="text" defaultValue="Debit" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="formGroupGLDesc">
                    <Form.Label>GL Desc</Form.Label>
                    <Form.Control type="text" defaultValue="Original cost-plant &.." />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="formGroupGLCode">
                    <Form.Label>GL Code</Form.Label>
                    <Form.Control type="number" defaultValue="0020200000" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="formGroupText">
                    <Form.Label>Text(Don't enter special characters)</Form.Label>
                    <Form.Control type="text" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <div className="inline-buttons">
                  <div className="pagination-circle">1</div>&nbsp;&nbsp;&nbsp;
                  <button className="secondary">200/page</button>
                </div>
                <br />
                <span className="right-buttons">
                  <button className="primary">Calculate</button>&nbsp;&nbsp;
                  <button className="primary">Add</button>
                </span>
                <div className="spacer"></div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </>
    );
  }
}

export default Rightform;




































































































