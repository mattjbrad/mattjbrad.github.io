import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/UI/Header/Header';
import Navigation from './components/UI/Navigation/Navigation';

import Rate from './containers/Rate/Rate';
import Leaderboard from './containers/Leaderboard/Leaderboard';
import Upload from './containers/Upload/Upload';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Navigation />
          <Route exact path="/" component={Rate}/>
          <Route path="/leaderboard" component={Leaderboard}/>
          <Route path="/upload" component={Upload}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
