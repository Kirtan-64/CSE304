document.getElementById("weather-btn").addEventListener("click", () => {
    let city = document.getElementById("city").value;
    console.log(city);
    if (city === "") {
        alert("Please enter a city");
    } else {
        fetch(`https://api.weatherapi.com/v1/current.json?key=87e05fea481d4127b1844415241207&q=${city}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert("Data for this city is not available");
                } else {
                    const temperature = data.current.temp_c;
                    document.getElementById("weather").innerHTML = `The temperature of ${city.toLowerCase()} is ${temperature}°C`;
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred while fetching the weather data");
            });
    }
});
