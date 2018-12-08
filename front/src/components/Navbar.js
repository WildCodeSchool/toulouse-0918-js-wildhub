import React, { Component, Fragment } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
  Fa
} from 'mdbreact';
import { NavLink } from 'react-router-dom';
import GitHubLogin from 'react-github-login';
import { clientId, redirectUri } from '../settings';
import '../styles/navigation.scss';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    resetLoading = () => {
      this.props.loading(true);
    }


    handleSideNav = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        this.resetLoading();
    }

    disconnect = () => {
      this.props.handleResetState();
      this.resetLoading();
      this.handleClick();
    }

    scrollable = () => {
        this.state.isOpen
        ? document.body.style.overflow = 'hidden'
        : document.body.style.overflow = '';
    }

    render() {
        const isOpen = this.state.isOpen ? 'open' : '';
        const toggler = this.state.isOpen ? 'times' : 'bars';
        this.scrollable();

        return (

          <Fragment>
            <div className="navbar fixed-top py-0">
              <span
                  onClick={this.handleSideNav}
                  className={`toggle-nav`}>
                  <Fa icon={toggler} size='lg' />
              </span>
              <div className="nav-links d-flex justify-content-start align-items-center w-100">

                  <NavLink
                    exact to='/'
                    className='navbar-brand'
                    onClick={this.resetLoading}
                  >
                    <img src={this.props.theme.logoNav}  alt="logo" />
                  </NavLink>

                  <div className="d-none d-md-flex flex-grow-1">

                      <NavLink
                        exact to="/"
                        className='nav-item'
                        onClick={this.resetLoading}
                      >
                        Accueil
                      </NavLink>

                      <NavLink
                        exact to="/explore"
                        className='nav-item'
                        onClick={this.resetLoading}
                      >
                        Explorer
                      </NavLink>

                      <NavLink
                        exact to="/team"
                        className='nav-item'
                        onClick={this.resetLoading}
                      >
                        La Team
                      </NavLink>

                      <div className="btn-grp d-flex align-items-center ml-auto">
                        {
                          this.props.login
                          ? <Dropdown>
                                <DropdownToggle
                                  caret
                                  className='my-0 mx-3'
                                >
                                  {this.props.login}
                                </DropdownToggle>
                                <DropdownMenu right className={`${this.props.theme.color}`}>
                                    <NavLink
                                      className='dropdown-item'
                                      to={`/users/${this.props.login}`}
                                      onClick={this.resetLoading}
                                    >
                                      <Fa icon="book mr-2" /> {"Mon Profil"}
                                    </NavLink>
                                    <NavLink
                                      to="/home"
                                      className='dropdown-item'
                                      onClick={this.disconnect}
                                    >
                                      <Fa icon='sign-out' /> {"Déconnexion"}
                                    </NavLink>
                                </DropdownMenu>
                              </Dropdown>
                          : <GitHubLogin
                              onClick={this.resetLoading}
                              className={`btn btn-login my-0 mx-3`}
                              scope="user:email,public_repo"
                              clientId={clientId}
                              redirectUri={`${redirectUri}/users/${this.props.login}`}
                              onSuccess={this.props.handleLoginSuccess}
                              onFailure={this.props.handleLoginFailure}
                              children={<span style={{verticalAlign: 'middle'}}
                            >
                                Se connecter
                                <Fa icon="github" className="ml-2" size="2x" style={{verticalAlign: 'middle'}}/>
                              </span>}
                            />
                        }
                        <Button
                            onClick={this.props.changeTheme}
                            className='theme-toggler m-0'
                        >
                            <i className={this.props.theme.iconeTheme} aria-hidden="true"></i>

                        </Button>
                      </div>

                  </div>
              </div>
              </div>

            <div id="mySidenav" className={"sidenav z-depth-2 " + isOpen}>
                <NavLink
                  onClick={this.handleClick}
                  exact to="/"
                  className='nav-item'
                >
                    <Fa icon="home mr-2" />
                    {"Accueil"}
                </NavLink>

                <NavLink
                  onClick={this.handleClick}
                  exact to="/explore"
                  className='nav-item'
                >
                    <Fa icon="wpexplorer mr-2" />
                    {"Explorer"}
                </NavLink>

                <NavLink
                  onClick={this.handleClick}
                  exact to="/team"
                  className='nav-item'
                >

                    <Fa icon="users mr-2" />
                    {"La Team"}
                </NavLink>

                {
                  this.props.login
                  ? <Fragment>
                      <a href={`/users/${this.props.login}`} onClick={this.handleClick} className='nav-item'>
                        <Fa icon="book mr-2" />
                        {"Mon Profil"}
                      </a>

                      <NavLink to="/home" onClick={this.disconnect} className='nav-item'>
                          <Fa icon='sign-out' /> Déconnexion
                      </NavLink>
                    </Fragment>

                  : <GitHubLogin
                      className={`btn btn-sm btn-login`}
                      color={this.props.theme.color}
                      scope="user:email,public_repo"
                      clientId={clientId}
                      redirectUri={`${redirectUri}/users/${this.props.login}`}
                      onSuccess={this.props.handleLoginSuccess}
                      onFailure={this.props.handleLoginFailure}
                      children={<span style={{verticalAlign: 'middle'}}>
                        Se connecter
                        <Fa icon="github" className="ml-2" size="2x" style={{verticalAlign: 'middle'}}/>
                      </span>}
                    />
                }
                <Button
                  onClick={this.props.changeTheme}
                  className='theme-toggler btn-sm'
                >
                  <i className={`mr-2 ${this.props.theme.iconeTheme}`} aria-hidden="true"></i>
                  Theme
                </Button>
            </div>
        </Fragment>
        )
    }
}

export default Navbar;
