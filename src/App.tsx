import React from "react";
import Cards from "./components/cards/cards";
import { Row, Col, Button } from "reactstrap";

function App() {
  return (
    <>
      <Row>
        <Col></Col>
        <Col xs="10">
          <Cards />
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default App;
