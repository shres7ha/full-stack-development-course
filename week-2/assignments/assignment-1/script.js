const API_KEY = '' // Your Open Weather Map API Key
const BASE_URL = 'https://api.openweathermap.org'
const ICON_BASE_URL = 'https://openweathermap.org/img/wn'

const cityInput = document.querySelector('#city-input')
const searchButton = document.querySelector('#search-button')
const status = document.querySelector('#status')
const weatherResult = document.querySelector('#weather-result')

function setStatus(message, color) {
  status.textContent = message
  status.style.color = color
}

function toggleResult(show) {
  weatherResult.hidden = !show
  if (!show) weatherResult.innerHTML = ''
}

async function fetchWeather(city) {
  const url = `${BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

  const response = await fetch(url)

  if (!response.ok) throw new Error('City not found.')

  return response.json()
}

function renderWeather(data) {
  const { name, main, weather } = data

  const { temp, humidity } = main

  const { description, icon } = weather[0]

  console.log(icon)

  const iconUrl = `${ICON_BASE_URL}/${icon}@2x.png`

  weatherResult.innerHTML = `
    <h2>${name}</h2>

    <img class="weather-icon" src="${iconUrl}" alt="${description}">

    <h3>${description}</h3>

    <p class="mt-2">Temperature: ${Math.round(temp)} °C</p>

    <p class="mt-1">Humidity: ${humidity} %</p>
  `
}

async function handleSearch() {
  const city = cityInput.value.trim()

  if (!city) {
    setStatus('Please enter a city name.', 'red')

    toggleResult(false)

    return
  }

  setStatus('Loading weather..', 'black')

  try {
    const data = await fetchWeather(city)

    renderWeather(data)

    setStatus('Sucess.', 'green')

    toggleResult(true)
  } catch (error) {
    setStatus(error.message, 'red')

    toggleResult(false)
  }
}

searchButton.addEventListener('click', handleSearch)

cityInput.addEventListener(
  'keypress',
  (e) => e.key === 'Enter' && handleSearch()
)
