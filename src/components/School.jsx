import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Image from "mui-image";
import { theme } from "../styles/theme";
import kstate_logo from "../assets/images/logo_kstate.png";
import { useState } from "react";
import { useEffect } from "react";

export default function School() {
  const imageDimension = () => {
    return Math.min(300, window.innerWidth * 0.80)
  }

  const [imageDimensions, setImageDimensions] = useState(imageDimension());

  useEffect(() => {
    window.addEventListener("resize", () => {
      setImageDimensions(imageDimension());
    });
  }, []);

  return (
    <Container>
      <Box
        textAlign={"center"}
        display="flex"
        flexDirection={"column"}
        gap="1.5rem"
      >
        <Typography
          variant="h2"
        >
          Bachelor of Science: Computer Science
        </Typography>
        <Typography
          variant="h3"
          color={theme.palette.text.kstate}
        >
          Kansas State University
        </Typography>
        <Image
          src={kstate_logo}
          alt=""
          fit="cover"
          easing="ease-in"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: `${imageDimensions}px`,
          }}
          style={{
            width: `${imageDimensions}px`,
            height: `${imageDimensions}px`,
            borderRadius: '4px',
            boxShadow: theme.shadows[20]
          }}
        />
      </Box>
    </Container>
  );
}