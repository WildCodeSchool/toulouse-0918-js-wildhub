import React, { Component } from 'react';
import { Row, Col } from 'mdbreact';
import token from '../../config';
import html from "../../images/icons/html.png";
import js from "../../images/icons/js.png";
import nodejs from "../../images/icons/nodejs.png";

class ProfileAside extends Component {
    constructor(props){
        super(props);
        this.state = {
            profileInfos: []
        };
    }

    componentDidMount = () => {
        this.getProfile();
    }

    getProfile = () => {
        fetch('https://api.github.com/users/EvaSpessotto', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
            .then(results  =>  results.json())
            .then(profile  => {
                this.setState({
                    profileInfos: profile
                });
            });
    }


  render() {

    const technos = [
        {
            img: html
        },
        {
            img: js
        },
        {
            img: nodejs
        }
    ]

    return (
        <Row className="justify-content-center">
            <Col xs='12' className="mb-3">
                <img src={this.state.profileInfos.avatar_url} alt="" className="profile-pic img-fluid z-depth-1 rounded mb-3"/>
                <div className="profile-infos">
                    <h1 className="profile-name" >{this.state.profileInfos.name}</h1>

                    <p className="profile-location">{this.state.profileInfos.location}</p>

                    <p className="profile-blog"><a href={'/blog/' + this.state.profileInfos.blog} rel="noopener noreferrer" target="_blank">{this.state.profileInfos.blog}</a></p>


                </div>
            </Col>

            <Col xs='12' className="mb-3 profile-desc">
                <h5>A propos de moi</h5>
                <div className="desc">
                    <p>{this.state.profileInfos.bio}</p>
                </div>
            </Col>

            <Col xs='12' className="mb-3 profile-technos">
                <h5>Technologies utilisées</h5>
                <ul className="techno-list">
                    {technos.map((techno, index) => (
                        <li key={index} className="techno"><img src={techno.img} alt="" className="techno-img"/></li>
                    ))}
                </ul>
            </Col>


        </Row>
    );
  }
}

export default ProfileAside;
