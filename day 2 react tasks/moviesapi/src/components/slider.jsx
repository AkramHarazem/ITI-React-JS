import React, { PureComponent } from "react";
import { v4 as uuid } from "uuid";

export default class Slider extends PureComponent {
  constructor() {
    super();
    this.state = { i: 1 };
  }
  
 next = () => {
    this.setState((oldState) => {
      if (oldState.i < 5) {
        return { i: oldState.i + 1 };
      } else {
        alert("last image");
      }
    })
  };

previous = () => {
    this.setState((oldState) => {
      if (oldState.i > 1) {
        return { i: oldState.i - 1 };
      } else {
        alert("first image");
      }
    })
  };
  
  
  render() {
    
    return (
      <div key={uuid()} className="text-center mt-3">
        <img
          key={uuid()}
          className="d-block m-auto mb-3 border border-dark rounded-2 border-2"
          width={"300px"}
          height={"200px"}
          src={`images/${this.state.i}.jpg`}
          alt="baby"
        />
        <button key={uuid()} className=" btn btn-danger" onClick={this.previous}>
          Previous
        </button>
        <button key={uuid()} className="btn btn-success m-2" onClick={this.next}>
          Next
        </button>
      </div>
    );
  }
}
