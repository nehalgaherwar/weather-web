const apiKey = "YOUR_API_KEY_HERE";

function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (city === "") {
    alert("Please enter city name");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("city").innerText = data.name;
      document.getElementById("temp").innerText = "🌡️ Temperature: " + data.main.temp + " °C";
      document.getElementById("condition").innerText = "☁️ Weather: " + data.weather[0].main;
      document.getElementById("humidity").innerText = "💧 Humidity: " + data.main.humidity + "%";
      document.getElementById("wind").innerText = "🌬️ Wind Speed: " + data.wind.speed + " m/s";
    })
    .catch(() => {
      alert("City not found!");
    });
}
