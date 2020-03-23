import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from "reactstrap";

interface SingleCardProps {
  key: string;
  size: number;
  image: string;
  name: string;
  email: string;
}

class SingleCard extends Component<SingleCardProps> {
  render() {
    const { size, name, email, image } = this.props;
    return (
      <>
        <Col sm={size}>
          <Card>
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody>
              <CardTitle>
                <strong>Name:</strong> {name}
              </CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
              <CardText>
                <strong>Email:</strong> {email}
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default SingleCard;
