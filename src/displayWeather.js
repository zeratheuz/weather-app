import { getIcon } from "./getIcon.js"

const container = document.querySelector("#container")

export async function displayWeather(data, unit) {
    const iconCode = data.days[0].icon
    const iconURL = await getIcon(iconCode)

    container.innerHTML = `
    <button id="unitBtn">${unit}</button>
    <p class="place">${data.address}</p>
    <div class="weather">
    <p class="temp">${Math.round(data.days[0].temp)}°</p>
    <img src="${iconURL}" class="icon" alt="${iconCode}">
    </div>
    <p class="humidity">Humidity: ${Math.round(data.days[0].humidity)}%</p>
    <p class="conditions">${data.days[0].conditions}</p>
    <p class="feelslike">Feels Like: ${Math.round(data.days[0].feelslike)}°</p>
    <p class="tempMaxAndMin">L: ${Math.round(data.days[0].tempmin)}° H: ${Math.round(data.days[0].tempmax)}°</p>
    `
}