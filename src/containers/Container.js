import React from "react";

export default class Container extends React.Component {
  render() {
    return (
      <div>
        <h1>Container component (connected)</h1>
        <div>
          <button onClick={() => this.props.fetchChecklists()}>fetch</button>
        </div>
      </div>
    );
  }
}
