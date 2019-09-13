import React from "react";
import Fcard from "./Fcard";
import { Header, Card } from "semantic-ui-react";



class Fcards extends React.Component {
  state = {
    fcards: [
      { id: 1, front: "TestFront1", back: "TestBack1" },
      { id: 2, front: "TestFront2", back: "TestBack2" },
      { id: 3, front: "TestFront3", back: "TestBack3" },
      { id: 4, front: "TestFront4", back: "TestBack4" },
    ],
  };



  renderFcards = () => {
    const { fcards } = this.state;
    return fcards.map(fcard => <Fcard
      key={fcard.id} {...fcard}
      toggleForm={this.toggleForm}
      showForm={this.state.showForm}
    />)
  };


  render() {
    return (
      <div>
        <Header as="h1" textAlign="center">Flash Cards</Header>
        <Card.Group>
          {this.renderFcards()}
        </Card.Group>
      </div>
    );
  }
};





export default Fcards;