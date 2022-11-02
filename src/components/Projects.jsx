import { Box, Button, Container, Typography } from "@mui/material";
import FoodPickerLogo from "../assets/images/food-picker-logo.png";
import OscarLogo from "../assets/images/oscars-image.jpeg";
import "../styles/Projects.css";
import { theme } from "../styles/theme";

function Projects() {
  return (
    <Container
      id="personal-projects"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}
    >
      <Typography variant="h2" textAlign='center'>Personal Projects</Typography>
      <Box
        sx={{
          display: 'flex',
          gap: theme.spacing(8),
          justifyContent: 'space-evenly',
          flexWrap: 'wrap'
        }}
      >
        <Box className="image-box">
          <Box className="project-descriptions">
            <Typography variant="h3" textAlign='center'>Food Picker</Typography>
            <Typography variant="h5" textAlign='center'>
              Join a lobby with your friends to pick the restaurant that matches everyone's choices
              or choose a random restaurant around you.
            </Typography>
          </Box>
          <Box className="project-descriptions">
            <Typography variant="h5" textAlign='center'>
              <strong>Technologies:</strong> React-native, Google Firebase, Node/NPM, Expo Go
            </Typography>
            <Button className="image-box-button" sx={{ padding: 0 }} href="https://my-food-picker.web.app/" target="_blank">
              <img
                src={FoodPickerLogo}
                alt="Food Picker"
                id="food-picker-logo"
                className="project-image"
                style={{ boxShadow: theme.shadows[2] }}
              />
            </Button>
          </Box>
        </Box>
        <Box className="image-box">
          <Box className="project-descriptions">
            <Typography variant="h3" textAlign='center'>Oscar Picker</Typography>
            <Typography variant="h5" textAlign='center'>
              Choose your picks on who you think won every Oscar category between the years of 2018 and 2020. This was a fun Oscar watch party game for me and my college roommates.
            </Typography>
          </Box>
          <Box className="project-descriptions">
            <Typography variant="h5" textAlign='center'>
              <strong>Technologies:</strong> Angular 2, Google Firebase, Node/NPM
            </Typography>
            <Button className="image-box-button" sx={{ padding: 0 }} href="https://oscarpicker-85422.firebaseapp.com/" target="_blank">
              <img
                src={OscarLogo}
                alt="Oscar Picker"
                id="oscar-picker-logo"
                className="project-image"
                style={{ boxShadow: theme.shadows[2] }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Projects;