window.addEventListener('DOMContentLoaded', (event) => {
       // Замените 'YOUR_API_KEY' на ваш собственный API-ключ OpenWeatherMap
    const apiKey = 'd77e8a80bfcc7551c3135a39d716ce92';

// Замените 'CITY_NAME' на название города, для которого вы хотите получить прогноз погоды
    const weatherElement = document.getElementById('weather');
    const iconw = document.getElementById('img');
    const cityNameElement = document.getElementById('city');
    const cityInput = document.getElementById('cityInput');

    function getWeather() {
        const city = cityInput.value || 'Odessa';
 // // Формируем URL для запроса к API OpenWeatherMap
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 // Отправляем GET-запрос к API
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const icon = data.weather[0].icon;

                cityNameElement.innerText = data.name + " Страна: " + `${data.sys.country}`;
                iconw.src = `https://openweathermap.org/img/wn/${icon}.png`;
                weatherElement.innerHTML = `Текущая температура: ${temperature}°C<br>Описание: ${description}`;
            })
            .catch((error) => {
                console.error('Произошла ошибка:', error);
            });
    }

    getWeather();
    window.getWeather = getWeather;
});