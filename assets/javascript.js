
const apiKey = "fa2c2f08808de5099f1a217c47174ced";
let daily = "https://api.openweathermap.org/data/2.5/weather?q=boston&appid=" + apiKey + "&units=imperial";
let fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=boston&appid=" + apiKey + "&units=imperial";
let uvIn = "https://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=";

$.get(daily).then(function (response) {
    $(".cityEntered").html(response.name + "Weather Details");
    $(".temperature").text("Temperature: " + response.main.temp_min);
    $(".humidity").text("Humididty: " + response.main.humidity);
    $(".windSpeed").text("Wind Speed: " + response.wind.speed);
    $(".uvIndex").text("UV Index: " + "")
});

