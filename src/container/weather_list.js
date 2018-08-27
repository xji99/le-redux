import React, {Component} from 'react';
import {connect} from 'react-redux';


class WeatherList extends Component{


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