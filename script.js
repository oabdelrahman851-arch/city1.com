async function getweather(){
    const city = document.getElementById("cityInput").Value;
    const card = document.getElementById("weatherCard");

    if (!city){
        card.innerHTML = "Please enter a city!";
        return;
    }

    card.innerHTML = "Loding...";
     try {
    const apikey = "ddffe7c919b6425199a182429262404";
        const url = `https:apikey.weatherapi.com/v1/current.json?key=${apikey}&q={city}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("City not found");

        const data = await res.json();

        const {location,current} = data;
        card.innerHTML =`
        <div class="city">${location.name}, ${location.country}</div>
        <div class="temp">${current.temp_c}°C</div>
        <div class="desc">${current.condition.text}</div>
        <img src="http":${current.condition.icon}</div>
        <div class="details">
          <div💧Humidity: ${current.humidity}%</div>
          <div>💨 wind: ${current.wind_kph} km/h</div>
        </div>`;
    } catch (err) {
        card.innerHTML = "City not found";
    }
}