import React from 'react';
import "./Components/styles.css";

export class ProfileHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...props.data };
    }
    render() {
        return (
            <div className="profile-info">
                <img src={this.state.image} className="avatar-img" alt="#"></img>
                <div><h1>{this.state.name}</h1></div>
                <div>{this.state.user}</div>
            </div>
        )
    }
}
