import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import Fcards from "./components/Fcards";
import NoMatch from './components/NoMatch';
import Navbar from "./components/Navbar";
import {Route, Switch, } from "react-router-dom";
import {Container,} from "semantic-ui-react";


const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>      
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/flashcards" component={Fcards} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
)

export default App;
