let weatherTitle = findWeatherTitle();
let currentDateTitle = findCurrentDateTitle();
let weatherList = findWeatherList();

getData(myUrl).then((clientData) => {
  let currentDateTemp = getCurrentDateTemp(clientData);
  let currentUnixDate = getUnixTime(clientData);
  weatherTitle.textContent = getAverageTemp(currentDateTemp);
  currentDateTitle.textContent = timeConverter(currentUnixDate);

  //receiving + drawing of weather and date icons for the next 3 days.
  for (let i = 1; i < clientData.length; i++) {
    let currentDateTemp = getCurrentDateTemp(clientData, i);
    let averageTemp = getAverageTemp(currentDateTemp);
    console.log(averageTemp);
    let date = timeConverter(getUnixTime(clientData, i), false);
    let icon = getIcons(clientData[i]);
    weatherList.innerHTML += `
        <li class="weather-panel__item">
        <div class="weather-panel__temp">${averageTemp}</div>
          <div class="weather-panel__icon"><img src="https://openweathermap.org/img/wn/${icon}.png" alt=""></div>
          <div class="weather-panel__date">${date}</div>
        </li>
        `;
  }
});
