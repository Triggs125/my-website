import { useEffect, useState } from "react";
import { Box, Button, Container, ImageList, ImageListItem, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import { theme } from "../styles/theme";
import "../styles/Personal.css";

import MyselfViv from '../assets/images/myself_viv_vegas.jpg';
import Myself from '../assets/images/myself.jpg';
import MyselfKstateBuilding from '../assets/images/myself_kstate_building.jpg';
import MyselfKstateFreshman from '../assets/images/myself_kstate_freshman.jpg';

const images = [
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
  },
  {
    src: MyselfViv,
    alt: "My girlfriend, Vivian, and myself in Las Vegas looking around at CES."
  }
];

function Personal() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const getHeights = () => {
    const scrollTop = window.innerHeight - window.scrollY;
    let minHeight = window.innerWidth < 800 ? theme.spacing(2) : theme.spacing(4);
    minHeight = minHeight.slice(0, -2);
    const start = 90;
    const split = 70;
    return [
      Math.max(minHeight, scrollTop - start),
      Math.max(minHeight, scrollTop - (start + split)),
      Math.max(minHeight, scrollTop - (start + (split * 2))),
      Math.max(minHeight, scrollTop - (start + (split * 3)))
    ];
  }
  
  const [height, setHeight] = useState(getHeights());

  useEffect(() => {
    window.addEventListener("resize", () => setInnerWidth(window.innerWidth));
    window.addEventListener('scroll', () => setHeight(getHeights()));
  }, []);

  return (
    <Container
      id="about-me"
      sx={{
        paddingTop: '2rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        gap: '1rem'
      }}
    >
      <Typography variant="h5" textAlign="center" id="about-paragraph" maxWidth="500px">
        Hi! I'm Tanner Driggers, a Frontend Software Engineer based in KC who is passionate about developing responsive
        digital experiences through problem-solving, creativity, and communication. I love creating robust, testable components combining visual
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
          title="My LinkedIn profile"
        >
          <LinkedInIcon sx={{ fontSize: '4rem', color: theme.palette.icons.linkedin }} />
        </Button>
        <Button
          variant="text"
          href="https://github.com/Triggs125"
          target="_blank"
          sx={{ padding: 0 }}
          title="My GitHub profile"
        >
          <GitHubIcon sx={{ fontSize: '4rem', color: theme.palette.icons.github }} />
        </Button>
        <Button
          variant="text"
          href="https://drive.google.com/file/d/1bvUiscv_aP6g1qA0_6zzsexb5zY1fbaU/view?usp=sharing"
          target="_blank"
          sx={{ padding: 0 }}
          title="My resume"
        >
          <DescriptionIcon sx={{ fontSize: '4rem' }} />
        </Button>
      </Box>
      <ImageList
        className="scrollbar-none"
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
                  boxShadow: theme.shadows[2],
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