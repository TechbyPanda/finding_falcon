export default function findPlanetDistance(planets, planetName) {
  for (let planet of planets) {
    if (planetName === planet.name) return planet.distance;
  }
  return 0;
}
