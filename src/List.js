import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox';
import UserCard from './UserCard';

class List extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://v10dev.yeira.training/api/v1/users?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiaHR0cHM6Ly92MTBkZXYueWVpcmEudHJhaW5pbmcvYXBpL3YxL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTUzOTEwMjE1NSwiZXhwIjoxNTM5MTA1NzU1LCJuYmYiOjE1MzkxMDIxNTUsImp0aSI6IkRWQ0ZmOXZWbWZqeDZzZlEifQ.Vc59hHd7sQwJ8lATbjhNiSitlqWGI0gGMi8vYSE0eSA')
    .then(response => {return response.json();})
    .then(users => {this.setState({ users: users.data })});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render(){
    const filteredUsers = this.state.users.filter(user => {
      return user.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='container-fluid'>
        <div className='col-md-12'>
          <h1>CRUD</h1>
        </div>
          <SearchBox searchChange={this.onSearchChange}/>
          <UserCard className='col-md-12' users={filteredUsers}/>
      </div>
    );
  }
}

export default List;
