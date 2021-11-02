import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import NavBar from './components/NavBar';
import HomePage from './pages/homePage/HomePage';
import ReactPortalPage from './pages/reactPortalPage/ReactPortalPage';
import SomePage from './pages/somePage/SomePage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/react-portal">
            <ReactPortalPage/>
          </Route>
          <Route path="/somepage">
            <SomePage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
