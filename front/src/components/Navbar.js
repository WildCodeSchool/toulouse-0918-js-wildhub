import React, { Component } from "react";
import img from '../images/logo-light.png';
import { Fa, Button } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import styled from 'react-emotion';


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
        };
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
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
                <Nav className="navbar text-light fixed-top" bgColor={this.props.theme.bgColor}>
                    <span
                        onClick={this.handleClick}
                        className="toggle-nav">
                        <Fa icon={toggler} size='lg' />
                    </span>
                    <div className="nav-links d-flex justify-content-start align-items-center">
                    
                        <NavLink to='/' className='navbar-brand'>
                            <img src={this.props.theme.logoNav}  alt="logo" />
                        </NavLink>
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
                        </div>
                    </div>
                    <div id="mySidenav" className={"sidenav " + isOpen}>
                        <NavLink onClick={this.handleClick} to="/" className="nav-item">
                            <Fa icon="home mr-2" />
                            {"Accueil"}
                        </NavLink>

                        <NavLink onClick={this.handleClick} to="/explore" className='nav-item'>
                            <Fa icon="book mr-2" />
                            {"Explorer"}
                        </NavLink>

                        <NavLink onClick={this.handleClick} to="/team" className='nav-item'>

                            <Fa icon="users mr-2" />
                            {"La Team"}
                        </NavLink>

                        <NavLink onClick={this.handleClick} to="/profile" className='nav-item'>
                            <Fa icon="folder-open mr-2" />
                            {"Mes Dépôts"}
                        </NavLink>

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
                    </div>
                </Nav>
            </div>)
    }
}

export default Navbar;
