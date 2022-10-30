import "../styles/Name.css";
import textOverlayVideo from "../assets/text-overlay_red-fluid_slow.mp4";
import { constants, theme } from "../styles/theme";
import { Typography } from "@mui/material";
import { useState } from "react";
import Image from 'mui-image';
import myself from "../assets/images/myself_outdoors.jpg";
import { useEffect } from "react";

function Name() {
  const height = window.innerHeight;
  const [imageDimensions, setImageDimensions] = useState(400);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const imageWidth = Math.min(300, window.innerWidth * 0.80)
      setImageDimensions(imageWidth);
    });
  }, []);
  
  return (
    <div style={{ height }} id="Name">
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
            variant="h3"
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
    </div>
  )
}

export default Name;