export default function findVehicleSpeed(vehicles, vehicleName) {
  if (!vehicleName) return 0;

  for (let vehicle of vehicles) {
    if (vehicleName === vehicle.name) return vehicle.speed;
  }
  return 0;
}
