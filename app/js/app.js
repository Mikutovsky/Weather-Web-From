function timeConverter(value, yearFlag = true) {
  let months = [
    'Янв',
    'Фев',
    'Мрт',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Нбр',
    'Дек',
  ];
  let inst = new Date(value * 1000);
  let year = inst.getFullYear();
  let month = months[inst.getMonth()];
  let date = inst.getDate();
  //hides or shows the year
  if (yearFlag) {
    time = date + `${month < 10 ? '.0' + month : '.' + month}` + '.' + year;
  } else {
    time = date + `${month < 10 ? '.0' + month : '.' + month}`;
  }
  return time;
}

function getAverageTemp(value) {
  let tempCounter = 0;
  let tempCounterIterator = 0;
  //summation of all daytime temperatures
  for (const key in value) {
    if (key !== 'min' && key != 'max') {
      tempCounter += value[key];
      tempCounterIterator++;
    }
  }
  return Math.ceil(tempCounter / tempCounterIterator);
}

function getUnixTime(value, i = 0) {
  return value[i].dt;
}

function getCurrentDateTemp(value, i = 0) {
  return value[i].temp;
}

function getIcons(value, i = 0) {
  return value.weather[i].icon;
}

function findWeatherTitle() {
  let weatherTitle = document.querySelector('.weather-panel__title-value');
  return weatherTitle;
}

function findCurrentDateTitle() {
  let currentDateTitle = document.querySelector('.current-date__info');
  return currentDateTitle;
}

function findWeatherList() {
  let WeatherList = document.querySelector('.weather-panel__list');
  return WeatherList;
}
