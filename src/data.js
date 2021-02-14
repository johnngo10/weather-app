async function apiCall(city) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d1c03ca974d24a85e482dd06b1f0a63
    `
    );
    let weatherData = await response.json();
    return weatherData;
  } catch (e) {
    console.log(e);
  }
}

export default apiCall;
