import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Store from './Store';

import '../css/App.css';

const backgroundColors = [
  "bg-primary",
  "bg-secondary",
  "bg-success",
  "bg-warning",
  "bg-danger",
  "bg-info",
];

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pageBackground: "bg-secondary"
    }
  }

  componentDidMount() {
    let i = 0;
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
        <Container className={`p-3 m-auto ${pageBackground} outer-container`}>
          <Container className="p-5 m-auto bg-light rounded-1">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/store">
                <Store />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
        </Container>
      </MemoryRouter>
    );
  }
};

export default App;
