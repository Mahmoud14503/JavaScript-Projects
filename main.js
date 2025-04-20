    const apiKey = "be0aa6625a7b8da86ab3917d032e2681";  
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";  

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();
        if (response.status === 404) {
            document.querySelector(".error").style.display = "block";
            return;
        }
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if (data.weather[0].main === "Clouds")
            document.querySelector(".weather-icon").src = "imgs/clouds.png";
        if (data.weather[0].main === "Clear")
            document.querySelector(".weather-icon").src = "imgs/clear.png";
        if (data.weather[0].main === "Rain")
            document.querySelector(".weather-icon").src = "imgs/rain.png";
        if (data.weather[0].main === "Drizzle")
            document.querySelector(".weather-icon").src = "imgs/drizzle.png";
        if (data.weather[0].main === "Mist")
            document.querySelector(".weather-icon").src = "imgs/mist.png";

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
    
    searchBtn.addEventListener("click", ()=> checkWeather(searchBox.value));
    searchBox.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            checkWeather(searchBox.value);
        }
    })
