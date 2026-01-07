import { searchWeather } from "./searchWeather.js";

export async function displayWeather() {
  const container = document.querySelector("#container")
  container.innerHTML = await searchWeather() + "°C"
}