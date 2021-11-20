import React from 'react';
import ReactDOM from 'react-dom';
import photo from './Linkedin.jpeg'
import "./styles.css";
/* 
let data = {image:photo,name: "Borja Muñoz", email: "borjamunoz@europapress.es", phone: "+34 722 11 21 11", devices: "Mobile", location: "Madrid, Spain", RRSS: "Facebook", currency: "$", totalamount: "2,309"};

class Avatar extends React.Component{
  constructor(props){
    super(props)
    this.state = {...props.data}
  }
  render(){
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
          </div>
        </div>
  )
}
} */

let data = { image: photo, name: "Borja Muñoz", email: "borjamunoz@europapress.es", user: "cchu01", language: "English (United States)", PrivacySettings: "Only administrators and other instructors can view my profile information" };

let basicInfo = {
  title: "Basic info",
  elements: [
    { title: "Full Name", text: data.name, isEditable: true },
    { title: "Email Address", text: data.email, isEditable: false },
    { title: "Student ID", text: <a href="#">Add student ID</a> },
    { title: "Password", text: <a href="#">Change Password</a> }
  ]
}

let additionalInfo = {
  title: "Additional info",
  elements: [
    { title: "Gender", text: <a href="#">Add Gender</a>, isEditable: false }
  ]
}

let systemSettings = {
  title: 'System settings',
  elements: [
    { title: "Language", text: data.language, isEditable: true },
    { title: "Privacy Settings", text: data.PrivacySettings, isEditable: true },
    { title: "Global Notification Settings", text: <div><input type="checkbox"/>Stream Notifications<input type="checkbox"/>Email Notifications<input type="checkbox"/>Push Notifications</div>}
  ]
}


class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...props.data} };
  
  render() {
    return (
      <>
        <ProfileHeader data={data}/>
        <UserInformation data={basicInfo}/>
        <UserInformation data={additionalInfo}/>
        <UserInformation data={systemSettings}/>
      </>
    )
  }
}

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...props.data};
  }
  render() {
    return (
      <div className="profile-info">        
        <img src={this.state.image} className="avatar-img" alt="#"></img>
        <div>{this.state.name}</div>
        <div>{this.state.user}</div>
      </div>
    )
  }
}

class UserInformation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...props.data}
  }
  render(){
    let informationItem = this.state.elements.map((element)=>
    <>
    <div className="informationItem">
     <div>{element.title}</div>
     <div>{element.text}</div>
    </div>
    </>);
    return(
      <div>
        <h3>{this.state.title}</h3>
        {informationItem}
      </div>
      
    )
  }
  
}

ReactDOM.render(<Profile />, document.getElementById('root'));


