import React, { Component } from "react";
import "./Skill.css";
export default class Work extends Component {
  render() {
    return (
      <div className="work">
        <div className="heading">
          <div className="line"></div>
          Work Experience
          <div className="line"></div>
        </div>
        <div className="table">
          <div className="tableType">
            <div className="strong">May 2020 - Present</div>
            <p>Slack</p>
          </div>
          <div className="tableType">
            <div className="strong">May 2020 - July 2020</div>
            <p>Backend Development Intern</p>
          </div>
        </div>

        {/* <table className="tbl" border="1">
          <br />
          <br />
          <tr>
            <td>Languages</td>
            <td>MySQL, MongoDB</td>
          </tr>
          <tr>
            <td>Languages</td>
            <td>c,C++ java</td>
          </tr>
        </table> */}
      </div>
    );
  }
}
