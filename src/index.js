import "./style.css"
import { getWeather } from "./getWeather.js";
import { searchWeather } from "./searchWeather.js";

getWeather()

const searchBar = document.querySelector("#searchBar")
const searchBtn = document.querySelector("#searchBtn")

searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchWeather()
  }
})
searchBtn.addEventListener("click", () => searchWeather())