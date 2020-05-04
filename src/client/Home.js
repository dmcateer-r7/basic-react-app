import React, { Component } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Loading from './Loading';
import HackerNews from './HackerNews';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "loading",
    };
  }


  componentDidMount = async () => {
    this.setState({
      status: "complete"
    });
  }


  render() {
    const { status } = this.state;

    if( status === "loading"){
      return <Loading />
    } 
    
    else if (status === "complete") {
      return (
        <Container>
          <Row className="pb-3">
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>Hacker News</CardHeader>
                <CardBody>
                  <HackerNews />
                </CardBody>
              </Card>
            </Col>
          </Row>

        </Container>);
    } 
    
    else {
      <Container>
        <h2>Error</h2>
      </Container>
    }
  }
}
