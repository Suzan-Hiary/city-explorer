import React, { Component } from 'react';
import './App.css';

export class Main extends Component {
    render() {
        return (
            
                <>
                <img alt="map" src={`https://maps.locationiq.com/v3/staticmap?key=pk.60346fba30221450f0bd55e67928ff53&&center=${this.props.lat},${this.props.lon}&size='800x800'&zoom=[2,2]`} id="img" />
                
                    <h1>{this.props.cityName}</h1>
                    <h2>{this.props.lat}</h2>
                    <h2>{this.props.lon}</h2>
                </>
            
            
        )
    }
}

export default Main
