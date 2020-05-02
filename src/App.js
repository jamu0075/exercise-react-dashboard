import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import Header from './components/header'
import LoginPage from './components/login'
import NavColumn from './components/navColumn'
import BodyHome from './components/bodyHome'
import BodyContracts from './components/bodyContracts'

class App extends Component {
  // Simple single source state that maintains "authentication" status and contracts
  state = {
    isAuth: true,
    unique_id_value: 4,
    contractList : [
      {
          unique_id: 1,
          id: '1',
          status: 'Ongoing',
          company: 'A',
          start_date: '01/01/2020',
          end_date: '06/01/2020',
          description: 'Details about the contract here...',
          contact_email: 'company.A.email@company.co',
          contact_phone: '123-456-7890'
      },
      {
          unique_id: 2,
          id: '2',
          status: 'Ongoing',
          company: 'B',
          start_date: '10/01/2019',
          end_date: '10/01/2020',
          description: 'This is a good contract!',
          contact_email: 'insurance@company.co',
          contact_phone: '123-456-7890'
      },
      {
          unique_id: 3,
          id: '3',
          status: 'Completed',
          company: 'C',
          start_date: '11/01/2019',
          end_date: '03/01/2020',
          description: 'This went well! Would love to work with them again.',
          contact_email: 'insurance@company.co',
          contact_phone: '123-456-7890'   
      }
    ]
  };

  // Handles simple "Authentication" that toggles the 'isAuth' boolean
  handleAuthenticate = () => {
    this.setState({ isAuth: !this.state.isAuth});
  };

  // Handles the unique ID incrementation by adding 1
  handleUniqueIDIncrement = () => {
    this.setState({ unique_id_value: this.state.unique_id_value + 1 })
  };

  // Handles creating a new contract object and adding to the contract list
  handleAddContract = (event) => {
    this.handleUniqueIDIncrement();

    const newContract = {
      unique_id: this.state.unique_id_value,
      id: event.id,
      status: event.status,
      company: event.company,
      start_date: event.start_date,
      end_date: event.end_date,
      description: event.description,
      contact_email: event.contact_email,
      contact_phone: event.contact_phone 
    };
    
    this.setState({ contractList: this.state.contractList.concat(newContract) })
  };

  // Handles removing a contract from the contract list via 'unique_id'
  handleDeleteContract = (event) => {
    this.setState({ contractList: this.state.contractList.filter((contract) => { return contract.unique_id !== event}) })
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Header isAuth={ this.state.isAuth } />
          <NavColumn isAuth={ this.state.isAuth } />
          <Switch>
            <Route path='/' exact component={ BodyHome } />
            <Route path='/login' render={ (props) => <LoginPage {...props} onAuthenticate={ this.handleAuthenticate } isAuth={ this.state.isAuth } /> } />
            <Route path='/contracts' render={ (props) => <BodyContracts {...props} onAddContract={ this.handleAddContract } onDeleteContract={ this.handleDeleteContract } contracts={this.state.contractList } />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
