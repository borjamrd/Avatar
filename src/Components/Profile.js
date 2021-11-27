import React from 'react';
import { ProfileHeader } from './Components/ProfileHeader.js'
import { UserInformation } from './Components/UserInformation.js';
import "./Components/styles.css";

export class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...props.data, isSignedIn: false }
        this.thisSetStateFinalName = this.thisSetStateFinalName.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
    }
    thisSetStateFinalName(name) {
        (this.setState({ name: name }
        ))
    }

    handleSignIn() {
        this.setState(state => (
            { isSignedIn: !state.isSignedIn }
        ))
        this.props.value(this.state.isSignedIn)
    }

    render() {
        return (
            <><div className="topSpace"></div>
                <ProfileHeader data={data} />
                <button className="log-button" onClick={this.handleSignIn}>LOG OUT</button>
                <div className="main">
                    <div className="section1">
                        <UserInformation data={basicInfo} onChange={this.thisSetStateFinalName} />
                        <UserInformation data={additionalInfo} />
                    </div>
                    <div className="section2">
                        <UserInformation data={systemSettings} />
                    </div>
                </div>

            </>
        )
    }
}