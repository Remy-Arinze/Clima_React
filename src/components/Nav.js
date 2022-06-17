import React,{useState} from 'react'
import './Nav.css'


function Nav({weatherData,getCity,toggle}) {
    const [city,setCity] = useState('')

    function handleChange(e){
        setCity(e.target.value)
    }

    function handleCLick(){
        getCity(city)
        console.log(city);
        }

return (
    <div style={{
        display: toggle? 'block':null
    }} className='nav-container'>
        <div className="input">
            <input onChange={handleChange} placeholder ='Another Location' type="text" className='search' />
            <button onClick={handleCLick} className="searchIcon">Search</button>
        </div>

        <h3 className='detailsHeader'>Weather Details</h3>
        <div className="Details">
            <p className="detail">Cloud</p>
            {weatherData ? <p className="value">{weatherData.clouds.all}%</p> : <p>null</p>}
        </div>
        <div className="Details">
            <p className="detail">Humidity</p>
            {weatherData ? <p className="value">{weatherData.main.humidity}%</p> : <p>null</p>}
        </div>
        <div className="Details">
            <p className="detail">Wind</p>
            {weatherData ? <p className="value">{Math.floor(weatherData.wind.speed)}km/h</p> : <p>null</p>}
        </div>
        {/* <div className="Details">
            <p className="detail">Rain</p>
            {weatherData ? <p className="value">{weatherData.rain.}km/h</p> : <p>null</p>}
        </div> */}

    </div>
  )
}

export default Nav