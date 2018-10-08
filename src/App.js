import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import List from './List';
import Create from './Create';

export default class App extends Component {
  

  render(){
    return (
      <BrowserRouter>
        <Switch>

          <Route path="/List" component={List} />
          <Route path="/Create" component={Create}/>

        </Switch>
      </BrowserRouter>
    );
  }
}
