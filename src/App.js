import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <div className="nav-bar2">
              <div className="title">Eva Golabek-Puget</div>
            </div>
            <div className='side-bar'>
              <div className='profile-img'>
                <img src={'/images/me.png'} alt="" />
              </div>
              LINKEDIN PROFILE
            </div>
            <div className='projects'>
              <Route exact path="/" component={Main} />
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
