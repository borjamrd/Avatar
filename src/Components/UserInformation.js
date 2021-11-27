import React from 'react';
import "./styles.css";
import {Item} from './Item'

export class UserInformation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...props.data }
    this.handleNewName = this.handleNewName.bind(this);
  }
  handleNewName(name/* , email */) {
    this.setState({ name })
    this.props.onChange(name)
    /* this.setState({email}) */
    /*  this.props.onChange(email) --------------------- Ver estos cambios con Miguel*/
  }
  render() {
    let informationItem = this.state.elements.map((element) =>
      <>
        <Item element={element} onChange={this.handleNewName}/>
      </>);
    return (
      <div>
        <h3>{this.state.title}</h3>
        <div className="section-item">
          {informationItem}
        </div>
      </div>
    )
  }
}

