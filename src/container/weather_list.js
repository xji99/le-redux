import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import Chart from '../components/chart';

class WeatherList extends Component{


    renderWeather = (cityData)=>{
        const temps = cityData.list.map(weather=>weather.main.temp);
        const presure = cityData.list.map(weather=>weather.main.pressure);
        const humi = cityData.list.map(weather=>weather.main.humidity);

        return(
            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td> <Chart data={temps} color="orange"/> </td>
                <td> <Chart data={presure} color="blue"/> </td>
                <td> <Chart data={humi} color="red"/> </td>
            </tr>
        );
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperatur</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>    
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>

        );
    }

}

/*
function mapStateToProps(state){
    return {weather: state.weather};
}

*/
//shortcut way of above in es6 syntax
//the argument is global state
function mapStateToProps({weather}){
    return {weather}; //this is the component's state object, state: {weather}
}



export default connect(mapStateToProps)(WeatherList);