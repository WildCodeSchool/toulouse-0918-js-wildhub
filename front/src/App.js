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
import ScrollBtn from './components/ScrollBtn';
import DarkThemeProps from './data/DarkThemeProps';
import LightThemeProps from './data/LightThemeProps';



class App extends Component {
  constructor(props){
      super(props);

      const {
        jwt,
        login,
        id,
        accessToken
      } = this.getStoredAuthData();

      const theme = localStorage.getItem("isDarkTheme")

      this.state = {
        loading: true,
        isDarkTheme: theme !== "false",
        jwt,
        login,
        id,
        accessToken,
        scrolled: false
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

  resetLoading = (bool) => {
    setTimeout(() => {
      this.setState({loading: bool})
    }, 500)
  }

  changeTheme = () => {
    const wasDarkTheme = localStorage.getItem("isDarkTheme") !== "false"
    localStorage.setItem("isDarkTheme", !wasDarkTheme)
    this.setState({
      isDarkTheme: !wasDarkTheme
    })
  }

  noScroll = () => {
      this.state.loading
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = '';
  }

  scrollHandler = () => {
    const scrolled =
      window.pageYOffset > 250
      ? true
      : false;

    this.setState({
        scrolled: scrolled
    })

}

  render() {
    const { login, isDarkTheme } = this.state;
    const theme = isDarkTheme ? DarkThemeProps : LightThemeProps;
    window.addEventListener('scroll', this.scrollHandler);
    this.noScroll();

    return (
      <Fragment>
        {this.state.loading && <Loading />}
        <Navbar
          handleResetState={this.handleResetState}
          handleLoginSuccess={this.handleLoginSuccess}
          handleLoginFailure={this.handleLoginFailure}
          login={login}
          isDarkTheme={this.state.isDarkTheme}
          changeTheme={this.changeTheme}
          theme={theme}
          resetLoading={this.resetLoading}
        />
            <Switch>
              <Route exact path='(/|/home)'
                render={() => <Home
                  handleLoginSuccess={this.handleLoginSuccess}
                  handleLoginFailure={this.handleLoginFailure}
                  login={login}
                  theme={theme}
                  resetLoading={this.resetLoading}
                />}
              />

              <Route
                exact path='/explore'
                render={(props) => <Explore {...props} theme={theme} resetLoading={this.resetLoading} />}
              />

              <Route
                exact path='/users/:username/'
                render={(props) => <PublicProfile {...props} login={login} theme={theme} resetLoading={this.resetLoading}/>}

              />

              <Route exact path='/users/:username/gerer-mes-repos'
                render={(props) => <Profile {...props} login={login} theme={theme} resetLoading={this.resetLoading} />}
              />

              <Route
                exact path='/users/:ownerName/repos/:repoName'
                render={(props) => <Repo {...props} theme={theme} resetLoading={this.resetLoading}/>}
              />

              <Route
                path='/team'
                render={(props) => <Team {...props} theme={theme} resetLoading={this.resetLoading} />}
              />

              <Route
                render={(props) => <Error404 {...props} resetLoading={this.resetLoading} />}
              />

            </Switch>

        <ScrollBtn state={this.state.scrolled} />
        <Footer theme={theme} />
      </Fragment>
    );
  }

}

export default withRouter(App);
