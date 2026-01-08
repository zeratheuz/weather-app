export async function getWeather(place = "Texas") {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=metric&key=UBKPCGKX7RTGV7W8ACP2G2JMW`
  const response = await fetch(url)
  const weatherData = await response.json()
  return weatherData
}