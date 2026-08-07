async function getWeather() {

    const city = document.getElementById("cityInput").value;
    const card = document.getElementById("weatherCard");

    if (!city) {
        card.innerHTML = "Please enter a city!";
        return;
    }

    card.innerHTML = "Loading...";

    try {

        const apiKey = "8c2a9e27f72f4f79bae82734260708";

        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("City not found");
        }

        const data = await res.json();

        card.innerHTML = `
            <div class="city">${data.location.name}, ${data.location.country}</div>

            <div class="temp">${data.current.temp_c}°C</div>

            <div class="desc">${data.current.condition.text}</div>

            <img src="https:${data.current.condition.icon}" alt="icon">

            <div class="details">
                <div>💧 Humidity: ${data.current.humidity}%</div>
                <div>💨 Wind: ${data.current.wind_kph} km/h</div>
            </div>
        `;

    } catch (error) {

        card.innerHTML = "City not found";

    }

}
