import {
  Grid,
  Tooltip,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Checkbox,
} from "@mui/material";
import VehicleList from "./VehicleList";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addDestinations, removeDestinations } from "../actions/destinationActions";
import { toast } from "react-toastify";

function Planet({ planet, image }) {
  const [open, setOpen] = useState(false);
  const { destinations, launchVehicles } = useSelector((state) => state.destinations);

  const dispatch = useDispatch();

  const handleDestination = () => {
    if(destinations.includes(planet.name)){
        dispatch(removeDestinations(planet.name));
        toast.success("Planet is removed successfully.");
    }else if(destinations.length < 4){
        dispatch(addDestinations(planet.name));
        toast.success("Planet is added successfully.");
    }else{
      toast.info("You cannot select more than four planets.");
    }
  }

  return (
    <>
      <Grid
        item
        lg={3}
        xl={2}
        md={4}
        sm={6}
        xs={12}
        alignItems="center"
        justifyContent="center"
      >
        <Card className="planet_card">
          <CardMedia className="planet_image" image={image} />
          <CardContent>
            <Typography variant="h5" component="div">
              {planet.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Tooltip title="Select planet">
              <Checkbox color="secondary" checked={destinations.includes(planet.name)} onClick={handleDestination}/>
            </Tooltip>
            <Button color={launchVehicles[planet.name] ? 'success' : 'secondary'} disabled={!destinations.includes(planet.name)} onClick={() => setOpen(true)}>
              {launchVehicles[planet.name] ? 'Ready to launch' : 'Space Ship'}
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <VehicleList onClose={setOpen} open={open} planet={planet}/>
    </>
  );
}

export default Planet;
