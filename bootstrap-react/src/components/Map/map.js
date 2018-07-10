import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import {Button,Fa} from 'mdbreact';
import './map.css';
import ToolbarFeatures from '../Toolbar/toolbar';


// const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const CartoDB_Positron = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png';
const CartoDB_PositronAttr = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';
// const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
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