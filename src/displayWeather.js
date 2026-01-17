const container = document.querySelector("#container")

export async function displayWeather(data, unit) {

    container.innerHTML = `
    <button id="unitBtn">${unit}</button>
    <p class="place">${data.address}</p>
    <p class="weather">${Math.round(data.days[0].temp)}°</p>
    <p class="feelslike">Feels Like: ${Math.round(data.days[0].feelslike)}°</p>
    <p class="conditions">${data.days[0].conditions}</p>
    <p class="humidity">humidity: ${Math.round(data.days[0].humidity)}%</p>
    <p class="tempMaxAndMin">L: ${Math.round(data.days[0].tempmin)}° H: ${Math.round(data.days[0].tempmax)}°</p>
    `
}