import CloudSun from "./CloudSun";
import Drizzle from "./Drizzle";
import Fog from "./Fog";
import HeavyRain from "./HeavyRain";
import Snow from "./Snow";
import Sun from "./Sun";
import Thunder from "./Thunder";

const WeatherSVG = (props) => {
  if (props.weatherData.current_weather) {
    switch (props.weatherData.current_weather.weathercode) {
      case 0:
        return (
          <>
            <Sun />
            <div className="weather_condition">Clear</div>
          </>
        );
      case 1:
      case 2:
      case 3:
        return (
          <>
            <CloudSun />
            <div className="weather_condition">Partly Cloudy</div>
          </>
        );
      case 45:
      case 48:
        return (
          <>
            <Fog />
            <div className="weather_condition">Fog</div>
          </>
        );
      case 51:
      case 53:
      case 55:
        return (
          <>
            <Drizzle />
            <div className="weather_condition">Drizzle</div>
          </>
        );
      case 56:
      case 57:
        return (
          <>
            <Drizzle />
            <div className="weather_condition">Freezing Drizzle</div>
          </>
        );
      case 61:
      case 63:
      case 65:
        return (
          <>
            <HeavyRain />
            <div className="weather_condition">Rain</div>
          </>
        );
      case 66:
      case 67:
        return (
          <>
            <HeavyRain />
            <div className="weather_condition">Freezing Rain</div>
          </>
        );
      case 71:
      case 73:
      case 75:
        return (
          <>
            <Snow />
            <div className="weather_condition">Snow</div>
          </>
        );
      case 77:
        return (
          <>
            <Snow />
            <div className="weather_condition">Snow</div>
          </>
        );
      case 80:
      case 81:
      case 82:
        return (
          <>
            <HeavyRain />
            <div className="weather_condition">Rain</div>
          </>
        );
      case 85:
      case 86:
        return (
          <>
            <Snow />
            <div className="weather_condition">Snow</div>
          </>
        );
      case 95:
        return (
          <>
            <Thunder />
            <div className="weather_condition">Thunder</div>
          </>
        );
      case 96:
      case 99:
        return (
          <>
            <Thunder />
            <div className="weather_condition">Thunder</div>
          </>
        );
      default:
    }
  }
};

export default WeatherSVG;
