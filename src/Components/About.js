import React, { Component } from "react";
import FileSaver from "file-saver";

class About extends Component {
  resumeDownload() {
    FileSaver.saveAs(
      "/Mohammad-Ali-Ghorbani-Resume-Aug-2022.txt",
      "Mohammad-Ali-Ghorbani-Resume-Aug-2022.txt"
    );
  }
  // cvDownload() {
  //     FileSaver.saveAs(
  //         "/Mohammad-Ali-Ghorbani-CV_feb-2022.pdf",
  //         "Mohammad-Ali-Ghorbani-CV.pdf"
  //     );
  // }
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="four columns">
            <img className="profile-pic" src={profilepic} alt="Profile Pic" />
          </div>
          <div className="eight columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <button className="button" onClick={this.resumeDownload}>
                    <i className="fa fa-download"></i>
                    Download Resume
                  </button>

                  {/* <button className="button" onClick={this.cvDownload}>
                    <i className="fa fa-download"></i>
                    Download CV
                  </button> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
