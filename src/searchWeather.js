import { getWeather } from "./getWeather.js";

export async function searchWeather() {
  const searchBarValue = document.querySelector("#searchBar").value.split(' ').join("+")
  if (searchBarValue == "") {
    return await getWeather()
  }
  return await getWeather(searchBarValue)
} 