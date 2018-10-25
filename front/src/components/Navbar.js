import React, { Component, Fragment } from "react";
import styled from 'react-emotion';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Fa
} from 'mdbreact';
import { NavLink } from 'react-router-dom';
import GitHubLogin from 'react-github-login';
import { clientId, redirectUri } from '../settings';


const Nav = styled('nav')({
    transition: 'all 0.3s ease-in-out 0s'
},
    props => ({
      backgroundColor: props.bgColor,
    })
)

const SideNav = styled('div')(
    props => ({
        color: props.color,
        backgroundColor: props.bgColor,
    })
)

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
        if(this.state.isOpen){
            document.body.style.overflow = 'hidden';
        }
        else{
            document.body.style.overflow = 'auto';
        }
    }

    render() {
        const isOpen = this.state.isOpen ? 'open' : '';
        const toggler = this.state.isOpen ? 'times' : 'bars';
        this.scrollable();

        return (

          <Fragment>
            <Nav className="navbar text-light fixed-top py-0" bgColor={this.props.theme.bgColor} >
              <span
                  onClick={this.handleSideNav}
                  className={`toggle-nav text-${this.props.theme.colorNavLink}`}>
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
                        className={`nav-item text-${this.props.theme.colorNavLink}`}
                        onClick={this.resetLoading}
                      >
                        Accueil
                      </NavLink>

                      <NavLink
                        exact to="/explore"
                        className={`nav-item text-${this.props.theme.colorNavLink}`}
                        onClick={this.resetLoading}
                      >
                        Explorer
                      </NavLink>

                      <NavLink
                        exact to="/team"
                        className={`nav-item text-${this.props.theme.colorNavLink}`}
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
                                  color={`${this.props.theme.color}`}
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
                              className={`btn btn-login my-0 mx-3 ${this.props.theme.color} text-${this.props.theme.nameTheme}`}
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
                            bgColor={this.props.theme.bgColorButton}
                            color={this.props.theme.color}
                            className='theme-toggler m-0'
                        >
                            <i className={this.props.theme.iconeTheme} aria-hidden="true"></i>

                        </Button>
                      </div>

                  </div>
              </div>
              </Nav>

            <SideNav id="mySidenav" className={"sidenav z-depth-2 " + isOpen} bgColor={this.props.theme.bgColor} >
                <NavLink
                  onClick={this.handleClick}
                  exact to="/"
                  className={`nav-item text-${this.props.theme.colorNavLink}`}
                >
                    <Fa icon="home mr-2" />
                    {"Accueil"}
                </NavLink>

                <NavLink
                  onClick={this.handleClick}
                  exact to="/explore"
                  className={`nav-item text-${this.props.theme.colorNavLink}`}
                >
                    <Fa icon="wpexplorer mr-2" />
                    {"Explorer"}
                </NavLink>

                <NavLink
                  onClick={this.handleClick}
                  exact to="/team"
                  className={`nav-item text-${this.props.theme.colorNavLink}`}
                >

                    <Fa icon="users mr-2" />
                    {"La Team"}
                </NavLink>

                {
                  this.props.login
                  ? <Fragment>
                      <NavLink exact onClick={this.handleClick} to={`/users/${this.props.login}`} className={`nav-item text-${this.props.theme.colorNavLink}`}>
                        <Fa icon="book mr-2" />
                        {"Mon Profil"}
                      </NavLink>

                      <NavLink
                        to="/home"
                        onClick={this.disconnect}
                        className={`nav-item text-${this.props.theme.colorNavLink}`}
                      >
                          <Fa icon='sign-out' /> Déconnexion
                      </NavLink>
                    </Fragment>

                  : <GitHubLogin
                      className={`btn btn-sm ${this.props.theme.color} text-${this.props.theme.nameTheme}`}
                      bgColor={this.props.theme.bgColor}
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
                  bgColor={this.props.theme.bgColorButton}
                  color={this.props.theme.color}
                  className='theme-toggler btn-sm'
                >
                  <i className={`mr-2 ${this.props.theme.iconeTheme}`} aria-hidden="true"></i>
                  Theme
                </Button>
            </SideNav>
        </Fragment>
        )
    }
}

export default Navbar;
