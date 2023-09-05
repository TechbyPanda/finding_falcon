import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlanets } from "../actions/planetActions";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Planet from "./Planet";
import { planetImages } from "../constants";
import Loader from "./Loader";
import { toast } from "react-toastify";

function PlanetList() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.planets);

  useEffect(() => {
    dispatch(fetchPlanets());
  }, [dispatch]);

  if(error){
    toast.error("Oops! Unable to fetch planets");
  }

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: 10 }}>
        {loading ? (
          <Loader/>
        ) : (
          <Grid container spacing={2}>
            {data.map((planet, index) => (
              <Planet
                key={planet.name + "-p" + index}
                planet={planet}
                image={planetImages[index]}
              />
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
}

export default PlanetList;
