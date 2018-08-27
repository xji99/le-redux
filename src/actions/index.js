import Axios from "axios";

const API_KEY='e22d54f5710dd63dcc9f9a31cb3b392b';
const ROOT_URL  = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'Fetch_weather';

//action creator return action
export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},us`;

    return  {
        type : FETCH_WEATHER,
        payload: Axios.get(url)
    }

}