import React, { Component } from 'react';

import "../styles/AsideProfile.css";

class AsideProfile extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-3 col-sm-12 my-5">

          <div className="row mx-auto d-flex justify-content-center ">
            <img className="profileAvatar mb-3 rounded-circle img-fluid" src="https://img.discogs.com/6qX3QdIoDiUwGpCO5Bwv3XyIgGI=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-790952-1162171782.jpeg.jpg" alt="Avatar" />
            <h1 className="pseudo col-sm-12">@Jacky-Tunning</h1>
            <h2 className="mb-5 col-sm-12"><span className="city">Toulouse, </span><span className="country">France</span></h2>   
            <h3 className="job">Developpeur React</h3>
          </div>

          <div className="row mx-auto mt-5 d-flex justify-content-center">
            <h4 className="col-sm-12">Techologies utilisées:</h4>
            <ul className="technos row p-0">
              <li><img className="logoTechno" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png" /></li>
              <li><img className="logoTechno mx-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" /></li>
              <li><img className="logoTechno" src="https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/14/thumb_bigger_formation-node-js.png" /></li>
            </ul>
          </div>

          <div className="row mx-auto mt-5  d-flex justify-content-center">
            <h4>Description:</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AsideProfile;
