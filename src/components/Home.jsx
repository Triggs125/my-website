import { Component } from "react";
import { Card, Container, Stack, Image } from 'react-bootstrap';

import '../css/Home.css';
import MyselfOutdoors from '../assets/myself_outdoors.jpg';
import Myself from '../assets/myself.jpg';

class Home extends Component {

  render() {
    const stackStyle = "bg-light p-2 rounded-1 shadow-lg";
    const images = [
      {
        src: Myself,
        shadow: 'shadow-lg'
      },
      {
        src: MyselfOutdoors,
        shadow: 'shadow-lg'
      }
    ];

    return (
      <Stack gap={4} className="m-4 shadow-lg">
        <div className={stackStyle}>
          <Card className="bg-light p-4 border-0">
            <Card.Header className="pl-3 bg-light float-left">
              {
                images.map((image) => {
                  return <Image id="header-image" className={`bg-light m-5 ${image.shadow}`} roundedCircle src={image.src} />
                })
              }
            </Card.Header>
            <Card.Body>
              <Card.Title className="">Tanner Driggers</Card.Title>
              <Card.Text>
                Tanner is a Kansas City based Full-Stack (Frontend Preferred) Software Engineer currently working for Cerner on their Supply Chain team.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Stack>
    );
  }
}

export default Home;
