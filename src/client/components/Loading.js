import { Row, Col, Container } from "reactstrap";
import React from 'react';
import spinner from "../imgs/spinner.svg";
import '../style.css'

export default () => (
    <div>
        <Container>
            <Row>
                <Col xs="4" lg="4" />
                <Col xs="4" lg="4" >
                    <div>
                        <center>
                            <img src={spinner} alt="loading-spinner" className="scaled"/>
                        </center>
                    </div>
                </Col>
                <Col xs="4" lg="4" />
            </Row>
        </Container>
    </div>
);
