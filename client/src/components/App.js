import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import Home from './Home/Home';
import JobHub from './About/JobHub/JobHub';
import Photogenic from './About/Photogenic/Photogenic';
import HousePlanner from './About/HousePlanner/HousePlanner';
import ReactFlashcards from './About/ReactFlashcards/ReactFlashcards';
import RestaurantRoulette from './About/RestaurantRoulette/RestaurantRoulette';
import RoadTripPlanner from './About/RoadTripPlanner/RoadTripPlanner';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Route exact path="/" component={Home} />
          <Route path="/about/jobhub" component={JobHub} />
          <Route path="/about/photogenic" component={Photogenic} />
          <Route path="/about/house_planner" component={HousePlanner} />
          <Route path="/about/react-flashcards" component={ReactFlashcards} />
          <Route path="/about/restaurant_roulette" component={RestaurantRoulette} />
          <Route path="/about/road-trip-planner" component={RoadTripPlanner} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
