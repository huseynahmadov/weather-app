const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'be4c7f1f0473c5cce04398f3dd974457';

const setQuery = (e) => {
    if (e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=az`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}

const displayResult = (result) => {
    console.log(result)
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C `

    let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description;

    let minmax = document.querySelector('.minmax');
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / 
    ${Math.round(result.main.temp_max)}°C`
}

function transformSearch() {
    searchBar.style.transition = "all 2s";
}

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery)

searchBar.addEventListener('click', transformSearch)