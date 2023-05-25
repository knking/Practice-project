//data

let data;

let inputBox = document.getElementById("inputBox");
let countyName = document.getElementById("country");
let stateName = document.getElementById("state");
let cityName = document.getElementById("city");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("wind");
let temprature = document.getElementById("temprature");
let weatherStatus = document.getElementById("weather-status");
let image = document.getElementById("logoImage")

const getData = async (event) => {
    event.preventDefault();
    if (!inputBox.value) {
        alert("Please Enter City name");
        return;
    }

    let city = inputBox.value;

    let fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=d2d2708ebffb48bfb3d124500232505&q=${city}`)

    let orgData = await fetchData.json();
    data =orgData;
console.log(data)
    countyName.innerText = data.location.country;
    stateName.innerText = data.location.region;
    cityName.innerText = city;

    humidity.innerText = data.current.humidity;

};