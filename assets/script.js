let currentWeatherEl = document.querySelector("#current-weather");

let keyCode = ("e2c56b6bde1795bf35ad6fc3661ed5d2");
let searchBtn = document.querySelector("#searchBtn");
let searchCityInput = document.getElementById("searchCityInput");
let searchStateInput = document.getElementById("searchStateInput");
let searchCityHistory = [];
let searchHistoryContainer = document.querySelector("#previousSearch")

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

function getForecast2(cityName) {
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
                                    displayForecast2(data);

                                })
                            }

                        })

                });


            } else {
                console.log("Error: " + response.status);
            }
        });
}
function getForecast3(cityName) {
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
                                    displayForecast3(data);

                                })
                            }

                        })

                });


            } else {
                console.log("Error: " + response.status);
            }
        });
}

function getForecast4(cityName) {
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
                                    displayForecast4(data);

                                })
                            }

                        })

                });


            } else {
                console.log("Error: " + response.status);
            }
        });
}

function getForecast5(cityName) {
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
                                    displayForecast5(data);

                                })
                            }

                        })

                });


            } else {
                console.log("Error: " + response.status);
            }
        });
}

function displayForecast(data) {
    let city = data.city.name;
    let date = new Date(data.list[6].dt * 1000).toLocaleDateString('en-US', options);
    let forecastEl = document.querySelector("#forecast");
    let iconUrl = "https://openweathermap.org/img/w/" + data.list[6].weather[0].icon + ".png";

    let temp = data.list[6].main.temp;
    let humidity = data.list[6].main.humidity;
    let windSpeed = data.list[6].wind.speed;

    let html = "<h2>" + city + "</h2>" + "<h3>(" + date + ")</h3>" + "<img src='" +
        iconUrl + "' alt='" + iconUrl + "'>" + "<p>Temperature: " + temp +
        " &deg;F</p>" + "<p>Humidity: " + humidity + "%</p>" + "<p>Wind Speed: " +
        windSpeed + " mph</p>";

    forecastEl.innerHTML = html;
}
//forecast2//
function displayForecast2(data) {
    let city = data.city.name;
    let date2 = new Date(data.list[12].dt * 1000).toLocaleDateString('en-US', options);
    let forecastEl2 = document.querySelector("#forecast2");
    let iconUrl2 = "https://openweathermap.org/img/w/" + data.list[12].weather[0].icon + ".png";

    forecastEl2.classList.add("forecast2");
    let temp2 = data.list[12].main.temp;
    let humidity2 = data.list[12].main.humidity;
    let windSpeed2 = data.list[12].wind.speed;

    let html2 = "<h2>" + city + "</h2>" + "<h3>(" + date2 + ")</h3>" + "<img src='" +
        iconUrl2 + "' alt='" + iconUrl2 + "'>" + "<p>Temperature: " + temp2 +
        " &deg;F</p>" + "<p>Humidity: " + humidity2 + "%</p>" + "<p>Wind Speed: " +
        windSpeed2 + " mph</p>";

    forecastEl2.innerHTML = html2;

}

//forecast3//
function displayForecast3(data) {
    let city = data.city.name;
    let date3 = new Date(data.list[24].dt * 1000).toLocaleDateString('en-US', options);
    let forecastEl3 = document.querySelector("#forecast3");
    let iconUrl3 = "https://openweathermap.org/img/w/" + data.list[24].weather[0].icon + ".png";

    forecastEl3.classList.add("forecast3");
    let temp3 = data.list[24].main.temp;
    let humidity3 = data.list[24].main.humidity;
    let windSpeed3 = data.list[24].wind.speed;

    let html3 = "<h2>" + city + "</h2>" + "<h3>(" + date3 + ")</h3>" + "<img src='" +
        iconUrl3 + "' alt='" + iconUrl3 + "'>" + "<p>Temperature: " + temp3 +
        " &deg;F</p>" + "<p>Humidity: " + humidity3 + "%</p>" + "<p>Wind Speed: " +
        windSpeed3 + " mph</p>";

    forecastEl3.innerHTML = html3;

}

//forecast4//
function displayForecast4(data) {
    let city = data.city.name;
    let date4 = new Date(data.list[30].dt * 1000).toLocaleDateString('en-US', options);
    let forecastEl4 = document.querySelector("#forecast4");
    let iconUrl4 = "https://openweathermap.org/img/w/" + data.list[30].weather[0].icon + ".png";

    forecastEl4.classList.add("forecast4");
    let temp4 = data.list[30].main.temp;
    let humidity4 = data.list[30].main.humidity;
    let windSpeed4 = data.list[30].wind.speed;

    let html4 = "<h2>" + city + "</h2>" + "<h3>(" + date4 + ")</h3>" + "<img src='" +
        iconUrl4 + "' alt='" + iconUrl4 + "'>" + "<p>Temperature: " + temp4 +
        " &deg;F</p>" + "<p>Humidity: " + humidity4 + "%</p>" + "<p>Wind Speed: " +
        windSpeed4 + " mph</p>";

    forecastEl4.innerHTML = html4;

}

//forecast5//
function displayForecast5(data) {
    let city = data.city.name;
    let date5 = new Date(data.list[39].dt * 1000).toLocaleDateString('en-US', options);
    let forecastEl5 = document.querySelector("#forecast5");
    let iconUrl5 = "https://openweathermap.org/img/w/" + data.list[39].weather[0].icon + ".png";

    forecastEl5.classList.add("forecast5");
    let temp5 = data.list[39].main.temp;
    let humidity5 = data.list[39].main.humidity;
    let windSpeed5 = data.list[39].wind.speed;

    let html5 = "<h2>" + city + "</h2>" + "<h3>(" + date5 + ")</h3>" + "<img src='" +
        iconUrl5 + "' alt='" + iconUrl5 + "'>" + "<p>Temperature: " + temp5 +
        " &deg;F</p>" + "<p>Humidity: " + humidity5 + "%</p>" + "<p>Wind Speed: " +
        windSpeed5 + " mph</p>";

    forecastEl5.innerHTML = html5;

}

//Event Listener- Event happens when button is clicked//
searchBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const searchCityStoring = (searchCityInput.value);

    searchCityHistory = JSON.parse(localStorage.getItem("searchCityInput")) || [];
    searchCityHistory.push(searchCityStoring);
    console.log(localStorage)
    if (!searchCityStoring || undefined) {
        return;
    }
    getCurrentWeather(searchCityStoring);
    localStorage.setItem;

    getForecast(searchCityStoring);
    localStorage.setItem;

    getForecast2(searchCityStoring);
    localStorage.setItem;

    getForecast3(searchCityStoring);
    localStorage.setItem;

    getForecast4(searchCityStoring);
    localStorage.setItem;

    getForecast5(searchCityStoring);
    localStorage.setItem;


let searchHistoryHtml = "<h3>Search History</h3>";

searchCityHistory.forEach(function (localStorage) {
    searchHistoryHtml += "<button class=button>" + searchCityStoring + "</button>";
});

searchHistoryContainer.innerHTML = searchHistoryHtml;

});

