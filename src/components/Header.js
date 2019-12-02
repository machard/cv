import React from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardImg, Button } from 'reactstrap';

function Header() {
  return (<Row>
    <Col sm="3" className="mb-5">
      <Card className="h-100">
        <CardImg top src="./profile.jpg" className="h-100 object-fit-cover" />
      </Card>
    </Col>
    <Col sm="5" className="mb-5">
      <Card  className="h-100">
        <CardHeader className="text-center">Position</CardHeader>
        <CardBody className="text-center align-middle">
          <h3>NodeJS Engineer</h3>
          <h3>React Engineer</h3>
          <h3>Fullstack Engineer</h3>
          <br />
          <Button color="success" size="lg" block tag="a" target="_blank" href="https://www.toptal.com/resume/matthieu-achard">Hire !</Button>
        </CardBody>
      </Card>
    </Col>
    <Col sm="4" className="text-right mb-5">
      <Card  className="h-100">
        <CardHeader className="text-center">About Me</CardHeader>
        <CardBody className="text-center">
          Matthieu Achard<br />
          01/03/1990<br />
          French<br /><br />
          37 Nguyen Van Huong <br /> Ho Chi Minh City, Vietnam<br /> <br />
          matthieuachard@outlook.com
        </CardBody>
      </Card>
    </Col>
  </Row>);
};

export default Header;
