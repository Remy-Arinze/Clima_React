import './Home.css'
import moment from 'moment'

function Home({weatherData}) {

  return (
    <div style={{}} className='container'>
    <p className="title">skySpice</p>
        <div className='main'>
        <div className="tempContainer">
        {weatherData ? <p className="temp">{Math.floor(weatherData.main.temp)}℃</p> : <p>no data</p>}
        </div>
        <div className="locationDetail">
          {weatherData ? <p className='countryName'>{weatherData.name}</p> : <p>no data</p>}
          {weatherData ? <p className=''>{weatherData.sys.country}</p> : <p>no data</p>}
        </div>
        
          <div className="weatherDetail">
          {weatherData ? <img id="wicon" src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Weather icon" />: null}
          {weatherData? <p className="weatherDescription">{weatherData.weather[0].description}</p> : <p>no data</p>}
          </div>

        </div>
    </div>
  )
}

export default Home