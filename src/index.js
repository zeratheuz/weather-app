import "./style.css"
import { displayWeather } from "./displayWeather.js";

let unit = "metric"
displayWeather(unit)

const searchBar = document.querySelector("#searchBar")
const searchBtn = document.querySelector("#searchBtn")

searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    displayWeather()
  }
})
searchBtn.addEventListener("click", () => displayWeather(unit))