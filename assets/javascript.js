$(document).ready(function () {

    const apiKey = "fa2c2f08808de5099f1a217c47174ced";
    // let daily = "https://api.openweathermap.org/data/2.5/weather?q=&appid=" + apiKey + "&units=imperial";
    // let fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q= &appid=" + apiKey + "&units=imperial";
    let uvIn = "https://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=";
    const recentSearche$ = $(".recentSearches")
    const cityHeader$ = $(".cityEntered");
    const currentWIMG$ = $(".currentWeatherImg");
    const temp$ = $(".temperature");
    const humid$ = $(".humidity");
    const windSpeed$ = $(".windSpeed");

    $(".searchBtn").on("click", function () {
        let cityName = $("input").val();
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + apiKey;
        $.get(queryURL)
            .then(function (response) {
                console.log(response);
                cityHeader$.text(response.name + " ");
                currentWIMG$.src = "hhtps://openweathermap.org/img/wn" + response.weather[0].icon + ".png"
                temp$.text("Temperature: " + response.main.temp)
                humid$.text("Humidity: " + response.main.humidity)
                windSpeed$.text("Wind Speed: " + response.wind.speed);
            });



    });
})