/*
link javascript file to html
get access to the input field
get access to button

create function to fetch api data when button is clicked

*/

var inputField = document.querySelector('#city')
var button = document.querySelector('#get-weather')

function fetchData(){
    var cityName = inputField.value
    var apiKey = 'fd531081518e808eb0375251a19ac935'
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
 
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function(weatherData) {
        console.log(weatherData)
    })

}

button.addEventListener('click', fetchData)