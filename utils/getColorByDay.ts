import { useState } from "react";

const getColorByDay = () => {
  // Array of colors
  const colors = ["red", "green", "yellow", "blue", "orange", "pink", "black"];

  // Get the current day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  const dayOfWeek = new Date().getDay();

  // Return the color corresponding to the current day
  return colors[dayOfWeek];
};

export default getColorByDay;
