import './Card.scss';
import { useState, useEffect } from 'react';

const Card = ({ weatherData }) => {
  const [day, setDay] = useState(null);
  const changeDay = () => {
    switch (weatherData.current.day) {
      case 1:
        setDay("Wednesday");
        break;
      case 2:
        setDay("Thursday");
        break;
      case 3:
        setDay("Friday");
        break;
      case 4:
        setDay("Saturday");
        break;
      case 5:
        setDay("Sunday");
        break;
      case 0:
        setDay("Tuesday");
        break;
      default:
        setDay("");
    }
  }
  useEffect(() => {
    changeDay();
  }, [weatherData])
  return (
    <div className='card'>
      <div className='card__heading'>
        <h1>{weatherData.location.name}</h1>
        <img src={weatherData.current.condition.icon} alt="Display weather condition" />
        <h2>{weatherData.current.condition.text}</h2>
      </div>
        <p>Temperature: {weatherData.current.tempC}°C</p>
        <p>Wind (Km/h): {weatherData.current.windKph}</p>
        <p>Wind dircetion: {weatherData.current.windDirection}</p>
        <p>Humidity: {weatherData.current.humidity}</p>
    </div>
  )
}

export default Card