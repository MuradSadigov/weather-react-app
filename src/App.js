import React, {useState, useEffect} from "react";
import "./App.css";

import Search from "./components/Search/Search";
import Info from "./components/Info/Info";
import UI from "./components/UI/UI";
import SideInfo from "./components/SideInfo/SideInfo";


const App = () =>
{
    const [weatherData, setWeatherData] = useState({});
    const [coordData, setCoordinate] = useState({});
    const [inputState, setInput] = useState("");


    
    useEffect(() => { 
        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${inputState}&count=1`)
        .then(response => response.json())
        .then((data) => setCoordinate({lati: data.results[0].latitude, long: data.results[0].longitude,
        city: data.results[0].name, country: data.results[0].country}));

    }, [inputState]);

    useEffect(() =>{
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordData.lati}&longitude=${coordData.long}&hourly=temperature_2m,relativehumidity_2m,rain,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,sunrise,sunset&current_weather=true&timezone=auto`)
        .then(response => response.json())
        .then((data) => setWeatherData(data));

    }, [coordData]);
        
    const getInput = (data) =>
    {
        setInput(data);
    }

    return (
        <>
           <Info weatherData={weatherData} coordData={coordData}/>
           <UI>
                <Search cityCountryData={{city: coordData.city, country: coordData.country}} getInput={getInput}/>
                <SideInfo weatherData={weatherData} coordData={coordData}/>
           </UI>
        </>
        );
}

export default App;