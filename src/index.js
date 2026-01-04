import "./style.css"
import { getWeather } from "./getWeather.js";
getWeather()

const btnSearch = document.querySelector("#searchBtn")

btnSearch.addEventListener("click", () => {
  const searchBarValue = document.querySelector("#searchBar").value.split(' ').join("+")
  if (searchBarValue == "") {
    getWeather()
  }
  console.log(`Searching... ${searchBarValue}`)
  getWeather(searchBarValue)
})