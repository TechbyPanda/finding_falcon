import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function IndexPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Card sx={{margin: 2}}>
        <CardContent>
          <Typography variant="h5" component="div">
            Welcome to the Queen's Quest!
          </Typography>
          <Typography sx={{ mt: 2 }} color="text.secondary">
            🚀 Embark on an intergalactic adventure to find Queen Al Falcone and
            save the galaxy! 🌌
          </Typography>
          <Typography sx={{ mt: 2 }} color="text.secondary">
            Join King Shan's mission to locate Queen Al Falcone, who is in
            hiding on one of the planets.
          </Typography>
          <Typography sx={{ mt: 2 }} color="text.secondary">
            Use your strategic skills to choose the right planets and vehicles.
            May the force be with you! ✨
          </Typography>
          <Button
            sx={{ mt: 3 }}
            variant="contained"
            onClick={() => navigate("/game")}
            color="secondary"
          >
            Start the Quest
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default IndexPage;
