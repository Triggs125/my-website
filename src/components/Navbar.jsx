import { Component } from "react";
import { FormattedMessage } from 'react-intl';
import {
  Button,
  Container,
  Nav,
  Navbar as NavBar,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import calculateTextWidth from 'calculate-text-width';

import '../css/Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: 'home',
    }
  }

  changeSelectedButton(selectedButton) {
    this.setState({ selectedButton });
  }

  render() {
    const { selectedButton } = this.state;

    return (
      <NavBar
        collapseOnSelect
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        className="shadow"
      >
        <Container className="mx-2">
          <NavBar.Brand
            style={{
              "margin-left": `calc(50% - ${0.5 * calculateTextWidth('Tanner Driggers', `normal 500 50px system-ui`)}px)`,
            }}
          >
            <LinkContainer to="/">
              <Button
                id="myName"
                className="bg-dark border-0"
                variant="dark"
                size="lg"
                onClick={() => this.changeSelectedButton('home')}
              >
                <FormattedMessage
                  id="myWebsite.tannerdriggers"
                  defaultMessage="Tanner Driggers"
                  description="My Name in the Navbar"/>
              </Button>
            </LinkContainer>
          </NavBar.Brand>
          <NavBar.Toggle aria-controls="navbar-nav" />
          <NavBar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Item>
                <Nav.Link>
                  <LinkContainer to="/">
                    <Button
                      className="bg-dark"
                      variant={selectedButton === 'home' ? 'secondary' : 'dark'}
                      size="lg"
                      onClick={() => this.changeSelectedButton('home')}
                    >
                      <FormattedMessage
                        id="myWebsite.home"
                        defaultMessage="Home"
                        description="Home Button in the Navbar"/>
                    </Button>
                  </LinkContainer>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <LinkContainer to="/about">
                    <Button
                      className="bg-dark"
                      variant={selectedButton === 'about' ? 'secondary' : 'dark'}
                      size="lg"
                      onClick={() => this.changeSelectedButton('about')}
                    >
                      <FormattedMessage
                        id="myWebsite.about"
                        defaultMessage="About"
                        description="About Button in the Navbar"/>
                    </Button>
                  </LinkContainer>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <LinkContainer to="/store">
                    <Button
                      className="bg-dark"
                      variant={selectedButton === 'store' ? 'secondary' : 'dark'}
                      size="lg"
                      onClick={() => this.changeSelectedButton('store')}
                    >
                      <FormattedMessage
                        id="myWebsite.store"
                        defaultMessage="Store"
                        description="Store Button in the Navbar"/>
                    </Button>
                  </LinkContainer>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </NavBar.Collapse>
        </Container>
      </NavBar>
    );
  }
}

export default Navbar;