import React, { Component } from "react";
import Skill from "./Skill";
import Work from "./Work";
import Dp from "./Dp";
export default class Myapp extends Component {
  render() {
    return (
      <div className="parent">
        <div>
          {" "}
          <Skill />
        </div>
        <div>
          <Dp />
        </div>

        <div>
          {" "}
          <Work />
        </div>
      </div>
    );
  }
}
