import React,{useEffect,useState} from 'react'

import Nav from './components/Nav'
import Home from './pages/Home'

// import Rain from './images/rain.jpg'
import Cloud from './images/clouds.jpg'
// import Norm from './images/Norm.jpg'
// import Dust from './images/Dust.jpg'
// import Thunder from './images/thunder.jpg'
// import Sun from './images/pexels-artur-roman-518415.jpg'

import './App.css'

const key = '3a05c1c1aca554e5dabe8aa3545ef5c4'
let lon;
let lat;

let mode;



function App() {
  
  const [weatherData, setWeatherData] = useState(null)
  const [toggle,setToggle] = useState(false)

  
  useEffect(()=>{
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(pos => {
                lon = pos.coords.longitude
                lat = pos.coords.latitude
            getLocationData(lon,lat)
        },(err)=>{
          console.warn(`ERROR(${err.code}): ${err.message}`);
        },options);
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

function getMode(weatherDesc){
  console.log(weatherDesc);
  mode = weatherDesc
  console.log(mode);
}

function getLocationData(lat,lon){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&mode=json&units=metric`)
  .then(res => {
      return res.json()
  }).then(data =>{
    setWeatherData(data)
    getMode(data.weather[0].main)
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
              getMode(data.weather[0].main)
              setToggle(false)
            })
}


  return (
    <div style={{
      backgroundImage: `url(${Cloud})`
    }} className='App'>
        <Home setToggle={setToggle} toggle={toggle} weatherData={weatherData} />
        <Nav toggle={toggle} weatherData={weatherData} getCity={getCityWeather} />
    </div>
  )
}

export default App