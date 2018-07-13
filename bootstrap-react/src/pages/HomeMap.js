import React, { Component } from 'react';
import RoamMap from '../components/Map/map';
import SaveLocation from '../components/SaveLocation/savelocation';
import ToolbarFeatures from '../components/Toolbar/toolbar';
import TimeToolbarFeatures from '../components/TimeToolbar/timetoolbar';
import GeoSearch from '../components/GeoSearchInput/geosearch';

class HomeMap extends Component {
  render() {
    return (
    <div>
      <div className="App">
        <GeoSearch/>
        <ToolbarFeatures/>
        <TimeToolbarFeatures/>
        
        
      </div>

      <div className="map"> 
     
        <RoamMap/> 
        <SaveLocation/>
      </div>
     

    </div>

     
      

      
    );
  }
}

export default HomeMap;
