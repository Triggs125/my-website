import { Component } from "react";
import { FormattedMessage } from 'react-intl';
import { Button, Card, Stack, Image } from "react-bootstrap";

import CernerLogo from "../../assets/logo_cerner.png";
import PlayStoreIcon from "../../assets/icon_play-store.png";
import KalosLogo from "../../assets/logo_kalos.png";

import ReactIcon from "../../assets/logo_react.png";
import GitHubIcon from "../../assets/logo_github.png";

class Experience extends Component {
  workExperience = [
    {
      src: CernerLogo,
      descriptions: [
        `I currently work at Cerner as a Full-Stack Engineer on the Supply Chain team.`,
        `I primarily work with React, Java, Ruby, and SQL creating applications that help healthcare workers organize their inventory workflow.`,
        `With 2 years of experience in the workforce, Cerner has given me solid professional skills working on a diverse team of engineers.`,
        `Here is one of the apps on the Play Store that I helped create!`,
        <a
          href="https://play.google.com/store/apps/details?id=com.cernerpowerchart.inventory&hl=en_US&gl=US"
          target="_blank"
          rel="noreferrer"
        >
          <Button>
            <Image src={PlayStoreIcon} width="20" style={{ marginRight: "0.5rem" }} />
            Clincal Inventory Management
          </Button>
        </a>
      ],
      link: 'https://www.cerner.com/'
    },
    {
      src: KalosLogo,
      link: 'https://www.kalos-inc.com/'
    }
  ]

  toolsAndSoftware = [
    {
      src: ReactIcon,
      descriptions: [`I have 2 years of professional experience creating ReactJS applications.`],
      link: 'https://reactjs.org/'
    },
    {
      src: GitHubIcon,
      descriptions: [`GitHub has been a great resource for me both personally and professionally.`],
      link: 'https://github.com/Triggs125',
    }
  ];

  section(header, infoArray) {
    return (
      <div className="bg-light p-0 rounded-1 shadow-lg shadow-image w-100">
        <Card className="bg-light p-4 border-0">
          <Card.Header className="bg-light mx-auto">
            <h1 className="text-center">
              <FormattedMessage
                id={`experience.${header}`}
                defaultMessage={header}
                description={header}
              />
            </h1>
          </Card.Header>
          <div className="d-flex justify-content-center flex-wrap">
            {
              infoArray.map((info, i) => {
                return (
                  <Card.Body
                    key={`icon-image-${i}`}
                    className="pt-5 text-center"
                    style={{maxWidth:"500px"}}
                  >
                    <a href={info.link} target="_blank" rel="noreferrer">
                      <img className="mb-5" src={info.src} width="250" alt="" />
                    </a>
                    {
                      info.descriptions?.map((description, j) => {
                        return (
                          <h4 key={`${header}-description-${j}`} className="mb-4">
                            {description}
                          </h4>
                        )
                      })
                    }
                    <h4 className="mt-4">{info.description}</h4>
                    {/* <a href={info.link}><h5>{info.link}</h5></a> */}
                  </Card.Body>
                );
              })
            }
          </div>
        </Card>
      </div>
    )
  }

  render() {
    return (
      <Stack gap={3}>
        {this.section("Professional Experience", this.workExperience)}
        {this.section("Tools and Software", this.toolsAndSoftware)}
      </Stack>
    )
  }
}

export default Experience;
