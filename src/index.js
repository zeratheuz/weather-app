import "./style.css"
import { displayWeather } from "./displayWeather.js";

displayWeather()

const searchBar = document.querySelector("#searchBar")
const searchBtn = document.querySelector("#searchBtn")

searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    displayWeather()
  }
})
searchBtn.addEventListener("click", () => displayWeather())