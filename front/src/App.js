import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { apiUrl } from './settings';
import { githubAxios, apiAxios } from './axiosInstances';

import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Profile from './components/Profile';
import PublicProfile from './components/PublicProfile';
import Error404 from './components/Error404';
import Team from './components/Team';
import Repo from './components/Repo';
import Explore from './components/Explore';



class App extends Component {
  constructor(props){
      super(props);

      const {
        jwt,
        login,
        id,
        accessToken
      } = this.getStoredAuthData();

      this.state = {
        loading: true,
        jwt,
        login,
        id,
        accessToken
      }
  };

  getStoredAuthData() {
    const jwt = localStorage.getItem('jwt');

    if (!jwt) {
      return { jwt: '', login: '', id: 0, accessToken: '' };
    }

    const { login, id, accessToken } = jwtDecode(jwt);
    this.setupAxiosInstances(accessToken, jwt);

    return { jwt, login, id, accessToken };
  };

  setupAxiosInstances(accessToken, jwt) {

    Object.assign(githubAxios.defaults, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    Object.assign(apiAxios.defaults, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    });
  };

  updateStateOnSuccess = ({ token }) => {
    const { accessToken, login, id } = jwtDecode(token);
    console.log('decoded jwt', accessToken, login, id);
    localStorage.setItem('jwt', token);

    this.setupAxiosInstances(accessToken, token);
    this.setState({
      jwt: token, accessToken, login, id
    }, () => this.props.history.push(`/users/${login}`));
  };

  handleLoginSuccess = ({ code }) => axios.post(`${apiUrl}/api/github/code`, {
    code
  })
    .then(response => response.data)
    .then(this.updateStateOnSuccess);

  handleLoginFailure = response => console.error(response);

  handleResetState = () => {
    localStorage.removeItem('jwt');
    this.setState({ jwt: '', login: '', id: 0, accessToken: '' })
  };

  // Loader
  componentDidMount (){
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 2000);
  }



  render() {
    if(this.state.loading){
        return <Loading />;
    }

    const { login } = this.state;

    return (
      <Fragment>
        <Navbar
          handleResetState={this.handleResetState}
          handleLoginSuccess={this.handleLoginSuccess}
          handleLoginFailure={this.handleLoginFailure}
          login={login}
        />
            <Switch>
              {/* <Route exact path='/' component={Home} /> */}
              <Route exact path='/'
                render={props => <Home
                  handleLoginSuccess={this.handleLoginSuccess}
                  handleLoginFailure={this.handleLoginFailure}
                  login={login}
                />}
              />
              <Route exact path='/home' component={Home} />
              <Route exact path='/explore' component={Explore} />
              <Route exact path='/users/:username/' component={PublicProfile} />
              <Route exact path='/users/:username/gh-repos' component={Profile} />
              <Route exact path='/users/:ownerName/repos/:repoName' component={Repo} />
              <Route exact path='/team' component={Team} />
              <Route component={Error404} />
            </Switch>
        <Footer />
      </Fragment>
    );
  }

}

export default withRouter(App);
