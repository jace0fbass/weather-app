// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd MMMM Do, YYYY"));
console.log(currentDay.format("dddd MMMM Do, YYYY"));

async function getCityWeatherInfo(cityName) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=fe6203bc0aed338120f1ad06f08effe6`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $("#cityAndDate").text(`${data.name} ${data.main.temp}°`);
      $("#feelsLike").text(`Feels like: ${data.main.feels_like}°`);
      $("#humidity").text(`Humidity: ${data.main.humidity}%`);
      $("#windSpeed").text(`Wind Speed: ${data.wind.speed}mph`);
      $("#description").text(`Sky: ${data.weather[0].main}`);
      // ATTEMPTING TO GET THE 5 DAY INFO AT THE SAME TIME BUT AM DOING IT WRONG.
      getForecast(cityName);
      console.log("getForecast ran inside of getCityWeatherInfo");
    });
}

const searchBtn = $("#searchBtn");
const cityInput = $("#cityInput");
searchBtn.click(function () {
  const cityValue = cityInput.val();
  getCityWeatherInfo(cityValue);
  console.log("gCWI: City searched for: " + cityValue);
});

function getForecast(cityName) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&exclude=current,minutely,hourly,alerts&units=imperial&appid=eae798b284ccde933e01fec4c703c7d6`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log("Forecast API fetch works");

      $("#day1").text(
        `${data.list[2].dt_txt.split(" ")[0]} High:${
          data.list[2].main.temp_max
        }° Feel:${data.list[2].main.feels_like}° Humidity:${
          data.list[2].main.humidity
        }% Wind:${data.list[2].wind.speed}mph`
      );
      console.log(data);

      $("#day2").text(
        `${data.list[10].dt_txt.split(" ")[0]} High:${
          data.list[10].main.temp_max
        }° Feel:${data.list[10].main.feels_like}° Humidity:${
          data.list[10].main.humidity
        }% Wind:${data.list[10].wind.speed}mph`
      );
      console.log(data);

      $("#day3").text(
        `${data.list[18].dt_txt.split(" ")[0]} High:${
          data.list[18].main.temp_max
        }° Feel:${data.list[18].main.feels_like}° Humidity:${
          data.list[18].main.humidity
        }% Wind:${data.list[18].wind.speed}mph`
      );
      console.log(data);

      $("#day4").text(
        `${data.list[26].dt_txt.split(" ")[0]} High:${
          data.list[26].main.temp_max
        }° Feel:${data.list[26].main.feels_like}° Humidity:${
          data.list[26].main.humidity
        }% Wind:${data.list[26].wind.speed}mph`
      );
      console.log(data);

      $("#day5").text(
        `${data.list[34].dt_txt.split(" ")[0]} High:${
          data.list[34].main.temp_max
        }° Feel:${data.list[34].main.feels_like}° Humidity:${
          data.list[34].main.humidity
        }% Wind:${data.list[34].wind.speed}mph`
      );
      console.log(data);
      console.log("Day1-5 forecast displayed");
    });
}
const day1 = $("#day1");
const day2 = $("#day2");
const day3 = $("#day3");
const day4 = $("#day4");
const day5 = $("#day5");

// LEFT SIDE BUTTONS
// need 5 day forecast results
async function atlantaSearch() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=33.75&lon=-84.38&units=imperial&appid=fe6203bc0aed338120f1ad06f08effe6`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $("#cityAndDate").text(`${data.name} ${data.main.temp}°`);
      $("#feelsLike").text(`Feels like: ${data.main.feels_like}°`);
      $("#humidity").text(`Humidity: ${data.main.humidity}%`);
      $("#windSpeed").text(`Wind Speed: ${data.wind.speed}mph`);
      $("#description").text(`Sky: ${data.weather[0].main}`);
    });
}
const cityBtn1 = $("#cityBtn1");
const atlantaClicked = $("#cityBtn1");
cityBtn1.click(function () {
  const cityValue = cityBtn1.val();
  if (atlantaClicked) {
    atlantaSearch(cityValue);
    {
      getForecast();
    }
  }
  console.log("Atlanta clicked");
});

async function denverSearch() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=39.742043&lon=-104.991531&exclude=hourly,daily&units=imperial&appid=fe6203bc0aed338120f1ad06f08effe6`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $("#cityAndDate").text(`${data.name} ${data.main.temp}°`);
      $("#feelsLike").text(`Feels like: ${data.main.feels_like}°`);
      $("#humidity").text(`Humidity: ${data.main.humidity}%`);
      $("#windSpeed").text(`Wind Speed: ${data.wind.speed}mph`);
      $("#description").text(`Sky: ${data.weather[0].main}`);
    });
}
const cityBtn2 = $("#cityBtn2");
lat = 39.742043;
lon = -104.991531;
const denverClicked = $("#cityBtn2");
cityBtn2.click(function () {
  const cityValue = cityBtn2.val();
  if (denverClicked) {
    denverSearch(cityValue);
    {
      getForecast();
    }
  }
  console.log("Denver clicked");
});

async function seattleSearch() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=47.620422&lon=-122.335167&exclude=hourly,daily&units=imperial&appid=fe6203bc0aed338120f1ad06f08effe6`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $("#cityAndDate").text(`${data.name} ${data.main.temp}°`);
      $("#feelsLike").text(`Feels like: ${data.main.feels_like}°`);
      $("#humidity").text(`Humidity: ${data.main.humidity}%`);
      $("#windSpeed").text(`Wind Speed: ${data.wind.speed}mph`);
      $("#description").text(`Sky: ${data.weather[0].main}`);
    });
}
const cityBtn3 = $("#cityBtn3");
lat = 47.620422;
lon = -122.335167;
const seattleClicked = $("#cityBtn3");
cityBtn3.click(function () {
  const cityValue = cityBtn3.val();
  if (seattleClicked) {
    seattleSearch(cityValue);
    {
      getForecast(atlantaSearch());
    }
  }
  console.log("Seattle clicked");
});

async function sanfranciscoSearch() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=37.773972&lon=-122.43&exclude=hourly,daily&units=imperial&appid=fe6203bc0aed338120f1ad06f08effe6`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $("#cityAndDate").text(`${data.name} ${data.main.temp}°`);
      $("#feelsLike").text(`Feels like: ${data.main.feels_like}°`);
      $("#humidity").text(`Humidity: ${data.main.humidity}%`);
      $("#windSpeed").text(`Wind Speed: ${data.wind.speed}mph`);
      $("#description").text(`Sky: ${data.weather[0].main}`);
    });
}
const cityBtn4 = $("#cityBtn4");
lat = 37.773972;
lon = -122.431297;
const sanfranciscoClicked = $("#cityBtn4");
cityBtn4.click(function () {
  const cityValue = cityBtn4.val();
  if (sanfranciscoClicked) {
    sanfranciscoSearch(cityValue);
    {
      getForecast();
    }
  }
  console.log("San Francisco clicked");
});

async function orlandoSearch() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=28.538336&lon=-81.379234&exclude=hourly,daily&units=imperial&appid=fe6203bc0aed338120f1ad06f08effe6`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $("#cityAndDate").text(`${data.name} ${data.main.temp}°`);
      $("#feelsLike").text(`Feels like: ${data.main.feels_like}°`);
      $("#humidity").text(`Humidity: ${data.main.humidity}%`);
      $("#windSpeed").text(`Wind Speed: ${data.wind.speed}mph`);
      $("#description").text(`Sky: ${data.weather[0].main}`);
    });
}
const cityBtn5 = $("#cityBtn5");
lat = 28.538336;
lon = -81.379234;
const orlandoClicked = $("#cityBtn5");
cityBtn5.click(function () {
  const cityValue = cityBtn5.val();
  if (orlandoClicked) {
    orlandoSearch(cityValue);
    {
      getForecast();
    }
  }
  console.log("Orlando clicked");
});

async function bostonSearch() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=42.361145&lon=-71.057083&exclude=hourly,daily&units=imperial&appid=fe6203bc0aed338120f1ad06f08effe6`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $("#cityAndDate").text(`${data.name} ${data.main.temp}°`);
      $("#feelsLike").text(`Feels like: ${data.main.feels_like}°`);
      $("#humidity").text(`Humidity: ${data.main.humidity}%`);
      $("#windSpeed").text(`Wind Speed: ${data.wind.speed}mph`);
      $("#description").text(`Sky: ${data.weather[0].main}`);
    });
}
const cityBtn6 = $("#cityBtn6");
lat = 42.361145;
lon = -71.057083;
const bostonClicked = $("#cityBtn6");
cityBtn6.click(function () {
  const cityValue = cityBtn6.val();
  if (bostonClicked) {
    bostonSearch(cityValue);
    {
      getForecast();
    }
  }
  console.log("Boston clicked");
});

async function austinSearch() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=30.266666&lon=-97.73333&exclude=hourly,daily&units=imperial&appid=fe6203bc0aed338120f1ad06f08effe6`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $("#cityAndDate").text(`${data.name} ${data.main.temp}°`);
      $("#feelsLike").text(`Feels like: ${data.main.feels_like}°`);
      $("#humidity").text(`Humidity: ${data.main.humidity}%`);
      $("#windSpeed").text(`Wind Speed: ${data.wind.speed}mph`);
      $("#description").text(`Sky: ${data.weather[0].main}`);
    });
}
const cityBtn7 = $("#cityBtn7");
lat = 30.266666;
lon = -97.73333;
const austinClicked = $("#cityBtn7");
cityBtn7.click(function () {
  const cityValue = cityBtn7.val();
  if (austinClicked) {
    austinSearch(cityValue);
    {
      getForecast();
    }
  }
  console.log("Austin clicked");
});

async function chicagoSearch() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=41.881832&lon=-87.623177&exclude=hourly,daily&units=imperial&appid=fe6203bc0aed338120f1ad06f08effe6`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $("#cityAndDate").text(`${data.name} ${data.main.temp}°`);
      $("#feelsLike").text(`Feels like: ${data.main.feels_like}°`);
      $("#humidity").text(`Humidity: ${data.main.humidity}%`);
      $("#windSpeed").text(`Wind Speed: ${data.wind.speed}mph`);
      $("#description").text(`Sky: ${data.weather[0].main}`);
    });
}
const cityBtn8 = $("#cityBtn8");
lat = 41.881832;
lon = -87.623177;
const chicagoClicked = $("#cityBtn8");
cityBtn8.click(function () {
  const cityValue = cityBtn8.val();
  if (chicagoClicked) {
    chicagoSearch(cityValue);
    {
      getForecast();
    }
  }
  console.log("Chicago clicked");
});

//local storage for search history
// $("#searchHistory").click(function () {
//   var searchedCities = $("#textarea").val();
//   localStorage.setItem("search-history", searchedCities);
// });
// $("#searchHistory").val(localStorage.getItem("search-history"));
