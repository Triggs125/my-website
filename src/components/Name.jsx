import "../styles/Name.css";
import textOverlayVideo from "../assets/text-overlay_red-fluid-slow.mp4";
import { constants, theme } from "../styles/theme";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Name() {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    let scrollTop = window.scrollY;
    let minHeight = 170;
    let height = Math.max(minHeight, window.innerHeight - scrollTop);
    setHeight(height);
  }
  
  return (
    <div style={{ height }}>
      <svg id="text-overlay-svg" height={height} width="100%">
        <clipPath id="text-overlay">
          <Typography
            id="name-text"
            variant="h1"
            component="text"
            x="50%" y="50%"
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
            x="50%" y="60%"
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
      />
    </div>
  )
}

export default Name;