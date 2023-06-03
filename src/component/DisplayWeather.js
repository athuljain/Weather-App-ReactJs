import React from "react";

function DisplayWeather(props){
    const {data} =props
    return(
        <div>
            <div>
                <span >
                    {data.name},{data.sys.country}.weather

                </span>
                <span>
                    as of {new Date().toLocaleTimeString()}
                </span>
                <span>
                    <h1>
                        {/* {Math.floor(data.main.temp - 273.15)} */}
                        {data.main.temp}
                        <sup>o</sup>
                    </h1>
                    <span>
                        {data.weather[0].main}
                    </span>
                </span>
            </div>

        </div>
    )
}
export default DisplayWeather