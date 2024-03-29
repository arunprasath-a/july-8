import React, { Component } from 'react';
import "../Css/form.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';





class Testform extends Component {
    constructor(props) {
        super(props);
        this.state = { validated: false };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });
    }



    render() {
        const { validated } = this.state;
        return (
            <React.Fragment>
                <Container fluid>
                    <Row>
                        <Col></Col>
                        <Col className="heading"><h1>FeedBack Form</h1></Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col md={2} className="formArea1"></Col>
                        <Col md={8} className="formArea2">
                            <React.Fragment>
                                <Form
                                    noValidate
                                    validated={validated}
                                    onSubmit={e => this.handleSubmit(e)}
                                >
                                    <Form.Row>
                                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="First name"
                                                defaultValue="Mark"
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                                            <Form.Label>Last name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Last name"
                                                defaultValue="Otto"
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                            <Form.Label>Username</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Username"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please choose a username.
              </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control type="text" placeholder="City" required />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid city.
            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                                            <Form.Label>State</Form.Label>
                                            <Form.Control type="text" placeholder="State" required />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid state.
            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                                            <Form.Label>Zip</Form.Label>
                                            <Form.Control type="text" placeholder="Zip" required />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid zip.
            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Group>
                                        <Form.Check
                                            required
                                            label="Agree to terms and conditions"
                                            feedback="You must agree before submitting."
                                        />
                                    </Form.Group>
                                    <Button type="submit">Submit form</Button>
                                </Form>

                            </React.Fragment>

                        </Col>
                        <Col md={2} className="formArea3"></Col>
                    </Row>
                </Container>

            </React.Fragment>

        );
    }
}

export default Testform;