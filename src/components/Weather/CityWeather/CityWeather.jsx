import React from 'react';
import classes from './CityWeather.module.css';

const CityWeather = (props) => {
    return (
        <div className = {classes.main}>
            <h1>{props.state.city_name}</h1>
            <p>{props.state.temp}</p>
            <p>{props.state.temp_min}</p>
            <p>{props.state.temp_max}</p>
            <p>{props.state.feels_like}</p>
            <p>{props.state.humidity}</p>
        </div>
    )
}

export default CityWeather;