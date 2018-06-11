import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';
import './Map.css';
import {
    google,
  } from "google-map-react";

const AnyReactComponent = ({ text }) => <div style={{ color: 'red'}}>{ text }</div>;

function createMapOptions(maps) {
  
    console.log(maps.SymbolPath);
    return {
      zoomControlOptions: {
        position: maps.ControlPosition.RIGHT_CENTER,
        style: maps.ZoomControlStyle.SMALL
      },
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT
      },
      mapTypeControl: true
    };
  }

class Map extends Component {

    

    render() {
        const defaultProps = {
            center: { lat: 42.035852, lng: -87.6857289 },
            zoom: 11
          }
          console.log(google);
        return (
            <div className="map" >
              <div className="cla">
              <div className="address"> <h1>Address :</h1>1018 Davis st., Evanston, IL 60201</div>
                 <div  className='google-map map_div'style={{ height: '30vh', width: '50%'  }}>
                   
        <GoogleMapReact
          defaultCenter={ defaultProps.center }
          defaultZoom={ defaultProps.zoom }
          options={createMapOptions}>
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text={'Cozy Noddles'}
          />
          
          {/* <Marker position={{ lat:42.0748621, lng: -87.7269254 }} /> */}
        </GoogleMapReact>
      </div>
                </div>                
                
            </div>
        );
    }
}

export default Map;