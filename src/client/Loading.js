import { Row, Col, Container } from "reactstrap";
import React from 'react';
import spinner from "./img/spinner.svg";

export default () => (
    <div>
        <Container>
            <Row>
                <Col xs="4" lg="4" />
                <Col xs="4" lg="4" >
                    <div>
                        <center>
                            <img src={spinner} alt="loading-spinner" />
                        </center>
                    </div>
                </Col>
                <Col xs="4" lg="4" />
            </Row>
        </Container>
    </div>
);