import React from 'react';
import { rerender } from '../../rerender';
import CityWeather from './CityWeather/CityWeather';
import classes from './Weather.module.css';

let API_KEY = "609f718bef5ca7e4660ebbcdee9e1b44";

let state = {
    query: [],
    city: ['Tomsk', 'Ulan-Ude', 'Moscow', 'Saint Petersburg', 'Krasnodar', 'Surgut', 'Kemerovo', 'Krasnoyarsk', 'Novosibirsk'],
    temp: null,
    temp_min: null,
    temp_max: null,
    feels_like: null,
    humidity: null,
    city_name: null
}


const Weather = () => {
    let newTextElement = React.createRef();

    let handleInputChange = () => {
        filterArray(newTextElement.current.value);
    }

    let filterArray = (text) => {
        let filter = (el) => {
            return el.toLowerCase().includes(searchString.toLowerCase())
        }

        let searchString = text;
        let responseData = state.city;

        if (searchString.length > 0) {
            state.query = responseData.filter(filter)
        } else {
            state.query = [];
        }
        rerender();
    }


    let createWether = (event) => {
        let city_name = event.target.textContent;
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`).then(response => response.json()).then(data => {
            state.city_name = `Weather in ${city_name}:`;
            state.temp = `Temperature: ${Math.round(data['main'].temp)} ${String.fromCharCode(176)}C`;
            state.feels_like = `Feels like: ${Math.round(data['main'].feels_like)} ${String.fromCharCode(176)}C`;
            state.temp_min = `Minimum temperature: ${Math.round(data['main'].temp_min)} ${String.fromCharCode(176)}C`;
            state.temp_max = `Maximum temperature: ${Math.round(data['main'].temp_max)} ${String.fromCharCode(176)}C`;
            state.humidity = `Humidity: ${data['main'].humidity}%`;
            rerender();
        });

    }
    return (
        <div className={classes.wether}>
            <input className={classes.search} type='text' placeholder="search for..." onChange={handleInputChange} ref={newTextElement} />
            <div className={classes.menu}>
                {state.query.map(elq => {
                    console.log(elq)
                    return (
                        <div className={classes.city} onClick={createWether}>
                            <a>{elq}</a>
                        </div>
                    )
                })}
            </div>
            <CityWeather state={state} />
        </div>
    )
}

export default Weather;