import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Navbar from './Navbar';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import About from './Pages/About';
import Store from './Pages/Store';

import { backgroundColors } from '../utilities/globalVariables';

import '../css/App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pageBackground: backgroundColors[5]
    }
    document.body.style.backgroundColor = this.state.pageBackground;
  }

  componentDidMount() {
    let i = backgroundColors.findIndex((background) => background === this.state.pageBackground);
    setInterval(() => {
      this.setState({ pageBackground: backgroundColors[i]});
      if (i >= backgroundColors.length - 1) i = -1;
      i += 1;
    }, 4000);
  }

  render() {
    const { pageBackground, nextColor } = this.state;
    document.body.style.backgroundColor = pageBackground;

    return (
      <BrowserRouter>
        <Navbar />
        <Container
          className={`p-3 m-auto outer-container`}
        >
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} backgroundColor={pageBackground} nextColor={nextColor} />}
            />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/about" component={About} />
            <Route exact path="/store" component={<Store />} />
          </Switch>
        </Container>       
      </BrowserRouter>
    );
  }
};

export default App;
