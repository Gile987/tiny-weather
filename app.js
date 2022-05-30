const api = {
  key: "dda2985813144366b29123457222805",
  url: "http://api.weatherapi.com/v1"
}

const search = document.querySelector('.search-box');

let setQuery = (e) => {
  if (e.keyCode == 13) {
    getResults();
  };
};

search.addEventListener('keypress', setQuery);

const getResults = () => {
  const query = search.value;
  fetch(`${api.url}/forecast.json?key=${api.key}&q=${query}`)
    .then(response => response.json())
    .then(data => {
      const weather = data.current;
      const forecast = data.forecast.forecastday;
      console.log(weather);
      console.log(forecast);
    });
};
