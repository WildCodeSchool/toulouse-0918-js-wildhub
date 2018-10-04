import React, { Component } from 'react';

import "../styles/AsideProfile.css";

class AsideProfile extends Component {
  render() {

    const profilePic = "https://img.discogs.com/6qX3QdIoDiUwGpCO5Bwv3XyIgGI=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-790952-1162171782.jpeg.jpg";

    const technos = [
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'
        },
        {
            img: 'https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/14/thumb_bigger_formation-node-js.png'
        }
    ]

    return (
        <div className="row justify-content-center">
            <div className="col-12 mb-3">
                <img src={profilePic} alt="" className="profile-pic rounded mb-3"/>
                <div className="profile-infos">
                    <h1 className="profile-name">@Jacky-Tunning</h1>
                    <p className="profile-location">Toulouse, France</p>
                    <p className="profile-profession">Développeur React.js</p>
                </div>
            </div>

            <div className="col-12 mb-3 profile-technos">
                <h4>Technologies utilisées:</h4>
                <ul className="techno-list">
                    {technos.map((techno, index) => (
                        <li key="index" class="techno"><img src={techno.img} alt="" className="techno-img"/></li>
                    ))}
                </ul>
            </div>

            <div className="col-12 mb-3 profile-desc">
                <h4>Description: </h4>
                <div className="desc">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae sed quae in maxime! Repellendus veniam, quos nisi excepturi iure aut reprehenderit accusantium molestias numquam sunt molestiae quaerat provident ab neque.</p>
                </div>
            </div>
        </div>
    );
  }
}

export default AsideProfile;
