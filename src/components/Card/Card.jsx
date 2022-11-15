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
        <h2>{weatherData.location.name}</h2>
        <img src={weatherData.current.condition.icon} alt="Display weather condition" />
        <h3>{weatherData.current.condition.text}</h3>
        <p>Temperature: {weatherData.current.tempC}°C</p>
        <p>{day}</p>
        <p>{weatherData.current.windKph}</p>
        <p>{weatherData.current.windDirection}</p>
        <p>{weatherData.current.humidity}</p>
    </div>
  )
}

export default Card