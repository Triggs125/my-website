import { Box, Button, Container, Typography } from "@mui/material";
import FoodPickerLogo from "../assets/images/food-picker-logo.png";
import OscarLogo from "../assets/images/oscars-image.jpeg";
import "../styles/Projects.css";
import { theme } from "../styles/theme";

function Projects() {
  return (
    <Container
      id="Projects"
      sx={{
        marginTop: '6rem',
        marginBottom: '2rem'
      }}
    >
      <Typography variant="h3" textAlign='center'>Personal Projects</Typography>
      <Box
        sx={{
          display: 'flex',
          gap: theme.spacing(2),
          marginTop: '2rem',
          justifyContent: 'space-evenly'
        }}
      >
        <Box>
          <Typography variant="h4" textAlign='center' marginBottom='1rem'>Food Picker</Typography>
          <Button sx={{ padding: 0 }} href="https://my-food-picker.web.app/" target="_blank">
            <img
              src={FoodPickerLogo}
              alt="Food Picker"
              id="food-picker-logo"
              class="project-image"
              style={{ boxShadow: theme.shadows[4] }}
            />
          </Button>
        </Box>
        <Box>
          <Typography variant="h4" textAlign='center' marginBottom='1rem'>Oscar Picker</Typography>
          <Button sx={{ padding: 0 }} href="https://oscarpicker-85422.firebaseapp.com/" target="_blank">
            <img
              src={OscarLogo}
              alt="Oscar Picker"
              id="oscar-picker-logo"
              class="project-image"
              style={{ boxShadow: theme.shadows[4] }}
            />
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Projects;