import apiCall from './data';

const displayController = (() => {
  const content = document.getElementById('content');
  content.innerHTML = `
  <header>
    <form action="#" id="form">
      <input type="text" placeholder="City" id="input-city" required/>
      <input type="submit" id="submit" />
    </form>
  </header>
  <main>
    <h1 id="city-name"></h1>
    <div id="weather-icon">
      <i class="fas fa-cloud-sun"></i>
    </div>
    <h3 id="temperature">75&#176;</h3>
    <p id="weather-text">Cloudy</p>
    <div id="group-1">
      <p id="humidity">Humidity: 74%</p>
      <p id="winds">Winds: e 5 km/hr</p>
    </div>
  </main>
  `;

  const inputCity = document.getElementById('input-city');

  const convert = temp => {
    const formula = parseInt(((temp - 273.15) * 9) / 5 + 32);
    return formula;
  };

  async function submitHandler() {
    try {
      let fetchData = await apiCall(inputCity.value).then(data =>
        populate(data)
      );
    } catch (e) {
      console.log(e);
    }
  }

  const populate = data => {
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    cityName.textContent = data.name;
    temperature.textContent = convert(data.main.temp) + '&#176;';
    console.log(data.main.temp);
  };

  const form = document.getElementById('form');
  form.addEventListener('submit', submitHandler);
})();
