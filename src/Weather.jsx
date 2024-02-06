import Input from "./Input.jsx";
import Output from "./Output.jsx";
import {useState} from 'react';

export default function Weather(){
    let [cityInfo,setCityInfo]=useState({
        city:"India",
        humidity:100,
        temp:-1,
        temp_max:-1,
        temp_min:-1,
        weather:"overcast clouds",
        feels_like:10
    });

    function handleCityInfo(city){
        setCityInfo(city);
    }
    return (
        <div>
            <Input handleCityInfo={handleCityInfo}/>
            <Output city={cityInfo}/>
        </div>
    )
}