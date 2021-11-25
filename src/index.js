import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import photo from './foto-borja.png'
import "./styles.css";
/* Primera tarea borja
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

const data = { image: photo, name: "Borja Muñoz", email: "borjamunoz@europapress.es", user: "cchu01", language: "English (United States)", PrivacySettings: "Only administrators and other instructors can view my profile information" };

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
    { title: "Global Notification Settings", text: <div><input type="checkbox" />Stream Notifications<input type="checkbox" />Email Notifications<input type="checkbox" />Push Notifications</div> }
  ]
}

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...props.data }
    this.thisSetStateFinalName = this.thisSetStateFinalName.bind(this);
  };
  
  /* thisSetStateFinalName(name){
    (this.setState({name:name})  -------------------------Comento esto que estaba mostrando un error, lo retomamos el viernes 26
  }
   */
  render() {
    return (
      <><div className="topSpace"></div>
        <ProfileHeader data={data} />
        <div className="section1">
          <UserInformation data={basicInfo} />
          <UserInformation data={additionalInfo} />
        </div>
        <div className="section2">
          <UserInformation data={systemSettings} />
        </div>

      </>
    )
  }
}

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...props.data };
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
    this.state = { ...props.data }
    this.handleNewName = this.handleNewName.bind(this);

  }
handleNewName(name){
  this.setState({name:name})
  this.props.onChange(name)
}
  render() {
    let informationItem = this.state.elements.map((element) =>
      <>
        <Item element={element} onChange={this.handleNewName} />
      </>);
    return (
      <div>
        <h3>{this.state.title}</h3>
        {informationItem}
      </div>
    )
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.element }
    this.editField = this.editField.bind(this);
    this.addNewName = this.addNewName.bind(this);
  }

  editField() {
      this.setState(prevState => (
        { isEditable: !prevState.isEditable }));
  }
  
  /* addNewName(e){
    this.setState({text: e.target.value});
  } */
  addNewName(e){
    this.props.onChange(e.target.value)
  }
  
    render() {
      let myRender = undefined
      {
        if (this.state.isText) {
            if (this.state.isEditable) {
              myRender = <div> {this.state.text} <button onClick={this.editField} >Editar</button></div>
            } else {
              myRender = <div> <input type="text" placeholder={this.state.text} onChange={this.addNewName}></input> <button onClick={this.editField}>Guardar</button></div>
            }
        } else { 
          myRender = <div>{this.state.text}</div>
        }
      }
      return (
        <div className="informationItem">
          {myRender}
        </div>
      )
    
}
}

ReactDOM.render(<Profile />, document.getElementById('root'));


