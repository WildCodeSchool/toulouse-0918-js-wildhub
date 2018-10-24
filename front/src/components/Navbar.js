import React, { Component, Fragment } from "react";
import styled from 'react-emotion';
import { css } from 'emotion';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Fa,
  Button
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

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    disconnect = () => {
      this.props.handleResetState();
      this.handleClick()
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
            <div className="navigation">
                <Nav className="navbar text-light fixed-top" bgColor={this.props.theme.bgColor} >
                    <span
                        onClick={this.handleClick}
                        className="toggle-nav">
                        <Fa icon={toggler} size='lg' />
                    </span>
                    <div className="nav-links d-flex justify-content-start align-items-center">
                    
                        <NavLink to='/' className='navbar-brand'>
                            <img src={this.props.theme.logoNav}  alt="logo" />
                        </NavLink>
                        <div className="d-none d-md-flex align-items-center w-100">

                            <NavLink to="/" className={ `nav-item text-${this.props.theme.colorNavLink}`} >Accueil</NavLink>

                            <NavLink to="/explore" className={ `nav-item text-${this.props.theme.colorNavLink}`} >Explorer</NavLink>
                            <NavLink to="/team" className={ `nav-item text-${this.props.theme.colorNavLink}`} >La Team</NavLink>
                            <Button 
                                onClick={this.props.changeTheme}
                                bgColor={this.props.theme.bgColorButton} 
                                color={this.props.theme.color} 
                                className="btn-theme px-3 py-2"
                            >
                                <i className={this.props.theme.iconeTheme} aria-hidden="true"></i>
                                                    
                            </Button>
                            {
                              this.props.login
                              ? <Dropdown className='ml-auto '>
                                    <DropdownToggle caret color={`${this.props.theme.color}`}>{this.props.login} </DropdownToggle>
                                    <DropdownMenu right color={`${this.props.theme.color}`} >
                                        <DropdownItem href={`/users/${this.props.login}`} >
                                          <Fa icon="book mr-2" /> {"Mon Profil"}
                                        </DropdownItem>
                                        <DropdownItem
                                          href="/"
                                          onClick={this.disconnect}
                                        >
                                          <Fa icon='sign-out' /> {"Déconnexion"}
                                        </DropdownItem>
                                    </DropdownMenu>
                                  </Dropdown>
                              : <GitHubLogin
                              className={`btn ml-auto ${this.props.theme.color} text-${this.props.theme.nameTheme}`}
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
                            
                        </div>
                    </div>


                    <SideNav id="mySidenav" className={"sidenav " + isOpen} bgColor={this.props.theme.bgColor}>
                        <NavLink onClick={this.handleClick} to="/" className={ `nav-item text-${this.props.theme.colorNavLink}`}>
                            <Fa icon="home mr-2" />
                            {"Accueil"}
                        </NavLink>

                        <NavLink onClick={this.handleClick} to="/explore" className={ `nav-item text-${this.props.theme.colorNavLink}`}>
                            <Fa icon="wpexplorer mr-2" />
                            {"Explorer"}
                        </NavLink>

                        <NavLink onClick={this.handleClick} to="/team" className={ `nav-item text-${this.props.theme.colorNavLink}`}>

                            <Fa icon="users mr-2" />
                            {"La Team"}
                        </NavLink>

                        {
                          this.props.login
                          ? <Fragment>
                              <NavLink onClick={this.handleClick} to={`/users/${this.props.login}`} className={ `nav-item text-${this.props.theme.colorNavLink}`}>
                                <Fa icon="book mr-2" />
                                {"Mon Profil"}
                              </NavLink>

                              <NavLink onClick={this.disconnect} to="/" className={ `nav-item text-${this.props.theme.colorNavLink}`}>
                                  <Fa icon='sign-out' /> Déconnexion
                              </NavLink>
                            </Fragment>

                          : <GitHubLogin
                              className="btn btn-sm btn-primary"
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
                            className="btn-theme px-3 py-2"
                            >
                            <i className={this.props.theme.iconeTheme} aria-hidden="true"></i>
                                                    
                        </Button>

                    </SideNav>
                </Nav>
            </div>)
    }
}

export default Navbar;
