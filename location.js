const options = {
    method: 'GET',
    headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '72f588668fmsh0518e5d8cd450a8p132fe5jsn9ebf5a97ab0b',
    'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
    }
    };
    const getWeather = (city)=>{
        // cityName.innerHTML = city;
        fetch(``, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            // let speed=document.getElementById('windSpeed');
            place.innerHTML = city;
            liveTemp.innerHTML = `${response.temp}&deg;C`;
            humid.innerHTML = response.humidity;
            windSpeed.innerHTML = response.wind_speed;
            maxTemp.innerHTML = response.max_temp;
            minTemp.innerHTML = response.min_temp;
        })
        .catch(err => console.error(err));
    }