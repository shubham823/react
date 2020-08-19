import "./App.css";
import React, { Component } from "react";
import Myapp from "./Components/myapp";
import Work from "./Components/Work";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <strong>
            <b>
              <i>
                <u>Resume</u>
              </i>
            </b>
          </strong>{" "}
        </h1>
        <h2 className="light">Shubham gupta</h2>
        <Myapp />
      </div>
    );
  }
}
