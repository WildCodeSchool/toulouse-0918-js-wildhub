import React, { Component, Fragment } from "react";
import img from '../images/logo-light.png';
<<<<<<< HEAD
import { Fa, Button } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import styled from 'react-emotion';
=======
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Fa
} from 'mdbreact';
import { NavLink } from 'react-router-dom';
// import styled from 'react-emotion';
import GitHubLogin from 'react-github-login';
import { clientId, redirectUri } from '../settings';
>>>>>>> github_login


const Nav = styled('nav')(
    props => ({
      backgroundColor: props.bgColor,
      color: props.color
    })
  )

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
<<<<<<< HEAD
=======

>>>>>>> github_login
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
<<<<<<< HEAD
    
=======



>>>>>>> github_login
    render() {
        const isOpen = this.state.isOpen ? 'open' : '';
        const toggler = this.state.isOpen ? 'times' : 'bars';


        this.scrollable();

        return (
            <div className="navigation">
<<<<<<< HEAD
                <Nav className="navbar text-light fixed-top" bgColor={this.props.theme.bgColor}>
                    <span
                        onClick={this.handleClick}
                        className="toggle-nav">
                        <Fa icon={toggler} size='lg' />
                    </span>
                    <div className="nav-links d-flex justify-content-start align-items-center">
                    
=======
                <nav className="navbar navbar-light bg-dark text-light fixed-top">
                <span
                    onClick={this.handleClick}
                    className="toggle-nav">
                    <Fa icon={toggler} size='lg' />
                </span>
                    <div className="nav-links d-flex justify-content-start align-items-center w-100">

>>>>>>> github_login
                        <NavLink to='/' className='navbar-brand'>
                            <img src={this.props.theme.logoNav}  alt="logo" />
                        </NavLink>
<<<<<<< HEAD
                        <div className="d-none d-md-inline-block">
                            <NavLink to="/" className='nav-item d-none d-md-inline'>Accueil</NavLink>
                            <NavLink to="/explore" className='nav-item d-none d-md-inline'>Explorer</NavLink>
                            <NavLink to="/team" className='nav-item d-none d-md-inline'>La Team</NavLink>
                            <Button 
                                onClick={this.props.changeTheme}
                                bgColor={this.props.theme.bgColorButton} 
                                color={this.props.theme.color} 
                                className="btn-theme px-3 py-2"
                            >
                                <i className={this.props.theme.iconeTheme} aria-hidden="true"></i>
                                                    
                            </Button>
=======
                        <div className="d-none d-md-flex align-items-center w-100">
                            <NavLink to="/" className='nav-item'>Accueil</NavLink>
                            <NavLink to="/explore" className='nav-item'>Explorer</NavLink>
                            <NavLink to="/team" className='nav-item'>La Team</NavLink>
                            {
                              this.props.login
                              ? <Dropdown className='ml-auto'>
                                    <DropdownToggle caret color='elegant'>{this.props.login} </DropdownToggle>
                                    <DropdownMenu right className='bg-dark'>
                                        <DropdownItem href={`/users/${this.props.login}`}>
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
                                  className="btn btn-sm btn-primary ml-auto"
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
>>>>>>> github_login
                        </div>
                    </div>
                    <div id="mySidenav" className={"sidenav " + isOpen}>
                        <NavLink onClick={this.handleClick} to="/" className="nav-item">
                            <Fa icon="home mr-2" />
                            {"Accueil"}
                        </NavLink>

                        <NavLink onClick={this.handleClick} to="/explore" className='nav-item'>
                            <Fa icon="wpexplorer mr-2" />
                            {"Explorer"}
                        </NavLink>

                        <NavLink onClick={this.handleClick} to="/team" className='nav-item'>

                            <Fa icon="users mr-2" />
                            {"La Team"}
                        </NavLink>

                        {
                          this.props.login
                          ? <Fragment>
                              <NavLink onClick={this.handleClick} to={`/users/${this.props.login}`} className='nav-item'>
                                <Fa icon="book mr-2" />
                                {"Mon Profil"}
                              </NavLink>

                              <NavLink onClick={this.disconnect} to="/" className='nav-item'>
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




<<<<<<< HEAD
                        <NavLink onClick={this.handleClick} to="/settings" className='nav-item'>
                            <Fa icon="cog mr-2" />
                            {"Paramètres"}
                        </NavLink>
                        <Button 
                                onClick={this.props.changeTheme}
                                bgColor={this.props.theme.bgColorButton} 
                                color={this.props.theme.color}
                                
                            >
                                <i className={this.props.theme.iconeTheme} aria-hidden="true"></i>
                                                    
                        </Button>
=======
>>>>>>> github_login
                    </div>
                </Nav>
            </div>)
    }
}

export default Navbar;
