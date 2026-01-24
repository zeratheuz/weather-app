import { getIcon } from "./getIcon.js"

const container = document.querySelector("#container")

export async function displayWeather(data, unit) {
  const iconCode = data.days[0].icon
  const iconURL = await getIcon(iconCode)

  container.innerHTML = `
    <button id="unitBtn">${unit}</button>
    <h2 class="place">${data.address}</h2>
    <div class="weather">
    <p class="temp">${Math.round(data.days[0].temp)}°</p>
    <img src="${iconURL}" class="icon" alt="${iconCode}">
    </div>
    <div class="details">
      
      <div class="detail">
        <img src="${await getIcon("raindrops")}">
        <p class="humidity">Humidity: ${Math.round(data.days[0].humidity)}%</p>
      </div>
      
        <div class="detail">
          <img src="${await getIcon("thermometer")}">
          <p class="feelslike">Feels Like: ${Math.round(data.days[0].feelslike)}°</p>
        </div>
      
      <div class="detail">
        <img src="${iconURL}">
      <p class="conditions">${data.days[0].conditions}</p>
      </div>

      <div class="detail">
        <img src="${await getIcon("thermometer-colder")}">
        <p class="tempMaxAndMin">L: ${Math.round(data.days[0].tempmin)}°</p>
        <img src="${await getIcon("thermometer-warmer")}">
        <p>H: ${Math.round(data.days[0].tempmax)}°</p>
      </div>
    
      </div>
    `
}