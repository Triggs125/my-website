import "../styles/Name.css";
import textOverlayVideo from "../assets/text-overlay_red-fluid_slow.mp4";
import { constants, theme } from "../styles/theme";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Image from 'mui-image';
import myself from "../assets/images/myself_outdoors.jpg";
import { useEffect } from "react";

function Name() {
  const imageDimension = () => {
    return Math.min(400, window.innerWidth * 0.80)
  }

  const height = window.innerHeight;
  const [width, setWidth] = useState(window.innerWidth);
  const [imageDimensions, setImageDimensions] = useState(imageDimension());

  useEffect(() => {
    window.addEventListener("resize", () => {
      setImageDimensions(imageDimension());
      setWidth(window.innerWidth);
    });
  }, []);
  
  return (
    <div style={{ height }} id="Name">
      {width > 600 ? (
        <>
          <Image
            src={myself}
            fit="cover"
            easing="ease-in"
            alt=""
            wrapperStyle={{
              display: 'flex',
              position: 'absolute',
              justifyContent: 'center',
              width: '100%',
              height: `${imageDimensions}px`,
              top: '10%'
            }}
            style={{
              width: `${imageDimensions}px`,
              height: `${imageDimensions}px`,
              position: 'absolute',
              borderRadius: imageDimensions / 2,
              boxShadow: theme.shadows[10]
            }}
          />
          <svg id="text-overlay-svg" height={height} width="100%">
            <clipPath id="text-overlay">
              <Typography
                id="name-text"
                variant="h1"
                component="text"
                x="50%" y="65%"
                fill={constants.textPrimary}
                textAnchor="middle"
                fontWeight={600}
                boxShadow={theme.shadows[8]}
                wrap="wrap"
              >
                Tanner Driggers
              </Typography>
              <Typography
                id="name-description-text"
                variant="h2"
                component="text"
                x="50%" y="75%"
                fill={constants.textPrimary}
                textAnchor="middle"
                fontWeight={500}
              >
                Frontend Software Engineer
              </Typography>
            </clipPath>
          </svg>
          <video
            src={textOverlayVideo}
            autoPlay loop muted
            style={{ backgroundColor: theme.palette.text.video }}
          />
        </>)
        : (
          <Box
            width="100%"
            height={height}
            display="flex"
            flexDirection="column"
            gap="1rem"
            justifyContent="center"
            textAlign="center"
            alignItems="center"
            marginBottom="4rem"
            color={theme.palette.text.video}
          >
            <Image
              src={myself}
              fit="cover"
              easing="ease-in"
              alt=""
              wrapperStyle={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: `${imageDimensions}px`,
              }}
              style={{
                width: `${imageDimensions}px`,
                height: `${imageDimensions}px`,
                borderRadius: imageDimensions / 2,
                boxShadow: theme.shadows[10]
              }}
            />
            <Typography
              id="name-text"
              variant="h1"
              component="text"
              fontWeight={600}
              wrap="wrap"
            >
              Tanner Driggers
            </Typography>
            <Typography
              id="name-description-text"
              variant="h3"
              component="text"
              fontWeight={500}
            >
              Frontend Software Engineer
            </Typography>
          </Box>
        )
      }
    </div>
  )
}

export default Name;