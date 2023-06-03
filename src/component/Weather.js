import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";

function Weather(){
    const APIKEY="27db058bf00e164103283e421c11487e"

    const[form,setForm]=useState({
        city:"",
        country:""
    })
    const[weather,setWeather]=useState([])
     

    async function weatherData(e){
        e.preventDefault();
        if(form.city == ""){
            alert("add values")
        }else{
            const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
            ).then(res=>res.json()).then(data => data)

            setWeather({
                data :data
            });
        }

    }

    const handleChange=(e)=>{
        let name= e.target.name;
        let value=e.target.name

        if(name =="city"){
            setForm({...form,city:value})
        }
        if(name=="country"){
            setForm({...form,country:value})
        }
        
    }
    return(
        <div>
            <span>Weather-App</span>
            <form>
                <input type="text" name="city" placeholder="City" onChange={e=> handleChange(e)} />
                <input type="text" name="country" placeholder="Country" onChange={e=> handleChange(e) } />
                <button onClick={e=>weatherData(e)}>Submit</button>
            </form>

            {
                weather.data != undefined ?
                <div>
                    <DisplayWeather data={weather.data} />
                </div>

                
                :null
            }

        </div>

    )
}
export default Weather