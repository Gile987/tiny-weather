const api = {
  key: "dda2985813144366b29123457222805",
  url: "http://api.weatherapi.com/v1"
}

const search = document.querySelector('.search-box');

async function getResults() {
  const query = search.value;
  const response = await fetch(`${api.url}/forecast.json?key=${api.key}&q=${query}`);
  const data = await response.json();
  const weather = data.current;
  const forecast = data.forecast.forecastday;
  return data;
};

search.addEventListener('keypress', async (e) => {
  let data = [];
  if (e.keyCode == 13) {
    try {
      if (search.value) {
        data = await getResults();
        console.log('dejtaaaa', data);
        displayResults(data);
      }else{
        alert('Please enter a city name');
      };
    } catch (err) {
      console.log('error');
      console.log(err);
    }
  };
});

let displayResults = (data) => {
  console.log("display results", data);
};