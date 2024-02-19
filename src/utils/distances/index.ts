export function calculateDistance(
  fromLat: number,
  fromLng: number,
  toLat: number,
  toLng: number,
): number {
  const R = 6371e3;
  const firstPhi = toRadians(fromLat);
  const secondPhi = toRadians(toLat);

  const deltaPhi = secondPhi - firstPhi;
  const deltaLambda = toRadians(toLng - fromLng);

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(firstPhi) *
      Math.cos(secondPhi) *
      Math.sin(deltaLambda / 2) *
      Math.sin(deltaLambda / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

function toRadians(angle: number) {
  return (angle * Math.PI) / 180;
}
