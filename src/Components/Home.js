import React from "react";
import { Component } from "react";
import profilePic from "../Images/sample.jpg";

let defaultName = "Tim Cook";
let defaultDescription =
  "Timothy Donald Cook (born November 1, 1960) is an American business executive who has been the chief executive officer of Apple Inc. since 2011. Cook previously served as the company's chief operating officer under its co-founder Steve Jobs. Cook joined Apple in March 1998 as a senior vice president for worldwide operations, and then served as the executive vice president for worldwide sales and operations. He was made the chief executive on August 24, 2011, prior to Jobs' death in October of that year.";
class Home extends Component {
  state = { userName: defaultName, userDescription: defaultDescription };

  onChangeName = (event) => {
    this.setState({ userName: event.target.value });
  };

  onChangeDescription = (event) => {
    this.setState({ userDescription: event.target.value });
  };

  render() {
    const { userName, userDescription } = this.state;
    return (
      <div class="container ">
        <div class="row">
          <div class="col-3">
            <img class="w-100" src={profilePic} alt="profileImage" />
          </div>
          <div class="col-6 d-flex flex-column justify-content-center">
            <h1 class="main-heading">{userName}</h1>
            <p class="d-inline-flex">{userDescription}</p>
          </div>
          <div class="col-6 d-flex flex-column justify-content-center">
            <div className="mb-3">
              <label class="form-label" htmlFor="myUserName">
                User Name
              </label>
              <input type="text" class="form-control" 
                id="myUserName"  
                onChange={this.onChangeName} 
                placeholder="User Name"
              />
            </div>
            <div class="mb-3">
              <label class="form-label" htmlFor="myDescription">
                Description
              </label>
              <input type="text" class="form-control"
                id="myDescription"
                onChange={this.onChangeDescription}
                placeholder="Description"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;