export async function getWeather(unit = "metric", place = "Texas") {
  const API_KEY = "UBKPCGKX7RTGV7W8ACP2G2JMW"
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=${unit}&key=${API_KEY}`
  const response = await fetch(url)
  const weatherData = await response.json()
  return weatherData
}