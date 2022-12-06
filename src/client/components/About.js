import React from 'react';
import { Container, Card, CardText, CardTitle } from 'reactstrap';

const About = () => { 

  return(
    <Container>
      <Card body className="mt-3 text-right">
        <CardTitle tag="h5">About</CardTitle>
        <CardText>This is a react component</CardText>
      </Card>
    </Container>
  );

}

export default About;
