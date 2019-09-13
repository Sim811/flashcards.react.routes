import React from "react";

import { Card, Button } from "semantic-ui-react";


class Fcard extends React.Component {
  state = { show: false }

  toggle = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <Card>
        <Card.Content>
          {this.state.show ?
            <Card.Header textAlign="center">{this.props.front}</Card.Header>
            :
            <Card.Header textAlign="center">{this.props.back}</Card.Header>
          }
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green' onClick={this.toggle}>
              Flip
            </Button>
            <Button basic color='red'>
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}


export default Fcard;