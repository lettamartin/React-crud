import React, { Component } from 'react';
import './Create.css'
import Form from './Form';

class Create extends Component {


    render(){
    
    return (
        <div className='container-fluid'>
            <div className='col-md-12'>
              <h1>CRUD</h1>
            </div>
                <Form onSubmit={this.handlesubmit}></Form>
        </div>
    );
  }
    
}

export default Create;