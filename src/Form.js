import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: this.props.name,
      email: this.props.email,
      address: this.props.address,
      phone: this.props.phone,
      mobile_phone: this.props.phone
    }
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  handleAddressChange = (e) => {
    this.setState({
      address: e.target.value
    });
  }

  handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value
    });
  }

  handleMobileChange = (e) => {
    this.setState({
      mobile_phone: e.target.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    let userData = this.state.data;
    fetch('https://v10dev.yeira.training/api/v1/users?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiaHR0cHM6Ly92MTBkZXYueWVpcmEudHJhaW5pbmcvYXBpL3YxL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTUzOTEwMTc2NSwiZXhwIjoxNTM5MTA1MzY1LCJuYmYiOjE1MzkxMDE3NjUsImp0aSI6Im1mUnliZG5jTGlXc3p1VG8ifQ.W6O59rs53sfPSql-8t2aSrjypwzkMiCg4Pra3ZKpG_c', {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => {
      response.json().then(data => {
        this.props.onSubmit(userData)
    })
    })
  }

    render(){
        return (
                  <div className='col-md-12'>
                    <form name="new-user" className="form-horizontal" onSubmit={this.handleSubmit}>
                        <div id="new-user" className="row">
                            <div className="form-group">
                            <label className="col-sm-4 required" htmlFor="user_name">Name</label>
                                <div className="col-sm-5">
                                    <input type="text"
                                           id="user_name"
                                           required="required"
                                           value={this.state.name}
                                           onChange={this.handleNameChange}
                                           className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-4 required" htmlFor="user_email">Email</label>
                                <div className="col-sm-5">
                                    <input type="email"
                                           id="user_email"
                                           required="required"
                                           value={this.state.email}
                                           onChange={this.handleEmailChange}
                                           className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-4 required" htmlFor="user_address">Address</label>
                                <div className="col-sm-5">
                                    <input type="text"
                                           id="user_address"
                                           required="required"
                                           value={this.state.address}
                                           onChange={this.handleAddressChange}
                                           className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-4 required" htmlFor="user_phone">Phone</label>
                                <div className="col-sm-5">
                                    <input type="text"
                                           id="user_phone"
                                           required="required"
                                           value={this.state.phone}
                                           onChange={this.handlePhoneChange}
                                           className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-4 required" htmlFor="user_mobile">Mobile Phone</label>
                                <div className="col-sm-5">
                                    <input type="text"
                                           id="user_mobile"
                                           required="required"
                                           value={this.state.mobile_phone}
                                           onChange={this.handleMobilChange}
                                           className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-5">
                                    <button type="submit"
                                            id="user_submit"
                                            className="btn-success btn"
                                            data-toggle="modal" 
                                            data-target="#Modal">
                                        Add
                                    </button>
                                </div>
                            </div>
                                <div className="col-sm-4"></div>
                                <div className="col-sm-5 btn-ret">
                                  <Link to="/List" className="return">
                                  <button type="button" class="btn btn-secondary">View List</button>
                                  </Link>
                              </div>

                        </div>


                    </form>
                    <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">New user successfully added</h5>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Ok</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
        );
  }
}

export default Form;