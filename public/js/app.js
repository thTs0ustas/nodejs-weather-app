console.log('Client side javascript file is loaded!');

const fetchWeather = ({ location, country }) =>
  fetch(`/weather?location=${location}&country=${country}`).then((response) =>
    response.json(),
  );

const submit = document.querySelector('form');
const locationInput = document.getElementById('location-input');
const countryInput = document.getElementById('country-input');
const text = document.getElementById('text');

submit.addEventListener('submit', (ev) => {
  ev.preventDefault();
  text.textContent = 'Loading...';
  fetchWeather({ location: locationInput.value, country: countryInput.value })
    .then((data) =>
      data.message ? (text.textContent = data.message) : (text.textContent = data.error),
    )
    .catch(console.error);
});
