export function getPercents(percent, number) {
  if (typeof percent !== "number" || typeof number !== "number")
    return "At least one parameter is not a number";

  return parseFloat(((Math.abs(number) / 100) * Math.abs(percent)).toFixed(2));
}
