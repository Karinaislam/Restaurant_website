import React, { Component } from 'react';
import Header from "../Header/Header";
import Slides from "../Slides/Slides";
import Hours from "../Hours/Hours";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";
import About_us from "../About_us/About_us";
import {Link} from 'react-router-dom';


class Home extends Component {
    render() {
        
        return (
            <div>
                <Header/>
                <Slides/>
                <Hours/>
                <Map/>
                <Footer/>
                
            </div>
        );
    }
}

export default Home;