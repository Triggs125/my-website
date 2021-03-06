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
      alt: "Cerner",
      startDate: new Date(2020, 6, 15).toLocaleDateString(),
      endDate: 'Present',
      title: 'Full-Stack Software Engineer',
      descriptions: [
        `I primarily work with React, Java, Ruby, and SQL creating applications that help healthcare workers organize their Supply Chain workflow.`,
        `With 2 years of experience in the workforce, Cerner has given me solid professional skills working on a diverse team of engineers.`,
        `Here is one of the apps on the Play Store that I helped create!`,
        <Button
          href="https://play.google.com/store/apps/details?id=com.cernerpowerchart.inventory&hl=en_US&gl=US"
          target="_blank"
          rel="noreferrer"
          className="align-content-center"
        >
          <Image
            src={PlayStoreIcon}
            className="align-self-center"
            width="20"
            style={{ marginRight: "0.5rem" }}
          />
          Clincal Inventory Management
        </Button>
      ],
      link: 'https://www.cerner.com/'
    },
    {
      src: KalosLogo,
      alt: "Kalos",
      title: 'Software Intern',
      startDate: new Date(2018, 4, 21).toLocaleDateString(),
      endDate: new Date(2018, 7, 3).toLocaleDateString(),
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

  componentDidMount() {
    const windowResizeEvent = window.addEventListener('resize', () => {
      this.setState({});
    });

    this.setState({ windowResizeEvent });
  }

  componentWillUnmount() {
    this.setState({ windowResizeEvent: null });
  }

  section(header, infoArray) {
    return (
      <div className="bg-light p-0 rounded-1 shadow-lg shadow-image w-100">
        <Card className="bg-light p-3 border-0">
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
                      <img className="mb-4" src={info.src} height="160" alt={info.alt} />
                    </a>
                    <div className="mb-3">
                      <h2 className="mb-3"><u>{info.title}</u></h2>
                      {
                        (info.startDate || info.endDate) &&
                        <h5>({info.startDate} - {info.endDate})</h5>
                      }
                    </div>
                    {
                      info.descriptions?.map((description, j) => {
                        return (
                          <h4 key={`${header}-description-${j}`} className="mb-3">
                            {description}
                          </h4>
                        )
                      })
                    }
                    <h4 className="mt-4">{info.description}</h4>
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
    let margin = '8';
    if (window.innerWidth < 600) {
      margin = '0';
    } else if (window.innerWidth < 1160) {
      margin = '2'
    }
    return (
      <Stack gap={3} style={{ marginLeft: `${margin}rem`, marginRight: `${margin}rem` }}>
        {this.section("Professional Experience", this.workExperience)}
        {this.section("Tools and Software", this.toolsAndSoftware)}
      </Stack>
    )
  }
}

export default Experience;
