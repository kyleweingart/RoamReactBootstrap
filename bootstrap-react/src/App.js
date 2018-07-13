import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavbarFeatures from './components/Navbar/navbar';
import HomeMap from './pages/HomeMap';
import SearchYelp from './pages/SearchYelp';
import SavedLocations from './pages/SavedLocations';


const App = () => (
  <Router>
    <div>
      <NavbarFeatures/>
      <Route exact path="/" component={HomeMap} />
      <Route exact path="/search" component={SearchYelp} />
      <Route exact path="/saved" component={SavedLocations} />

        
    </div>

  </Router>
      

      
  );
 


export default App;
