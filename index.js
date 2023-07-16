// const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
const options = {
method: 'GET',
headers: {
'content-type': 'application/octet-stream',
'X-RapidAPI-Key': '72f588668fmsh0518e5d8cd450a8p132fe5jsn9ebf5a97ab0b',
'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
}
};
const getWeather = (city)=>{
    // cityName.innerHTML = city;
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        // let speed=document.getElementById('windSpeed');
        place.innerHTML = city;
        liveTemp.innerHTML = `${response.temp}&deg;C`;
        humid.innerHTML = `<h5><strong>${response.humidity} %</strong></h5>`;
        windSpeed.innerHTML = `<h5><strong>${response.wind_speed} Kmph</strong></h5>`;
        feeling.innerHTML = `<h5><strong>${response.feels_like}&deg;C</strong></h5>`;
        maxTemp.innerHTML = `<h5><strong>Max. Temperature : ${response.max_temp+6}&deg;C</strong><h5>`;
        minTemp.innerHTML = `<h5><strong>Min. Temperature : ${response.min_temp-5}&deg;C</strong><h5>`;
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click" , (e)=>{
    e.preventDefault();

    getWeather(city.value);
})

getWeather("Kolkata");

// var compareDate = r.get('updatedate');
// var diff = new Date() - new Date(compareDate);

// diff /= 60000; // diff converted in minute

// if (diff >= 60) {
//   return true;
// } else { 
//   return false;
// }
// console.log(diff);

