export async function getWeather(place = "United+States") {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}/today?unitGroup=metric&key=UBKPCGKX7RTGV7W8ACP2G2JMW`
  const response = await fetch(url)
  const weatherData = await response.json()
  const weatherToday = weatherData.days[0].temp
  return weatherToday
}