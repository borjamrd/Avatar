import React from 'react';
import ReactDOM from 'react-dom';
import photo from './Components/foto-borja.png';
import "./Components/styles.css";
import  Avatar  from './Components/Avatar.js';
import  Profile from './Components/Profile.js'

const data = { image: photo, name: "Borja Muñoz", email: "borjamunoz@europapress.es", user: "cchu01", phone: "+34 722 11 21 11", language: "English (United States)", PrivacySettings: "Only administrators and other instructors can view my profile information", devices: "Mobile", location: "Madrid, Spain", RRSS: "Facebook", currency: "$", totalamount: "2,309" };

const basicInfo = {
  title: "Basic info",
  elements: [
    { title: "Full Name", text: data.name, isEditable: true, isText: true },
    { title: "Email Address", text: data.email, isEditable: true, isText: true },
    { title: "Student ID", text: (<a href="#">Add student ID</a>), isEditable: false, isText: false },
    { title: "Password", text: <a href="#">Change Password</a>, isEditable: false, isText: false }
  ]
}

const additionalInfo = {
  title: "Additional info",
  elements: [
    { title: "Gender", text: <a href="#">Add Gender</a>, isEditable: false, isText: false }
  ]
}

const systemSettings = {
  title: 'System settings',
  elements: [
    { title: "Language", text: data.language, isEditable: false, isText: false },
    { title: "Privacy Settings", text: data.PrivacySettings, isEditable: false, isText: false },
    { title: "Global Notification Settings", text: <div className="item-checkbox"><input type="checkbox" />Stream Notifications<input type="checkbox" />Email Notifications<input type="checkbox" />Push Notifications</div> }
  ]
}

class FinalRender extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isSignedIn: false }
    this.isSignedInOrOn = this.isSignedInOrOn.bind(this)
  }

  isSignedInOrOn(value) {
    (this.setState({ isSignedIn: value }
    ))
  }

  render() {
    let myRender = undefined
    {
      if (this.state.isSignedIn == false) {
        myRender = <Avatar data={data} value={this.isSignedInOrOn} />
      } else {
        myRender = <Profile data={data} value={this.isSignedInOrOn} />
      }
    }
    return (
      <div>
        {myRender}
      </div>
    )
  }
}
ReactDOM.render(<FinalRender />, document.getElementById('root'));


