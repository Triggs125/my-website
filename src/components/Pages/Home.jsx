import { Component } from "react";
import PropTypes from 'prop-types';
import { Button, Card, Stack } from 'react-bootstrap';
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
              className="bg-light float-left mb-4"
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
                I have many passions including a love of creating music, videos, and software.
                My favorite type of music is a mix between Rap, Hip-hop, and Pop.
                I love both cats and dogs, but if I had to choose I'd pick cats as they are more laid back.
                If there is one thing to know about me it is that if I care about something, I will put in the work to make it happen.
                Click <Button href="/experience" className="btn btn-light m-0 p-0"><p className="m-0 p-0 pb-1 font-weight-bold">here</p></Button> for my professional experience.
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
