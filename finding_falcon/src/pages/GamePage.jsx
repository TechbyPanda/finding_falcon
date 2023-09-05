import { Stack } from "@mui/material";
import Header from "../components/Header";
import PlanetList from "../components/PlanetList";
import TimeCard from "../components/TimeCard";

function GamePage() {
  return (
    <div>
      <Header />
      <PlanetList />
      <Stack
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={10}
      >
        <TimeCard/>
      </Stack>
    </div>
  );
}

export default GamePage;
