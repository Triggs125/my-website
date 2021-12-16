import { Component } from "react";
import PropTypes from 'prop-types';
import { Card, Stack } from 'react-bootstrap';
import ImageRotator from "../ImageRotator";

import '../../css/Home.css';

import MyselfOutdoors from '../../assets/myself_outdoors.jpg';
import Myself from '../../assets/myself.jpg';
import VivAndMe from '../../assets/viv&me.jpg';
import MyselfKstateBuilding from '../../assets/myself_kstate_building.jpg';
import MyselfHiking from '../../assets/myself_hiking.jpg';
import MyselfKstateFreshman from '../../assets/myself_kstate_freshman.jpg';

const propTypes = {
  backgroundColor: PropTypes.string,
}

class Home extends Component {

  render() {
    const images = [
      {
        src: MyselfOutdoors,
      },
      {
        src: Myself,
        rounded: 'rounded-3',
        roundedCircle: false,
      },
      {
        src: VivAndMe,
      },
      {
        src: MyselfKstateBuilding,
        rounded: 'rounded-3',
        roundedCircle: false,
      },
      {
        src: MyselfHiking,
      },
      {
        src: MyselfKstateFreshman,
        rounded: 'rounded-3',
        roundedCircle: false,
      }
    ];

    return (
      <Stack gap={4} className={`shadow-image`}>
        <div className="bg-light p-2 rounded-1 shadow-lg">
          <Card className="bg-light p-4 border-0">
            <Card.Header
              ref={(ref) => this.ref = ref}
              className="bg-light float-left"
              style={{
                'marginLeft': '-2rem',
                'marginRight': '-2rem',
                'paddingLeft': '-2rem',
                'paddingRight': '-2rem'
              }}
            >
              <ImageRotator
                images={images}
                maxWidth={400}
                backgroundColor={this.props.backgroundColor}
                outerRef={this.ref} />
            </Card.Header>
            <Card.Body>
              <Card.Title>Tanner Driggers</Card.Title>
              <Card.Text>
                Tanner is a Kansas City based Full-Stack (Frontend Preferred) Software Engineer currently working for Cerner's Supply Chain team.
                Tanner has professional experience working with JavaScript (Node - React), Ruby, Java (Maven), Docker, and SQL (SQL Developer).
                Tanner also has experience using GitHub, Postman, Android Studio, Visual Code, Jenkins, Jira, Workday, New Relic, GlobalProtect, and the Office 365 Apps (Teams, Outlook, OneNote, Word, Excel, etc.).
                Tanner's primary browser choice is Google Chrome and has professional experience using the built in developer tools (They're quite nice 😍).
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Stack>
    );
  }
}

Home.propTypes = propTypes;
export default Home;
