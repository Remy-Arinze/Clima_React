import React,{useEffect,useState} from 'react'
import Nav from '../components/Nav'
import './Home.css'

function Home() {

  const key = '3a05c1c1aca554e5dabe8aa3545ef5c4'

  const [weatherData, setWeatherData] = useState()
  const [location, setLocation] = useState({
    lat: null,
    lon:null
  })

  useEffect(()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((pos)=>{
            setLocation({
                lon:pos.coords.longitude,
                lat:pos.coords.latitude
            })
            if(pos.lat){
              fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${key}`)
            .then(res => {
                return res.json()
            }).then(data =>{
              setWeatherData(data)
                console.log(data);
            }).catch(err => {
                console.log(err);
            })
            }else{
              console.log('cant find');
            }
            
        });
    }else{
        console.log('cant');
    }
},[])

  return (
    <div className='container'>
        <Nav />
        <div>
          {location.lat}
          <br />
          {location.lon}
        </div>
    </div>
  )
}

export default Home