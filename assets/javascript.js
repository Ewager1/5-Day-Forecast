$(document).ready(function () {

    const apiKey = "fa2c2f08808de5099f1a217c47174ced";
    const cityHeader$ = $(".cityEntered");
    const currentWIMG$ = $(".currentWeatherImg");
    const temp$ = $(".temperature");
    const humid$ = $(".humidity");
    const windSpeed$ = $(".windSpeed");
    const currentDate$ = $(".currentDate");
    const uvIndex$ = $(".uvIndex");
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    $(".searchBtn").on("click", function () {
        let cityName = $("input").val();
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + apiKey;
        $.get(queryURL)
            .then(function (response) {
                currentDate$.text(today)
                cityHeader$.text(response.name + " ");
                currentWIMG$.attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")
                temp$.text("Temperature: " + response.main.temp);
                humid$.text("Humidity: " + response.main.humidity);
                windSpeed$.text("Wind Speed: " + response.wind.speed);

                let ultraUrl = `https://api.openweathermap.org/data/2.5/uvi?appid=fa2c2f08808de5099f1a217c47174ced&lat=${response.coord.lat}&lon=${response.coord.lon}`;
                $.get(ultraUrl)
                    .then(function (response) {
                        uvIndex$.text("UV Index: " + response.value);
                    });
            });



        let queryFive = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=" + apiKey;
        $.get(queryFive)
            .then(function (data) {
                for (let i = 1; i < 8; i++) {
                    let futureDay$ = $(`<div class="card col-2 day${i}"></div>`);
                    let futureIcon$ = $(`<img class="icon${i}" src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png">`);
                    let futureTemp$ = $(`<p class="${i}">Temperature: ${data.list[i].main.temp}</p>`);
                    let futurehumid$ = $(`<p class="humidity${i}">Humidity: ${data.list[i].main.humidity}</p>`);
                    let dateTime = $(`<p class="date${i}"> ${data.list[i * 7].dt_txt}</p>`);
                    $(".future").append(futureDay$)
                    futureDay$.append(dateTime, futureIcon$, futureTemp$, futurehumid$)
                }
            });
    });
});