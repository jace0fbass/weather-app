// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// Give search button functionality.
// display

//var weatherAppAPI = "eae798b284ccde933e01fec4c703c7d6";

// var currentDate = moment().format("MMMM Do YYYY");
// add moment.js

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
    });
}

const searchBtn = $("#searchBtn");
const cityInput = $("#cityInput");
searchBtn.click(function () {
  const cityValue = cityInput.val();
  getCityWeatherInfo(cityValue);
});

// async function getForecast(cityName) {
//     return fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=fe6203bc0aed338120f1ad06f08effe6`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         $("#forecast").text(`${data.name}  ${data.main.temp}`);
//       });
//   }
const day1 = $("#day1");
const day2 = $("#day2");
const day3 = $("#day3");
const day4 = $("#day4");
const day5 = $("#day5");
// function for the buttons on the left
//  function leftSideCities() {
//    const atlanta = $("#atlanta");

//   atlanta.click(function () {
//     const atlanta = atlanta.val();
//     getCityWeatherInfo("atlanta");
//   });
// }
// fetch("")
// .then((response) => response.json())
// .then((data) => console.log(data))
