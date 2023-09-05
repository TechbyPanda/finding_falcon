import {
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  CardActions,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { findPlanetDistance, findVehicleSpeed } from "../util";
import { useNavigate } from "react-router-dom";

function TimeCard() {
  const [timeTaken, setTimeTaken] = useState(0);
  const vehicles = useSelector((state) => state.vehicles);
  const planets = useSelector((state) => state.planets);
  const destinations = useSelector((state) => state.destinations);
  const navigation = useNavigate();

  function calculateTime() {
    let totalTime = 0;
    for (let dest of destinations.destinations) {
      let distance = findPlanetDistance(planets.data, dest);
      let speed = findVehicleSpeed(vehicles.data, destinations.launchVehicles[dest]);

      if (speed === 0) break;

      totalTime += distance / speed;
    }
    setTimeTaken(totalTime);
  }

  const readyToLaunch = () => destinations.destinations.length === 4 
    && Object.keys(destinations.launchVehicles).length === 4;

  useEffect(() => {
    calculateTime();
  }, [destinations]);

  return (
    <Card align="center">
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          Time Taken: {timeTaken} hours
        </Typography>
        <Divider />
      </CardContent>
      <CardActions>
        <Button onClick={() => navigation('/final')} sx={{ margin: "auto" }} variant="contained" color="secondary" disabled={!readyToLaunch()}>
          Launch Vehicle
        </Button>
      </CardActions>
    </Card>
  );
}

export default TimeCard;
