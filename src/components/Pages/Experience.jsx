import { Component } from "react";
import { FormattedMessage } from 'react-intl';
import { Card, Stack } from "react-bootstrap";
import ImageRotator from "../ImageRotator";

import ReactIcon from "../../assets/logo_react.png";
import GitHubIcon from "../../assets/logo_github.png";

class Experience extends Component {
  iconImages = [
    {
      src: ReactIcon,
      rounded: 'rounded-3',
      roundedCircle: false,
      shadow: false,
      description: `I have 2 years of professional experience creating React applications.`,
    },
    {
      src: GitHubIcon,
      roundedCircle: false,
      shadow: false,
      description: `I have experience using GitHub professionally and personally.`,
      link: 'https://github.com/Triggs125',
    }
  ];

  render() {
    return (
      <Stack gap={4} className={`shadow-image`}>
        <div className="bg-light p-2 rounded-1 shadow-lg">
          <Card className="bg-light p-4 border-0">
            <Card.Header className="bg-light mx-auto">
              <h1>
                <FormattedMessage
                  id="experience.experienceTitle"
                  defaultMessage="Experience"
                  description="Experience page title"
                />
              </h1>
            </Card.Header>
            <Card.Body className="mb-0">
              <ImageRotator
                images={this.iconImages}
                imageScrollTimeout={15000}
                maxWidth={200}
                maxImagesOnScreen={1}
              />
            </Card.Body>
          </Card>
        </div>
      </Stack>
    )
  }
}

export default Experience;
