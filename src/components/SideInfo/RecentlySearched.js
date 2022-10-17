import React, { useState, useEffect } from "react";

import "./RecentlySearched.css";
import Location from "../svg/Location";

const RecentlySearched = (props) => {
  const [recentlySearched, setRecentlySearched] = useState([]);
  useEffect(() => {
    if (props.cityCountryData.city)
    {
        if(recentlySearched.length >= 4)
        {
            setRecentlySearched((prev) => [props.cityCountryData, ...prev.splice(0,3)]);
        }
        else
        {    
            setRecentlySearched((prev) => [props.cityCountryData, ...prev]);
        }
    }
}, [props.cityCountryData.city]);

console.log(recentlySearched);
  return (
    <div className="recently_list">
      <h1 className="list_title">Recently visited</h1>
      <div className="items">
        {recentlySearched &&
          recentlySearched.map((x) => (
            <div key={Math.random().toString()} className="item">
              <Location />
              {x.city + ", " + x.country}
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentlySearched;
