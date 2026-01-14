import { searchWeather } from "./searchWeather.js";

export async function displayWeather(unit = "metric") {
    const container = document.querySelector("#container")
    container.innerHTML = ""
    const weatherData = await searchWeather(unit)
    console.log(weatherData)

    const unitBtn = document.createElement("button")
    unitBtn.id = "unitBtn"

    if (unit == "metric") {
        unitBtn.textContent = "°C"
    } else {
        unitBtn.textContent = "°F"
    }

    unitBtn.addEventListener("click", () => {
        if (unitBtn.textContent === "°C") {
            unitBtn.textContent = "°F"
            displayWeather("us")
        } else {
            unitBtn.textContent = "°C"
            displayWeather("metric")
        }
    })

    const place = document.createElement("p")
    place.classList.add("place")
    place.textContent = weatherData.address

    const weather = document.createElement("p")
    weather.classList.add("weather")
    weather.textContent = `${Math.round(weatherData.days[0].temp)}°`

    const conditions = document.createElement("p")
    conditions.classList.add("conditions")
    conditions.textContent = weatherData.days[0].conditions

    const feelslike = document.createElement("p")
    feelslike.classList.add("feelslike")
    feelslike.textContent = `Feels Like: ${Math.round(weatherData.days[0].feelslike)}°`

    const humidity = document.createElement("p")
    humidity.classList.add("humidity")
    humidity.textContent = `Humidity: ${Math.round(weatherData.days[0].humidity)}%`

    const tempMaxAndMin = document.createElement("p")
    tempMaxAndMin.classList.add("tempMaxAndMin")
    tempMaxAndMin.textContent = `L: ${Math.round(weatherData.days[0].tempmin)}° H: ${Math.round(weatherData.days[0].tempmax)}°`


    container.appendChild(unitBtn)
    container.appendChild(place)
    container.appendChild(weather)
    container.appendChild(feelslike)
    container.appendChild(conditions)
    container.appendChild(humidity)
    container.appendChild(tempMaxAndMin)
}