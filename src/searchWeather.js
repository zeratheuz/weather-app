import { getWeather } from "./getWeather.js";

export async function searchWeather(unit) {
  const searchBarValue = document.querySelector("#searchBar").value
  .split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
  if (searchBarValue == "") {
    return await getWeather(unit)
  }
  return await getWeather(unit, searchBarValue)
} 