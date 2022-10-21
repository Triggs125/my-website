import { useEffect, useState } from "react";
import { Box, Button, Container, ImageList, ImageListItem, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { theme } from "../styles/theme";
import "../styles/Personal.css";

import MyselfOutdoors from '../assets/images/myself_outdoors.jpg';
import Myself from '../assets/images/myself.jpg';
import MyselfKstateBuilding from '../assets/images/myself_kstate_building.jpg';
import MyselfKstateFreshman from '../assets/images/myself_kstate_freshman.jpg';

const images = [
  {
    src: MyselfOutdoors,
    alt: ""
  },
  {
    src: Myself,
    alt: ""
  },
  {
    src: MyselfKstateBuilding,
    alt: ""
  },
  {
    src: MyselfKstateFreshman,
    alt: ""
  }
];

function Personal() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const getHeights = () => {
    const scrollTop = window.innerHeight - window.scrollY;
    let minHeight = window.innerWidth < 800 ? theme.spacing(2) : theme.spacing(4);
    minHeight = minHeight.slice(0, -2);
    return [
      Math.max(minHeight, scrollTop - 500),
      Math.max(minHeight, scrollTop - 550),
      Math.max(minHeight, scrollTop - 600),
      Math.max(minHeight, scrollTop - 650)
    ];
  }
  
  const [height, setHeight] = useState(getHeights());

  useEffect(() => {
    window.addEventListener("resize", () => setInnerWidth(window.innerWidth));
    window.addEventListener('scroll', () => setHeight(getHeights()));
  }, []);

  return (
    <Container
      id="personal-info-section"
      sx={{
        paddingTop: '2rem'
      }}
    >
      <Typography variant="h5" textAlign="center" id="about-paragraph">
        Hi! I'm Tanner Driggers, a Frontend Software Engineer based in KC who is passionate about developing responsive
        digital experiences through problem-solving, creativity, and communication. I love creating robust, testable components that combine visual
        design with practical innovation.
      </Typography>
      <Box
        justifyContent="center"
        marginTop="2rem"
        display="flex"
        gap="1rem"
      >
        <Button
          variant="text"
          href="https://www.linkedin.com/in/tannerdriggers/"
          target="_blank"
          sx={{ padding: 0 }}
        >
          <LinkedInIcon sx={{ fontSize: '4rem', color: theme.palette.icons.linkedin }} />
        </Button>
        <Button
          variant="text"
          href="https://github.com/Triggs125"
          target="_blank"
          sx={{ padding: 0 }}
        >
          <GitHubIcon sx={{ fontSize: '4rem', color: theme.palette.icons.github }} />
        </Button>
      </Box>
      <ImageList
        sx={{
          paddingY: "1rem"
        }}
        variant="masonry"
        rowHeight={450}
        cols={innerWidth < 800 ? 2 : 4}
        gap={16}
      >
        {
          images.slice(0, innerWidth < 800 ? 2 : 4).map((image, index) => (
            <ImageListItem key={image.src} className="personal-image">
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  boxShadow: theme.shadows[4],
                  borderRadius: theme.shape.borderRadius,
                  marginTop: height[index],
                  display: "inline-block"
                }}
              />
            </ImageListItem>
          ))
        }
      </ImageList>
    </Container>
  )
}

export default Personal;