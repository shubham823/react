import React, { Component } from "react";
import "./Skill.css";
export default class Skill extends Component {
  render() {
    return (
      <div className="skill">
        <div className="heading">
          <div className="line"></div>
          Skills
          <div className="line"></div>
        </div>
        <div className="table">
          <div className="tableType">
            <div className="strong">Languages</div>
            <p>C, C++, Java, Python, JavaScript</p>
          </div>
          <div className="tableType">
            <div className="strong">Database</div>
            <p>MySQL, MongoDB</p>
          </div>
          <div className="tableType">
            <div className="strong">Web Technology</div>
            <p>
              HTML, CSS, React.js, Bootstrap4, Node.js, Express.js, Mongoose,
              MaterialUI
            </p>
          </div>
          <div className="tableType">
            <div className="strong">Tools</div>
            <p>
              VS Code, Anaconda, IntelliJ IDEA, WebStorm, MongoDB Compass, MySQL
              Workbench
            </p>
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
