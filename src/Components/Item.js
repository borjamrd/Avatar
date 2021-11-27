import React from 'react';
import "./styles.css";
import { TiPencil } from "react-icons/ti";
import { IoIosSave } from "react-icons/io";


export class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.element }
    this.editField = this.editField.bind(this);
    this.addNewText = this.addNewText.bind(this);
  }

  editField(e) {
      this.setState(prevState => (
        { isEditable: !prevState.isEditable }));
  }
  
  addNewText(e) {
    this.setState({ text: e.target.value })
    this.props.onChange(e.target.value)
    /* console.log(e.target.value)  -------------Revisar con Miguel */
  }

  render() {
    let myRender = undefined
    {
      if (this.state.isText) {
        if (this.state.isEditable) {
          myRender = <div className="item" >
            <span>{this.state.title}</span>
            <div className="item-text">{this.state.text}</div>

            <div className="item-button"> <TiPencil onClick={this.editField} />
            </div></div>
        } else {
          myRender = <div className="item">
            <span>{this.state.title}</span>
            <div className="item-text"><input type="text" placeholder={this.state.text} onChange={this.addNewText}></input></div> <div className="item-button"><IoIosSave onClick={this.editField} /></div>
          </div>
        }
      } else {
        myRender = <div className="item2"><span>{this.state.title}</span><div>{this.state.text}</div></div>
      }
    }
    return (
      <div>
        {myRender}
      </div>
    )

  }
}