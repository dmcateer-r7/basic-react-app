import React, { Component } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Loading from './components/Loading';
import HackerNews from './components/HackerNews';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "loading"
    };
  }

  componentDidMount = async () => {
    this.setState({
      status: "complete"
    })
  }

  render() {
    const { status } = this.state;
    if( status === "loading"){
      return <Loading />
    } 
    
    else if (status === "complete") {
      return (
        <Container>
          <br />
          <h1>Welcome</h1>
          <br /> 
          <Col xs="12" lg="12">
              <Card>
                <CardHeader>Hacker News</CardHeader>
                <CardBody>
                  <HackerNews />
                </CardBody>
              </Card>
            </Col>
        </Container>);
    } 
    
    else {
      <Container>
        <h2>Error</h2>
      </Container>
    }
  }
}
