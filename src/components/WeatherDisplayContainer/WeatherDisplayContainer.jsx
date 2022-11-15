import './WeatherDisplayContainer.scss';
import { useState, useEffect } from "react";
import Card from "../Card/Card";

const WeatherDisplayContainer = () => {
    const [userLocation, setUserLocation] = useState({
        latitude: 0, 
        longitude: 0
    });
    const [weatherData, setWeatherData] = useState({
        location: {
            name: null
        }, 
        current: {
            condition: {
                icon: null,
                text: null
            },
            tempC: null,
            day: null,
            windKph: null,
            windDirection: null,
            humidity: null
        }
    });
    const [liveLocation , setLiveLocation] = useState(false);

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLiveLocation(true);
          setUserLocation({latitude, longitude});
        });
    }

    const getWeatherData = async () => {
        getCurrentLocation();
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=e1881e33bbed4fa5b5a142655220911&q=${userLocation.latitude},${userLocation.longitude}&aqi=no`)
        const data = await res.json();
        setWeatherData({
            location: {
                name: data.location.name
            }, 
            current: {
                condition: {
                    icon: data.current.condition.icon,
                    text: data.current.condition.text
                },
                tempC: data.current.temp_c,
                day: data.current.is_day,
                windKph: data.current.wind_kph,
                windDirection: data.current.wind_dir,
                humidity: data.current.humidity
            }
        });
    }

    useEffect(() => {
        getWeatherData();
    }, [liveLocation]);

  return (
    <div className="weatherDisplayContainer">
        <Card 
            weatherData = {weatherData}
        />
    </div>
  )
}

export default WeatherDisplayContainer