const API_KEY = "d82780e9998bdb2dfb69cfa04284121d";
const COORD = "coord";

function getWeather(lat, lon)
{
    fetch
    (
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
    .then(function(response)
    {
        return response.json();
    })
    .then(function(json)
    {
        console.log(json);
    });
}

function saveCoord(coordObj)
{
    localStorage.setItem(COORD, JSON.stringify(coordObj));
}

function handleGeoSuccess(position) 
{
    const latitude = position.coord.latitude;
    const longitude = position.coord.longitude;
    const coordObj = {latitude, longitude};
    saveCoord(coordObj);
    getWeather(latitude, longitude);
}

function handleGeoError()
{
    console.log("Unable to access geo location.")
}

function askForCoord()
{
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError); // read the location
}

function loadCoord()
{
    const loadedCoord = localStorage.getItem(COORD);
    if (loadedCoord === null) // no coord is in the local storage
    {
        askForCoord();
    }
    else // when already have the coord
    {
        const parsedCoord = JSON.parse(loadedCoord); //get weather
        getWeather(parsedCoord.latitude, parsedCoord.longitude);
    }
}

function init()
{
    loadCoord();
}
init();
