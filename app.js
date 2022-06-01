const api = {
  key: "dda2985813144366b29123457222805",
  url: "http://api.weatherapi.com/v1"
}

const search = document.querySelector('.search-box');

async function getResults() {
  
  const query = search.value;
  const response = await fetch(`${api.url}/forecast.json?key=${api.key}&q=${query}`);
  const data = await response.json();
  return data;
};

search.addEventListener('keypress', async (e) => {
  
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
      console.error(err);
    }
  };
});

let displayResults = (data) => {

  let city = document.querySelector('.city');
  let temperature = document.querySelector('.temperature');
  let feels = document.querySelector('.feels');
  let condition = document.querySelector('.condition');
  let icon = document.querySelector('.icon');
  const iconString = data.current.condition.icon;
  const slicedIcon = iconString.slice(2);

  city.innerText = data.location.name + ', ' + data.location.country;
  temperature.innerText = 'Current Temperature: ' + data.current.temp_c + '°C' + '/' + data.current.temp_f + '°F';
  feels.innerText = 'Feels Like: ' + data.current.feelslike_c + '°C' + '/' + data.current.feelslike_f + '°F';
  condition.innerHTML = `<span class="condition">${data.current.condition.text}</span>`;
  icon.innerHTML = `<img src="https://${slicedIcon}" alt="${data.current.condition.text}">`;
};