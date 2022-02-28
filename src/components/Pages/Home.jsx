import { Component } from "react";
import PropTypes from 'prop-types';
import { Button, Card, Stack, Image } from 'react-bootstrap';
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
      <>
        <Stack gap={4} className="mb-4">
          <Card className="bg-light mb-auto pb-3 pt-0 rounded-1 border-0 shadow-image shadow-lg">
            <ImageRotator
              images={images}
              maxWidth={400}
              backgroundColor={this.props.backgroundColor}
              outerRef={this.ref}
            />
            <Card.Body className="mx-3 text-center">
              <Card.Header className="text-center border border-3 mb-4" style={{ display: "inline-block" }}>
                “Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.”
                <br/>—Will Ferrell
              </Card.Header>
              <br/>
              <div className="text-center">
                <Button href="/experience" type="button" className="border-0 btn-primary btn btn-lg">
                  <h3 className="pt-2 ml-2">Professional Experience</h3>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Stack>
        <Stack gap={4} direction="horizontal" className="justify-content-center align-content-start flex-wrap">
          <Card className="desc mb-auto flex-fill bg-light border-0 rounded-1 shadow-image shadow-lg">
            <Card.Header className="text-center">
              <h1 className="mt-2">
                Kansas State University (K-State)
              </h1>
            </Card.Header>
            <Card.Body className="rounded-3 my-0">
              <h2 className="text-center">Bachelors of Science in Computer Science</h2>
              <div className="d-flex flex-column text-center align-items-center mb-4 mt-5">
                <Image
                  key={'kstate-image'}
                  id={'kstate-image'}
                  className={
                    `my-auto\
                    image-rotator-image\
                    align-items-center\
                    bg-light\
                    mx-auto\
                    align-content-center\
                    shadow-image\
                    rounded-3`
                  }
                  roundedCircle={true}
                  src={'https://pbs.twimg.com/profile_images/1270768565487091714/ny6y8A5Q_400x400.png'}
                />
              </div>
            </Card.Body>
          </Card>
          <Card
            className="desc mb-auto flex-fill fill-height bg-light border-0 rounded-1 shadow-image shadow-lg"
          >
            <Card.Header className="text-center">
              <h1 className="mt-2">
                Some Of My Passions
              </h1>
            </Card.Header>
            <Card.Body className="rounded-3 my-0">
              <h4 className="pt-2">
                <ul>
                  <li><strong>Coding</strong></li>
                  <ul>
                    <li>Websites, Apps, Simple Scripts</li>
                    <li>JavaScript, Java, Python, NoSql, Sql</li>
                    <li>React, React-Native, Firebase, Node, Docker, Jenkins, Maven</li>
                  </ul>
                  <li><strong>Iced Coffee w/ Creamer</strong></li>
                  <ul>
                    <li>Iced white mocha with vanilla</li>
                  </ul>
                  <li><strong>Sports</strong></li>
                    <ul>
                      <li className="font-weight-normal">Watching Football</li>
                        <ul>
                          <li><span className="text-danger">Chiefs</span></li>
                          <li><span className="text-purple">K-State</span></li>
                        </ul>
                      <li className="font-weight-normal">Tennis</li>
                      <li className="font-weight-normal">Basketball</li>
                      <li className="font-weight-normal">Table Tennis (Ping Pong)</li>
                    </ul>
                  <li><strong>Music</strong></li>
                    <ul>
                      <li className="font-weight-normal">Creating Music</li>
                      <li className="font-weight-normal">Playing the Drumset</li>
                    </ul>
                </ul>
              </h4>
            </Card.Body>
          </Card>
        </Stack>
      </>
    );
  }
}

Home.propTypes = propTypes;
export default Home;
