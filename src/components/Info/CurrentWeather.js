import WeatherSVG from "../svg/WeatherSVG";
import "./CurrentWeather.css";

const CurrentWeather = props =>
{

    return (
        <div className="current_weather">
            {props.weatherData.current_weather && <div className="weather_units">{Math.round(props.weatherData.current_weather.temperature)}°C</div>}
            <div className="location_date">
                {props.coordData.country && <div className="location_city">{props.coordData.city}<div className="location_country">{props.coordData.country}</div></div>}
                {
                    props.weatherData.current_weather && 
                    <div className="date">
                        { 
                            new Date(props.weatherData.current_weather.time).toDateString() + " " +
                            new Date(props.weatherData.current_weather.time).getHours() + ":00"
                        }
                    </div>
                }
            </div>
            <div className="weather_conditions">
                <WeatherSVG weatherData={props.weatherData}/>
            </div>
        </div>
    );
}

export default CurrentWeather;