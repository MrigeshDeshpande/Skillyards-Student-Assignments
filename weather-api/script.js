document.getElementById(getWeather).addEventListener("click", function (){
    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;
    const city = document.getElementById("city").value;

    if(!country || !state || !city) {
        alert("Please fill in all fields.");
        return;
    }
})

const apikey =  "235dee9033277393454baa4248f66fc2";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apiKey}&units=metric`;

