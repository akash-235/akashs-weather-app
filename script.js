document.getElementById('getWeather').addEventListener('click', function() {
    const city = encodeURIComponent(document.getElementById('cityInput').value.trim());
    const apiKey = '5269142fa87509e1a0bbca46ebbb5860'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = `
                    <h2>Weather in ${data.name}</h2>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                `;
                document.getElementById('weatherDisplay').innerHTML = weatherInfo;
            } else {
                document.getElementById('weatherDisplay').innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            document.getElementById('weatherDisplay').innerHTML = `<p>Failed to retrieve data. Please try again later.</p>`;
        });
});
