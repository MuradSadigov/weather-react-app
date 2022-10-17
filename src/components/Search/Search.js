import React, {useRef} from "react";

import "./Search.css";
import SearchSvg from "../svg/SearchSvg";
import RecentlySearched from "../SideInfo/RecentlySearched";


const Search = props => {
    const inputRef = useRef();
        
    const submitHandler = event =>
    {
        event.preventDefault();
        props.getInput(inputRef.current.value);
        inputRef.current.value = "";
    };

    return (
        <div className="form_submission">
            <form onSubmit={submitHandler} className="search_bar">

                <input className="input_button" placeholder="City Name" type="text" ref={inputRef} />
                <button className="submit_button" type="submit"><SearchSvg/></button>
                
            </form>
            <RecentlySearched cityCountryData={props.cityCountryData}/>
        </div>
    );
};

export default Search;