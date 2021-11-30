import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import {
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import calculateTextWidth from 'calculate-text-width';

import './App.css';

const backgroundColors = [
  "bg-primary",
  "bg-secondary",
  "bg-success",
  "bg-warning",
  "bg-danger",
  "bg-info",
];

const Home = () => <span>Home</span>;

const About = () => <span>About</span>;

const Users = () => <span>Users</span>;

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
    }, 5000);
  }

  render() {
    const { pageBackground } = this.state;

    return (
      <MemoryRouter>
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="sm" sticky="top">
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Brand
            style={{
              "margin-left": `calc(50vw - ${0.5 * calculateTextWidth('Tanner Driggers', `normal 500 40px system-ui`)}px)`
            }}
          >
            <LinkContainer to="/">
              <h1>Tanner Driggers</h1>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="p-3 nav-links">
              <Nav.Link>
                <LinkContainer to="/">
                  <h5>Home</h5>
                </LinkContainer>
              </Nav.Link>
              <Nav.Link>
                <LinkContainer to="/about">
                  <h5>About</h5>
                </LinkContainer>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className={`p-3 m-auto ${pageBackground} outer-container`}>
          <Container className="p-5 m-auto align-contents-center bg-light rounded-3">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
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
