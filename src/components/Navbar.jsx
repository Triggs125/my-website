import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { theme } from "../styles/theme";

function getOpacity() {
  const halfHeight = window.innerHeight;
  const opacity = Math.min(1, 0 + (Math.min(window.scrollY, halfHeight) / halfHeight));
  return opacity;
}

function Navbar() {
  const [opacity, setOpacity] = useState(getOpacity());

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOpacity(getOpacity());
    });
  }, []);

  return (
    <Box
      id="navbar"
      sx={{
        opacity,
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'white',
        height: '3.5rem',
        paddingX: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: theme.shadows[3]
      }}
    >
      <Typography variant="h3" sx={{ opacity }} textAlign="center">Tanner Driggers</Typography>
    </Box>
  );
}

export default Navbar;