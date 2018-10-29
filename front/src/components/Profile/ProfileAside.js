import React, { Component } from 'react';
import { Row, Col } from 'mdbreact';
// import {token} from '../../settings';

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
            Authorization: `Bearer ${this.props.accessToken}`
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

    const regexLink1 = /(https:\/\/+)/;
    const regexLink2 = /(http:\/\/+)/;
    let externLink = this.state.profileInfos.blog;
    if(!regexLink1.test(externLink) || !regexLink2.test(externLink)) {
      externLink = `http://${this.state.profileInfos.blog}`;
    }
    console.log(externLink, this.state.profileInfos.blog)
    return (
        <Row className="justify-content-center">
            <Col xs='12' className="mb-3">
                <img src={this.state.profileInfos.avatar_url} alt="" className="profile-pic img-fluid z-depth-1 rounded mb-3"/>
                <div className="profile-infos">
                    <h1 className={`profile-name text-${this.props.theme.color}`} >{this.state.profileInfos.login}</h1>
                    <h5 className={`profile-login mb-4 text-${this.props.theme.color}`}>{this.state.profileInfos.name}</h5>

                    {
                        this.state.profileInfos.bio &&
                        <div className={`desc mb-4 text-${this.props.theme.color}`}>
                            <p>{this.state.profileInfos.bio}</p>
                        </div>
                    }

                    {
                        this.state.profileInfos.location &&
                        <div>
                            <i className="fa fa-map-marker mr-2" style={{color: `${this.props.theme.color}`}} aria-hidden="true"></i>
                            <span  className={`profile-location px-2 text-${this.props.theme.color}`}>{this.state.profileInfos.location}</span>
                        </div>
                    }

                    {
                        this.state.profileInfos.blog &&
                        <div>
                            <i className="fa fa-external-link mr-2" style={{color: `${this.props.theme.color}`}} aria-hidden="true"></i>
                            <span className="profile-blog px-2" >
                                <a  className={`${this.props.theme.colorLink}-text`} href={externLink} rel="noopener noreferrer" target="_blank">{this.state.profileInfos.blog}</a>
                            </span>
                        </div>
                    }
                </div>
            </Col>
        </Row>
    );
  }
}

export default ProfileAside;
