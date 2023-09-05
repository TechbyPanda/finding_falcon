import React, { useEffect, useState } from "react";
import {
  Container,
  Stack,
  Button,
  CardActionArea,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { spaceShipImages } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles } from "../actions/vehicleActions";
import VehicleCard from "./VehicleCard";
import { setLaunchVehicle } from "../actions/destinationActions";
import { toast } from "react-toastify";

function VehicleList({ open, onClose, planet }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.vehicles);
  const { launchVehicles } = useSelector((state) => state.destinations);
  const [value, setValue] = useState(launchVehicles[planet.name] || "");

  const handleLaunchVehicle = () => {
    dispatch(setLaunchVehicle(planet.name, value));
    toast.success("Space ship is added.");
    onClose(false);
  };

  const show = (vehicle) => {
    return (
      planet.distance <= vehicle.max_distance &&
      (countUsedVehicles(vehicle.name) < vehicle.total_no ||
        launchVehicles[planet.name] === vehicle.name)
    );
  };

  const countUsedVehicles = (vehicleName) => {
    let count = 0;
    for (const usedVehicle of Object.values(launchVehicles)) {
      if (usedVehicle === vehicleName) {
        count++;
      }
    }
    return count;
  };

  const filteredVehicles = data.filter((vehicle) => show(vehicle));
  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={() => onClose(false)}
      aria-labelledby="responsive-dialog-title"
    >
      <Container>
        <DialogTitle id="responsive-dialog-title">
          🌍 {planet.name} at distance {planet.distance} 🛸
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            {filteredVehicles.length === 0 && (
              <Typography variant="h5" align="center">
                Oops! No Vehicle 😮
              </Typography>
            )}
            {filteredVehicles.map((vehicle, index) => (
              <CardActionArea
                key={`${index}-sp`}
                className={value === vehicle.name ? "selected" : ""}
                onClick={() => setValue(vehicle.name)}
              >
                <VehicleCard image={spaceShipImages[index]} vehicle={vehicle} />
              </CardActionArea>
            ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            color="success"
            onClick={handleLaunchVehicle}
            disabled={!value}
          >
            Save
          </Button>
          <Button
            color="error"
            onClick={() => {
              setValue(launchVehicles[planet.name] || "");
              onClose(false);
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Container>
    </Dialog>
  );
}

export default VehicleList;
