import React, { Component } from 'react';
import RoamMap from '../components/Map/map';
import YelpSearch from '../components/YelpSearchInput/yelpsearch'



class SearchYelp extends Component {
  render() {
    return (
    <div>
      <div className="App">
      
      <YelpSearch/>
        
      </div>

      <div className="map"> 

        <RoamMap/> 
        
      </div>
      
    </div>
      

      
    );
  }
}

export default SearchYelp;