import React,{useEffect,useState} from 'react'

import Nav from './components/Nav'
import Home from './pages/Home'

import './App.css'

const key = '3a05c1c1aca554e5dabe8aa3545ef5c4'
let lon;
let lat;



function App() {

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  const [weatherData, setWeatherData] = useState(null)

  
  useEffect(()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(pos => {
                lon = pos.coords.longitude
                lat = pos.coords.latitude
            getLocationData(lon,lat)
        },error,options);
    }

})

function getLocationData(lat,lon){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&mode=json&units=metric`)
  .then(res => {
      return res.json()
  }).then(data =>{
    setWeatherData(data)
    console.log(data);
  }).catch(err => {
      console.log(err);
  })
}


function getCityWeather(city){
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`).then(response => {
                return response.json()
            }).then(data => {
              lat = data[0].lat
              lon = data[0].lon
              getLocationData(lat,lon)
            })
}
  return (
    <div className='App'>
        <Home weatherData={weatherData} />
        <Nav weatherData={weatherData} getCity={getCityWeather} />
    </div>
  )
}

export default App