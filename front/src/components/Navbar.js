import React, { Component } from "react";
import img from '../images/logo-light.png';
import { Fa } from 'mdbreact';
import { NavLink } from 'react-router-dom';
// import styled from 'react-emotion';

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
                <nav className="navbar navbar-light bg-dark text-light fixed-top">
                <span
                    onClick={this.handleClick}
                    className="toggle-nav">
                    <Fa icon={toggler} size='lg' />
                </span>
                    <div className="nav-links d-flex justify-content-start align-items-center">

                        <NavLink to='/' className='navbar-brand'>
                            <img src={img} alt="logo" />
                        </NavLink>
                        <div className="d-none d-md-inline">
                            <NavLink to="/" className='nav-item d-none d-md-inline'>Accueil</NavLink>
                            <NavLink to="/explore" className='nav-item d-none d-md-inline'>Explorer</NavLink>
                            <NavLink to="/team" className='nav-item d-none d-md-inline'>La Team</NavLink>
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


                    </div>
                </nav>
            </div>)
    }
}

export default Navbar;
