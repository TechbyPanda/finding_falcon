import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findFalconAction,
  resetFindFalconAction,
} from "../actions/findFalconActions";
import { useNavigate } from "react-router-dom";
import { Card, Typography, Button } from "@mui/material";
import Loader from "../components/Loader";
import { resetDestinations } from "../actions/destinationActions";

function Final() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { destinations, launchVehicles } = useSelector(
    (state) => state.destinations
  );
  const findFalcon = useSelector((state) => state.findFalcon);

  function find() {
    let vehicles = [];
    for (let dest of destinations) {
      vehicles.push(launchVehicles[dest]);
    }

    if (destinations.length !== 4 || vehicles.length !== 4) {
      navigate("/game");
      return;
    }

    dispatch(findFalconAction(destinations, vehicles));
  }

  function restart() {
    dispatch(resetDestinations());
    dispatch(resetFindFalconAction());
    navigate("/");
  }

  useEffect(() => {
    find();
  }, []);

  return (
    <div
      className="final-box d-flex justify-center align-item-center"
      style={{
        backgroundColor:
          findFalcon.data.status === "success" ? "greenyellow" : "red",
      }}
    >
      {findFalcon.loading ? (
        <Loader />
      ) : (
        <Card
          sx={{
            width: "350px",
            height: "300px",
            padding: "10px",
          }}
          className="d-flex justify-center align-item-center flex-direction-column gap2"
        >
          <Typography variant="h5" color="success" align="center">
            {findFalcon.data.status === "success"
              ? `🥳 Hurray! You found the Queen Falcon in ${findFalcon.data.planet_name}!`
              : "Ooh 😛 You didn't find the falcon"}
          </Typography>
          <Button onClick={restart} variant="contained" color="secondary">
            Restart
          </Button>
        </Card>
      )}
    </div>
  );
}

export default Final;
