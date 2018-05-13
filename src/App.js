import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Main from './components/Main'
import renderHTML from 'react-render-html'

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <div className="title">Eva Golabek-Puget</div>
            <div className="nav-bar"></div>
            <div className='side-bar'>
              <div className='profile-img'>
                <img src={'/images/me.png'} alt="" />
              </div>
              <div className = 'about'>
                <br/>
                <text> I am a junior web developer with previous experience and interest in fashion and marketing.
                I have strong interpersonal skills developed both within education and work.
                My other strengths are that I am a fast learner, highly self-motivated and adaptable to changing circumstances and environments.</text>
              </div>
              <br/>
              {renderHTML(`<a href="https://www.linkedin.com/in/eva-golabek-puget-24303840/">LinkedIn</a>`)}
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
