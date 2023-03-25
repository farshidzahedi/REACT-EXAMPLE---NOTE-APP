import React, { Component } from "react";

export default class Note extends Component {

    removeHandler(id){
        this.props.removenotes(id)
    }


  render() {
    let{id,color,title}=this.props
    return (
      <div
        className="card shadow-sm rounded"
        style={{ backgroundColor: color }}
      >
        <p className="card-text p-3">{title}</p>
        <button onClick={this.removeHandler.bind(this,id)} className="note-btn">انجام شد</button>
      </div>
    );
  }
}
