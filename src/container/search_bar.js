import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';


class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};

        //can use arrow function instead
        //this.onInputChange = this.onInputChange.bind(this);
    
    }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit = (event)=>{
        event.preventDefault();

        //the important glue point, action creator is avaliable in props!
        this.props.fetchWeather(this.state.term);
        
        //reset
        this.setState({term:''});
    }

    render(){
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input 
                    placeholder="Get a five day forecast in your favarate cities"
                    className= "form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )

    }

}

function mapDispatchToProps(dispatch){
    //enable the action dispatched to redux, thus reducer get called.
    //with bindActionCreators call, the featchWeather is bind to this component's property, so you can call this.props.fetchWeather!
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);