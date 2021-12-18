import { Component } from "react";
import { FormattedMessage } from 'react-intl';
import {
  Button,
  Container,
  Nav,
  Navbar as NavBar
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
        id="navbar"
        collapseOnSelect
        bg="dark"
        variant="dark"
        expand="xl"
        sticky="top"
        className="shadow justify-content-center"
      >
        <Container id="navbar-container" className="mx-2 flex-nowrap">
          <NavBar.Brand
            style={{
              "marginLeft": `calc(50% - ${0.5 * calculateTextWidth('Tanner Driggers', `normal 500 50px system-ui`)}px)`,
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
          <NavBar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link>
                  <LinkContainer to="/">
                    <Button
                      className={`bg-dark ${selectedButton !== 'home' ?? 'border-0'}`}
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
                  <LinkContainer to="/experience">
                    <Button
                      className={`bg-dark active ${selectedButton !== 'about' ?? 'border-0'}`}
                      variant={selectedButton === 'experience' ? 'secondary' : 'dark'}
                      size="lg"
                      onClick={() => this.changeSelectedButton('experience')}
                    >
                      <FormattedMessage
                        id="myWebsite.experience"
                        defaultMessage="Experience"
                        description="Experience Button in the Navbar"/>
                    </Button>
                  </LinkContainer>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <LinkContainer to="/about">
                    <Button
                      className={`bg-dark active ${selectedButton !== 'about' ?? 'border-0'}`}
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
              {/* <Nav.Item>
                <Nav.Link>
                  <LinkContainer to="/store">
                    <Button
                      className={`bg-dark active ${selectedButton !== 'store' ?? 'border-0'}`}
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
              </Nav.Item> */}
            </Nav>
          </NavBar.Collapse>
        </Container>
      </NavBar>
    );
  }
}

export default Navbar;
