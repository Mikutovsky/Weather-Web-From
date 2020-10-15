let lat = 57.1914,
  lon = 39.4139,
  apiKey = 'a9807b6fa36e4f193836a886dff829a1',
  weatherMeasures = 'current,minutely,hourly', //exclusion of time ranges
  units = 'metric'; //display in celsius and minutes

const myUrl = `https://api.openweathermap.org/data/2.5/onecall?
lat=${lat}
&lon=${lon}
&exclude=${weatherMeasures}
&units=${units}
&appid=${apiKey}`;

async function getData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data.daily.splice(0, 4);
  } catch (e) {
    console.error(e);
  }
}
