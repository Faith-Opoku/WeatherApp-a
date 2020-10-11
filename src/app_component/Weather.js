
import React from 'react';

const Weather = (props)=>{
    const url =  "http://api.openweathermap.org/data/2.5/weather?q=lome&appid=6f15e8e5aafbc72e21fad0aaa94d0711";

    
    return (
        <div className= "container">
            <div className="cards">
            <h1>Weather App</h1>
            <h6>Accra,Ghana</h6>
            <h6>08-09-2020</h6>
    {/* <h6>{url.weather.description}</h6> */}
            <h5 className="py-4">
                
                <i className="wi wi-day-sunny display-1"></i>
                
            
            </h5>
                <h1 className="py-2">25&deg;C</h1>

        </div>
        </div>
        
    
               

    );
};

export default Weather;
            
    