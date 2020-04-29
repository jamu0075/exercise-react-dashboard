import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import Header from './components/header'
import LoginPage from './components/login'
import LoginRequired from './components/bodyLoginRequired'
import NavColumn from './components/navColumn'
import BodyHome from './components/bodyHome'
import BodyContracts from './components/bodyContracts'

class App extends Component {
  state = {
    isAuth: true
  };

  handleAuthenticate = () => {
    this.setState( { isAuth: !this.state.isAuth});
  };


  render() {
    return (
      <div className="app">
        <Router>
          <Header isAuth={ this.state.isAuth }/>
          <NavColumn />
          <Switch>
            <Route path='/' exact component={ BodyHome } />
            <Route path='/login' render={(props) => <LoginPage {...props} onAuthenticate={this.handleAuthenticate} isAuth={this.state.isAuth}/>} />
            <Route path='/contracts' component={ this.state.isAuth ? BodyContracts : LoginRequired } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
