import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './map.css';

const CartoDB_Positron = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png';
const CartoDB_PositronAttr = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';
const mapCenter = [37.5407, -77.4360];
const zoomLevel = 11;


class RoamMap extends Component {
    render() {
        return (
            <div>
            {/* <ToolbarFeatures/> */}
        
                <Map
                    // ref={m => { this.leafletMap = m; }}
                    center={mapCenter}
                    zoom={zoomLevel}
                >
                    <TileLayer
                        attribution={CartoDB_PositronAttr}
                        url={CartoDB_Positron}
                    />

                    
                </Map>
            </div>
        );
    }
}

export default RoamMap;