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

// FUNCTION TO GET THE 5 DAY FORECAST. ITS BROKEN BUT ON TRACK I THINK. NOT SURE HOW TO FETCH LOCATION.
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

// function works but im pulling from the API wrong.
function leftBtnsSearch() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=fe6203bc0aed338120f1ad06f08effe6`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $("#cityAndDate").text(`${data.name} ${data.main}`);
      $("#feelsLike").text(`Feels like: ${data.main.feels_like}°`);
      $("#humidity").text(`Humidity: ${data.main.humidity}%`);
      $("#windSpeed").text(`Wind Speed: ${data.wind.speed}mph`);
      $("#description").text(`Sky: ${data.weather[0].main}`);
      const atlanta = $("#cityBtn1");
      const denver = $("#cityBtn2");
      const seattle = $("#cityBtn3");
      const sanFrancisco = $("#cityBtn4");
      const orlando = $("#cityBtn5");
      const newYork = $("#cityBtn6");
      const austin = $("#cityBtn7");
      const chicago = $("#cityBtn8");
    });
}
// IF STATEMENT FOR EACH CITY ON THE BTNS
const cityBtn1 = $("#cityBtn1");
const atlantaClicked = $("#cityBtn1");
cityBtn1.click(function () {
  const cityValue = cityBtn1.val();
  getCityWeatherInfo(cityValue);
  console.log("Atlanta clicked");
});
