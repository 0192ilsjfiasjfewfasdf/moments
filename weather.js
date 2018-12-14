const COORD = 'coord';

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
}

function handleGeoError()
{

}

function askForCoord()
{
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError); // read the location
}

function loadCoord()
{
    const loadedCoord = localStorage.getItem(COORD);
    if (loadedCoord === null)
    {
        askForCoord();
    }
    else
    {
        //get weather
    }
}

function init()
{
    loadCoord();
}
init();
