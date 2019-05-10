import React, { Component } from "react";
import Stories from "./Stories";

/* class App extends Component {
  state = {};
  render() {
    const { stories, onArchive } = this.props;
    return (
      <div className="app">
        <Stories stories={stories} onArchive={onArchive} />
      </div>
    );
  }
} */

/* class App extends Component {
  render() {
    return (
      <div className="app">
        <Stories />
      </div>
    );
  }
} */

const App = () => (
  <div className="app">
    <Stories />
  </div>
);

export default App;
