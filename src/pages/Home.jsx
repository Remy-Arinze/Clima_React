import './Home.css'
import icon from '../images/Hamburger A (2).png'
import cancel from '../images/iconCancel.png'


function Home({weatherData,setToggle,toggle}) {

  return (
    <div style={{}} className='container'>
    <p className="title">skySpice</p>
    <img style={{
      right: toggle ? '60%' : null
    }} onClick={()=>setToggle(!toggle)} className='icon' src={!toggle?icon:cancel} alt="" />

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