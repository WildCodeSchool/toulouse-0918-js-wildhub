import React, { Component } from 'react';
import { Row, Col } from 'mdbreact';
import {token} from '../../settings';

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
      const { username } = this.props;
        fetch(`https://api.github.com/users/${username}`, {
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

    return (
        <Row className="justify-content-center">
            <Col xs='12' className="mb-3">
                <img src={this.state.profileInfos.avatar_url} alt="" className="profile-pic img-fluid z-depth-1 rounded mb-3"/>
                <div className="profile-infos">
                    <h1 className="profile-name" >{this.state.profileInfos.login}</h1>
                    <h4 className="profile-login px-2" >{this.state.profileInfos.name}</h4>

                    <p className="profile-location px-2">{this.state.profileInfos.location}</p>

                    <p className="profile-blog px-2"><a href={'/blog/' + this.state.profileInfos.blog} rel="noopener noreferrer" target="_blank">{this.state.profileInfos.blog}</a></p>


                </div>
            </Col>

            { this.state.profileInfos.bio &&
              <Col xs='12' className="mb-3 profile-desc">
                <h5>A propos de moi</h5>
                <div className="desc">
                    <p className='px-2'>{this.state.profileInfos.bio}</p>
                </div>
              </Col>
            }

        </Row>
    );
  }
}

export default ProfileAside;
