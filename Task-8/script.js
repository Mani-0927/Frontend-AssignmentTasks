async function getWeather() {
  const city = document.getElementById("cityInput").value
  const key = "2a51129f5721937d6b8d85967d981fe7"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`

  const res = await fetch(url)
  if (!res.ok) {
    document.getElementById("result").textContent = "Invalid city"
    return
  }

  const data = await res.json()
  document.getElementById("result").textContent =
    `${data.main.temp}°C | Humidity: ${data.main.humidity}% | ${data.weather[0].main}`
}