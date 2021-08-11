import React, { Component } from 'react'
import axios from 'axios';
import Main from './Main';
import Weather from './weather';


export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: "",
            lon: "",
            cityName: "",
            weatherSt: []
        }
    }
    cityhandler = (e) => {
        this.setState({
            cityName: e.target.value,


        })
    }

    explorehandle = (e) => {
        e.preventDefault();
        let url = `https://eu1.locationiq.com/v1/search.php?key=pk.11a1580917a0ff1100e019bd6df044f8&q=${this.state.cityName}&format=json`
        axios.get(url).then(res => {
            let data = res.data[0]


            this.setState({
                cityName: data.display_name,
                lat: data.lat,
                lon: data.lon
            })

        });
        this.weather(this.state.cityName)
    }

    weather = (city) => {
        let url = `http://locoalhost:3001/weather-data/${city.split(',')[0]}`
        axios.get(url).then(res => {
            let data = res.data
            console.log(data);

            this.setState({
                weatherSt: data,

            })
            console.log(this.state.weatherSt)

        })
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
                { this.state.weatherSt && <> {this.setState.weatherSt.map((ele) => {
                    return (<Weather date={ele.date} description={ele.description} />)
                   
                })



                }
                 </>}


               

               
            </div >
        )

    }

}
export default Header;
