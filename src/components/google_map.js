
import React, { Component } from 'react';

class GoogleMap extends Component{

    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom : 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }

        });
    }

    render(){
        //this.refs.map can refer to this elelment in the component
        return <div ref="map"/>;
    }
}

export default GoogleMap;