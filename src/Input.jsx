import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react';
import CloudIcon from '@mui/icons-material/Cloud';
import Alert from '@mui/material/Alert';

export default function Input({handleCityInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    let URL='https://api.openweathermap.org/data/2.5/weather?';
    let key='ee73cd8c359531a6f1f384a4e2557bcf';

    async function apiCall(){
        try{
            let api=`${URL}q=${city}&appid=${key}&units=metric`;
            let res=await fetch(api);
            let jsonRes=await res.json();
            let result={
                city:city,
                humidity:jsonRes.main.humidity,
                temp:jsonRes.main.temp,
                temp_max:jsonRes.main.temp_max,
                temp_min:jsonRes.main.temp_min,
                weather:jsonRes.weather[0].description,
                feels_like:jsonRes.main.feels_like
            }
            return result;
        } catch(err){
            throw err;
        }
    }

    function handleCity(event){
        setCity(event.target.value);
    }

    async function handleSubmit(event){
        try{
            event.preventDefault();
            let obj=await apiCall();
            handleCityInfo(obj);
            setCity("");
            setError(false);
        } catch(err){
            setError(true);
        }   
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1 style={{color:"white" ,textDecoration:"underline"}}>-:Weather Detection App:-</h1>
            <br />
            <form action="" onSubmit={handleSubmit}>
            <TextField style={{border:"2px solid black", borderRadius:"5px", backgroundColor:"white"}} value={city} onChange={handleCity} id="outlined-basic" label="City Name:-" variant="outlined" />
            <br />
            <br />
            <Button style={{backgroundColor:"#ADD8E6",fontWeight:"bold",border:"2px solid black", borderRadius:"19px", color:"black"}} type='submit' variant="contained">Search&nbsp;&nbsp;<CloudIcon/></Button>
            </form>
            <br />
            <br />
            <div>{error==true && <Alert variant="outlined" severity="error">
            Sorry , this place is not found in this API...
            </Alert>}</div>
        </div>
    )
}