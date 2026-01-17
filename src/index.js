import "./style.css"
import { getWeather } from "./getWeather.js";
import { displayWeather } from "./displayWeather.js";

let currentPlace = "Texas"
let currentUnit = "metric"

async function updateWeather() {
  try {
    const data = await getWeather(currentPlace, currentUnit)
    const unit = currentUnit === "metric" ? "°C" : "°F"
    displayWeather(data, unit)
  } catch (err) {
    alert(err.message)
  }
}

document.addEventListener("click", (e) => {
  if (e.target.id === "unitBtn") {
    currentUnit = currentUnit === "metric" ? "us" : "metric"
    updateWeather()
  }
})

const searchBar = document.querySelector("#searchBar")
const searchWeather = () => {
  if (searchBar.value.trim() !== "") {
    currentPlace = searchBar.value
      .split(/[ -]/).map(w => w.charAt(0)
        .toUpperCase() + w.slice(1)).join(" ")
    searchBar.value = ""
    updateWeather()
  }
}

document.querySelector("#searchBtn").addEventListener("click", searchWeather)
searchBar.addEventListener("keydown", (e) => e.key === "Enter" && searchWeather())

updateWeather()