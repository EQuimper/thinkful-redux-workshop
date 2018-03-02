import React, { Component } from 'react';

class MouseMe extends Component {
  state = {
    mouseX: 0,
    mouseY: 0
  }

  _mouseMove = e => {
    this.setState({
      mouseX: e.screenX,
      mouseY: e.screenY
    })
  }

  render() {
    return (
      <div style={{ backgroundColor: 'red' }} onMouseMove={this._mouseMove}>
        <h4>MouseY: {this.state.mouseY}</h4>
        <h4>MouseX: {this.state.mouseX}</h4>
      </div>
    );
  }
}

export default MouseMe;