export async function getWeather(place) {
  const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/curitiba/today?unitGroup=metric&keyy`=UBKPCGKX7RTGV7W8ACP2G2JMW")
  const weatherData = await response.json()
  console.log(weatherData.days[0].temp)
}