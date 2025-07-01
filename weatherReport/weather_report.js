function showweatherDetails(event) {
    event.preventDefault();
  
    const lat = document.getElementById('lat').value.trim();
    const lon = document.getElementById('lon').value.trim();
    const apiKey = '97135b6826c3c83ec16dde573ca63116';
    const weatherInfo = document.getElementById('weatherInfo');
  
    if (lat === '' || lon === '') {
      weatherInfo.innerHTML = '<p>Please enter both latitude and longitude.</p>';
      return;
    }
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    weatherInfo.innerHTML = 'Loading weather data...';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Unable to retrieve weather data");
        }
        return response.json();
      })
      .then(data => {
        weatherInfo.innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature: ${data.main.temp} &#8451;</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
      })
      .catch(error => {
        console.error('Weather fetch error:', error);
        weatherInfo.innerHTML = '<p>Failed to load weather data. Please check your input and try again.</p>';
      });
  }
  
  document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
  