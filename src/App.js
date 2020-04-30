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
    isAuth: true,
    contractList : [
      {
          unique_id: '1',
          id: '1',
          status: 'Ongoing',
          company: 'Company A',
          start_date: '01/01/2020',
          end_date: '06/01/2020',
          description: 'Details about the contract here...',
          contact_email: 'company.A.email@company.co',
          contact_phone: '123-456-7890'
      },
      {
          unique_id: '2',
          id: '2',
          status: 'Ongoing',
          company: 'Insurance Company',
          start_date: '10/01/2019',
          end_date: '10/01/2020',
          description: 'This is a good contract!',
          contact_email: 'insurance@company.co',
          contact_phone: '123-456-7890'
      },
      {
          unique_id: '3',
          id: '3',
          status: 'Completed',
          company: 'Cool Company',
          start_date: '11/01/2019',
          end_date: '03/01/2020',
          description: 'This went well! Would love to work with them again.',
          contact_email: 'insurance@company.co',
          contact_phone: '123-456-7890'   
      }
    ]
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
            <Route path='/login' render={ (props) => <LoginPage {...props} onAuthenticate={ this.handleAuthenticate } isAuth={ this.state.isAuth } /> } />
            { this.state.isAuth 
            ? <Route path='/contracts' render={ (props) => <BodyContracts {...props} contracts={this.state.contractList } />} />
            : <LoginRequired /> }
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
