import "./Info.css";
import CurrentWeather from "./CurrentWeather";

const Info = (props) =>
{

  return (

    <div className="information_board">
      <div className="information_board__sub">
        <CurrentWeather weatherData={props.weatherData} coordData={props.coordData}/>
      </div>
    </div>
  
  );
};

export default Info;
