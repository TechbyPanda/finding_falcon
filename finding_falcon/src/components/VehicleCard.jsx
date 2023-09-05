import { Card, CardMedia } from "@mui/material";

function VehicleCard({ image, vehicle }) {
  
  return (
    <Card className="ship-card">
      <CardMedia image={image} className="ship-card-image" />
      <div className="ship-card-content">
        <h5>{vehicle.name}</h5>
        <p>Max Distance: {vehicle.max_distance} | Speed: {vehicle.speed}</p>
      </div>
    </Card>
  );
}

export default VehicleCard;
