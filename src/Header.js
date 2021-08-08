import React, { Component } from 'react'
import axios from 'axios';
import Main from './Main';


export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: "",
            lon: "",
            cityName: ""
        }
    }
    cityhandler = (e) => {
        this.setState({
            cityName: e.target.value
        })
    }

    explorehandle = (e) => {
        e.preventDefault();
        let url = `https://eu1.locationiq.com/v1/search.php?key=pk.60346fba30221450f0bd55e67928ff53&q=${this.state.cityName}&format=json`
        axios.get(url).then(res => {
            let data = res.data[0]

            this.setState({
                cityName: data.display_name,
                lat: data.lat,
                lon: data.lon
            })

        });
    }
    render() {
        return (
            < div >
                <h1>City Explore</h1>
                <form onSubmit={(e) => this.explorehandle(e)} >

                    <input type='text' onChange={(e) => { this.cityhandler(e) }} placeholder="ex.London" id="form" />
                    <button type="submit" value="Search">Explore </button>
                </form>
                <Main cityName={this.state.cityName} lat={this.state.lat} lon={this.state.lon} />
            </div >
        )

    }
}


export default Header
