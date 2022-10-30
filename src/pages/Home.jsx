import Navbar from "../components/Navbar";
import Name from "../components/Name";
import Personal from "../components/Personal";
import Projects from "../components/Projects";
import School from "../components/School";
import { Box } from "@mui/system";

function Home() {
  return (
    <Box display={"flex"} flexDirection="column" gap="6rem" paddingBottom={'2rem'}>
      <Navbar />
      <Name />
      <Personal />
      <School />
      <Projects />
    </Box>
  )
}

export default Home;