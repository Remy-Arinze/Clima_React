import React,{useState,useEffect} from 'react'
import './Nav.css'

const key = '3a05c1c1aca554e5dabe8aa3545ef5c4'

function Nav() {
    const [city,setCity] = useState('')
    const [cordinates, setCordinatess] = useState({
        lon: null,
        lat: null
    })


    function handleChange(e){
        setCity(e.target.value)
    }

    function handleCLick(){
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`).then(response => {
                return response.json()
            }).then(data => {
                console.log(data);
                setCordinatess({
                    lat:data[0].lat,
                    lon: data[0].lon
                })

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cordinates.lat}&lon=${cordinates.lon}&appid=${key}`).then(res =>{
                    return res.json()
                }).then(weatherdata => {
                    console.log(weatherdata);
                })
            })
            .catch(err =>{
                console.log(err);
            })
    }

  return (
    <div className='nav-container'>
        <div className="input">
            <input onChange={handleChange} type="text" className='search' />
            <button onClick={handleCLick} className="searchIcon"></button>
            <h1>{cordinates.lat}</h1>

        </div>
    </div>
  )
}

export default Nav