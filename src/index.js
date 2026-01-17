import "./style.css"
import { getWeather } from "./getWeather.js";
import { displayWeather } from "./displayWeather.js";

let currentPlace = "Texas"
let currentUnit = "metric"

async function updateWeather() {
  try {
    const data = await getWeather(currentPlace, currentUnit)
    const unit = currentUnit === "metric" ? "C°" : "F°"
    displayWeather(data, unit)
  } catch(err) {
    alert(err.message)
  }
}

document.addEventListener("click", (e) => {
  if(e.target.id === "unitBtn") {
    currentUnit = currentUnit === "metric" ? "us" : "metric"
    updateWeather()
  }
})

const searchBar = document.querySelector("#searchBar")
const handleSearch = () => {
  if (searchBar.value.trim() !== "") {
    currentPlace = searchBar.value
    searchBar.value = ""
    updateWeather()
  }
}

document.querySelector("#searchBtn").addEventListener("click", handleSearch)
searchBar.addEventListener("keydown", (e) => e.key === "Enter" && handleSearch())

updateWeather()