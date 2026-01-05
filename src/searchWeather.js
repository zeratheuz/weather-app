import { getWeather } from "./getWeather.js";

export function searchWeather() {
  const searchBarValue = document.querySelector("#searchBar").value.split(' ').join("+")
  if (searchBarValue == "") {
    getWeather()
  }
  console.log(`Searching... ${searchBarValue}`)
  getWeather(searchBarValue)
} 