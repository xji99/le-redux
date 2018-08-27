import React, { Component } from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

export default class Chart extends Component{

    render(){

        return (
            <div>
                    <Sparklines height={120} width={180} data={this.props.data}>
                        <SparklinesLine color={this.props.color}/>
                    </Sparklines>

            </div>

        );
    }

}

/* the following is same as above
export default (props) => {

        return (
            <div>
                    <Sparklines height={120} width={180} data={props.data}>
                        <SparklinesLine color={props.color}/>
                    </Sparklines>

            </div>

        );
}

*/