import React, { Component } from "react";

export default class about extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                I'm fulltime coder and part time traveller. My expertise includes Frontend skills - HTML/CSS, javascript(React.js) and backend skills Node.js, Express.js,  NoSQL and SQL.  
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Mrugesh Parmar</span>
                    <br />
                    <span>
                      San Antonio, TX
                    </span>
                    <br />
                    <span>(720)397-3402</span>
                    <br />
                    <span>me@mrugeshparmar.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="https://drive.google.com/file/d/0B0FJfWApyNHKdUVoemducnctXzVHS0tWUkltMjhRV0Y1aVdB/view?usp=sharing" className="button">
                      <i className="fa fa-download" />
                      Download Resume
                    </a>
                  </p>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </section>{" "}
      </React.Fragment>
    );
  }
}
