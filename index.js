const apiKey = "78d8c94a69ba1feca67b9f4b5390c49d";
const apiUrl  = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = " block"
         document.querySelector(".weather").style.display = " none"
    }else{
        var data = await response.json();
        
    }
    console.log(data);
  

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%" ;
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "https://i.pinimg.com/736x/74/fc/34/74fc346aeef86e573869fa50546d715b.jpg";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/3222/3222800.png" 
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "https://w7.pngwing.com/pngs/665/962/png-transparent-weather-sun-rain-clouds.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4837/4837678.png" 
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDXbSJ4Nuh2dtuJQ6kk80zEtGrQLdohqOQxg&s" 
    }

    document.querySelector(".weather").style.display = "block";

}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value); 

})

