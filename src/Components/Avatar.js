import React from 'react';
import "./Components/styles.css";


export class Avatar extends React.Component {
    constructor(props) {
      super(props)
      this.state = { ...props.data, isSignedIn: true }
      this.handleSignIn = this.handleSignIn.bind(this)
    }
    handleSignIn() {
      this.setState(state => (
        { isSignedIn: !state.isSignedIn }
      ))
      this.props.value(this.state.isSignedIn)
    }
  
    render() {
      return (
        <div className="avatar">
          <div className="personal-info">
            <img src={this.state.image} className="avatar-img" alt="#"></img>
            <div>{this.state.name}</div>
            <div>{this.state.email}</div>
            <div>{this.state.phone}</div>
  
          </div>
          <div className="other-info">
            <ul>
              <li>Devices Used - {this.state.devices}</li>
              <li>Location - {this.state.location}</li>
              <li>{this.state.RRSS} Profile </li>
            </ul>
            <div className="total-amount">Total Amount Spent {this.state.currency} {this.state.totalamount}</div>
            <button className="log-button" onClick={this.handleSignIn}>LOG IN</button>
          </div>
        </div>
      )
    }
  }
  