import React, { Component } from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Store from './Store';

import { backgroundColors } from '../utilities/globalVariables';

import '../css/App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pageBackground: "primary"
    }
  }

  componentDidMount() {
    let i = 1;
    setInterval(() => {
      this.setState({ pageBackground: backgroundColors[i]});
      if (i >= backgroundColors.length - 1) i = -1;
      i += 1;
    }, 4000);
  }

  render() {
    const { pageBackground } = this.state;

    return (
      <MemoryRouter>
        <Navbar />
        <Container className={`p-3 m-auto bg-${pageBackground} outer-container`}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/store">
              <Store />
            </Route>
            <Route exact path="/">
              <Home backgroundColor={pageBackground} />
            </Route>
          </Switch>
        </Container>
      </MemoryRouter>
    );
  }
};

export default App;
