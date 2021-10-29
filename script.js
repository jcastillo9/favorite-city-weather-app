/*
link javascript file to html
get access to the input field
get access to button

create function to fetch api data when button is clicked

grab html elements
global variable for weather data
new function to display  data into 4 html elements
convert temp to c/f
*/

var inputField = document.querySelector('#city');
var button = document.querySelector('#get-weather');
var displayContainer = document.getElementById('display');


function fetchData(){
    var cityName = inputField.value
    var apiKey = 'fd531081518e808eb0375251a19ac935'
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
 
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (weatherData) {
            console.log(weatherData);

            var inputName = document.createElement('h3');
            var highTemp = document.createElement('p');
            var lowTemp = document.createElement('p');
            var pressure = document.createElement('p');
            var description = document.createElement('p');
            inputName.textContent = weatherData.name;
            highTemp.textContent = "High of " + ((weatherData.main.temp_max - 273) * 1.8 + 32).toFixed(2) +  "\u2109";
            lowTemp.textContent =  "Low of " + ((weatherData.main.temp_min - 273) * 1.8 +32).toFixed(2) +  "\u2109";
            pressure.textContent =  "Extremely high pressure of " + weatherData.main.pressure;
            description.textContent =  "Description: " + weatherData.weather[0].description;
            displayContainer.append(inputName);
            displayContainer.append(highTemp);
            displayContainer.append(lowTemp);
            displayContainer.append(pressure);
            displayContainer.append(description);
        
    inputField.value = "";

});

}

button.addEventListener('click', fetchData)

