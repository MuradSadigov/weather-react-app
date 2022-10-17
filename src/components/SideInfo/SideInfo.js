import "./SideInfo.css";

const SideInfo = props =>
{

    return (
        <div className="side_information">
            <h1>Weather Details</h1>

            <div className="weather_conditions_side">
                <div className="weather_condition_side">
                    <div>Cloudy</div>
                 {props.weatherData.hourly && <div className="weather_data">{props.weatherData.hourly.cloudcover[0] + "%"}</div>}
                </div>
                <div className="weather_condition_side">
                    <div>Wind</div>
                {props.weatherData.current_weather && <div className="weather_data">{props.weatherData.current_weather.windspeed + "km/h"}</div>}
                </div>
                <div className="weather_condition_side">
                    <div>Feels like</div>
                    {props.weatherData.current_weather && <div className="weather_data">{props.weatherData.current_weather.temperature + "°C"}</div>}
                </div>
                <div className="weather_condition_side">
                    <div>Humidity</div>
                    {props.weatherData.hourly && <div className="weather_data">{props.weatherData.hourly.relativehumidity_2m[0] + "%"}</div>}
                </div>
            </div>

        </div>
    );
}

export default SideInfo;