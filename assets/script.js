let currentWeatherEl = document.querySelector("#current-weather");

let keyCode = ("e2c56b6bde1795bf35ad6fc3661ed5d2");
let searchBtn = document.querySelector("#searchBtn");
let searchCityInput = document.getElementById("searchCityInput");
let searchStateInput = document.getElementById("searchStateInput");
let searchCityHistory = [];
let searchHistoryContainer = document.querySelector("#previousSearch")
let clearHistory = document.getElementById("clearHistoryBtn");

let queryStringMap = ("?lat=") + ("&lon=") + + ("&appid=") + (keyCode);
let queryStringGeo = (searchCityInput) + ("&limit=5&appid=") + (keyCode)

let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};


function getCurrentWeather(cityName) {
    let geocoderApiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=e2c56b6bde1795bf35ad6fc3661ed5d2";

    fetch(geocoderApiUrl)
        .then(function (response) {
            if (response.ok) {

                response.json().then(function (data) {
                    // This calls the display function for the current weather data.

                    let currentWeatherApiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + data[0].lat + "&lon=" + data[0].lon + "&appid=e2c56b6bde1795bf35ad6fc3661ed5d2&units=imperial";

                    fetch(currentWeatherApiUrl)
                        .then(function (response) {
                            if (response.ok) {
                                response.json().then(function (data) {

                                    displayCurrentWeather(data);
                                })
                            }
                        })

                });

            } else {
                console.log("Error: " + response.status);
            }
        });
}

function getCityParams() {
    // Get the search params out of the URL.
    var searchCityParams = document.location.search.split('{lat}') & ('{lon}');

    // Get the city values.
    var city = searchCityParams[1].split('=').pop();
}

// This function displays the current weather data.
function displayCurrentWeather(data) {
    let city = data.city.name;
    let date = new Date(data.list[0].dt * 1000).toLocaleDateString('en-US', options);
    console.log(data);
    let iconUrl = "https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";

    let temp = data.list[0].main.temp;
    let humidity = data.list[0].main.humidity;
    let windSpeed = data.list[0].wind.speed;

    let html = "<h2>" + city + "</h2>" + "<h3>(" + date + ")</h3>" + "<img src='" +
        iconUrl + "' alt='" + iconUrl + "'>" + "<p>Temperature: " + temp +
        " &deg;F</p>" + "<p>Humidity: " + humidity + "%</p>" + "<p>Wind Speed: " +
        windSpeed + " mph</p>";

    currentWeatherEl.innerHTML = html;
    currentWeatherEl.classList.add("current-weather");
}

function getForecast(cityName) {
    let geocoderApiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=e2c56b6bde1795bf35ad6fc3661ed5d2";

    fetch(geocoderApiUrl)
        .then(function (response) {
            if (response.ok) {

                response.json().then(function (data) {
                    // This calls the display function for the current weather data.

                    let forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + data[0].lat + "&lon=" + data[0].lon + "&appid=e2c56b6bde1795bf35ad6fc3661ed5d2&units=imperial";

                    fetch(forecastApiUrl)
                        .then(function (response) {
                            if (response.ok) {
                                response.json().then(function (data) {
                                    displayForecast(data);

                                })
                            }

                        })

                });


            } else {
                console.log("Error: " + response.status);
            }
        });
}