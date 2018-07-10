import React, { Component } from 'react';
import './App.css';
import NavbarFeatures from './components/Navbar/navbar';
import RoamMap from './components/Map/map';
import ToolbarFeatures from './components/Toolbar/toolbar';

class App extends Component {
  render() {
    return (
    <div>
      <div className="App">
        <NavbarFeatures/>
        
      </div>

      <div> 
        <RoamMap/> 
      </div>

    </div>
      

      
    );
  }
}

export default App;
