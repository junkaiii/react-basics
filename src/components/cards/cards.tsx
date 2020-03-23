import React, { Component } from "react";
import SingleCard from "../singlecard/card";
import { Row, Button } from "reactstrap";
import "./cards.scss";

interface CardsState {
  isLoaded: boolean;
  personsArray?: Array<Person>;
  errors: string;
}

interface CardsProps {
  isLoaded?: boolean;
  personsArray?: Array<Person>;
}

interface Person {
  picture: { thumbnail: string; medium: string; large: string };
  name: { title: string; first: string; last: string };
  email: string;
}

const initialState = {
  isLoaded: false,
  personsArray: [
    {
      picture: {
        thumbnail: "https://via.placeholder.com/318x180.png",
        medium: "https://via.placeholder.com/318x180.png",
        large: "https://via.placeholder.com/318x180.png"
      },
      name: { title: "Mr", first: "Alfred", last: "Rhodes" },
      email: "hello@smartly.io"
    },
    {
      picture: {
        thumbnail: "https://via.placeholder.com/318x180.png",
        medium: "https://via.placeholder.com/318x180.png",
        large: "https://via.placeholder.com/318x180.png"
      },
      name: { title: "Mr", first: "Alfred", last: "Rhodes" },
      email: "hello@smartly.io"
    },
    {
      picture: {
        thumbnail: "https://via.placeholder.com/318x180.png",
        medium: "https://via.placeholder.com/318x180.png",
        large: "https://via.placeholder.com/318x180.png"
      },
      name: { title: "Mr", first: "Alfred", last: "Rhodes" },
      email: "hello@smartly.io"
    }
  ],
  errors: ""
};

class Cards extends Component<CardsProps, CardsState> {
  readonly state: CardsState = initialState;

  componentDidMount = async () => {
    const response = await fetch("https://randomuser.me/api/?results=3");
    if (response.status >= 200 && response.status <= 299) {
      const json = await response.json();
      this.setState({ isLoaded: true, personsArray: json.results });
    } else {
      this.setState({
        isLoaded: true,
        errors: `${response.status}, ${response.statusText}`
      });
      console.log(response.status, response.statusText);
    }
  };

  renderCards = (state: CardsState) => {
    const { isLoaded, personsArray, errors } = state;
    if (isLoaded === false) {
      return (
        <>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </>
      );
    } else if (errors.length !== 0) {
      return (
        <>
          <Row>
            <div>Something wrong has happened.</div>
          </Row>
        </>
      );
    } else {
      return (
        <>
          <Row>
            {personsArray?.map((person: Person) => (
              <SingleCard
                key={person.email}
                size={4}
                image={person.picture.large}
                name={`${person.name.first} ${person.name.last}`}
                email={person.email}
              />
            ))}
          </Row>
          <Row className="mt-10">
            <Button outline color="primary" size="lg" block>
              primary
            </Button>
          </Row>
        </>
      );
    }
  };

  render() {
    return this.renderCards(this.state);
  }
}

export default Cards;
