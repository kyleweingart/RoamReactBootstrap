import React, { Component } from 'react';
import './App.css';
import NavbarFeatures from './components/Navbar/navbar';
import RoamMap from './components/Map/map';


class App extends Component {
  render() {
    return (
    <div>
      <div className="App">
        <NavbarFeatures/>
        
      </div>

      <div className="map"> 
        <RoamMap/> 
      </div>

    </div>
      

      
    );
  }
}

export default App;
