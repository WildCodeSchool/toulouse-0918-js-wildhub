import React, { Component } from "react";
import img from '../images/logo-light.png';
import { Fa } from 'mdbreact';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });

    }

    render() {
        const isOpen = this.state.isOpen ? 'open' : '';
        const toggler = this.state.isOpen ? 'times' : 'bars';
        return (
            <div className="navigation">
                <nav className="navbar navbar-light bg-dark text-light">
                <span
                    onClick={this.handleClick}
                    className="toggle-nav">
                    <Fa icon={toggler} size='lg' />
                </span>
                    <div className="nav-links d-flex justify-content-start align-items-center">
                        <NavLink to='/' className='navbar-brand'>
                            <img src={img} alt="logo" />
                        </NavLink>
                        <NavLink to="/explore" className='nav-item d-none d-md-inline'>Explorer</NavLink>
                        <NavLink to="/" className='nav-item d-none d-md-inline'>Se connecter</NavLink>
                    </div>
                    <div id="mySidenav" className={"sidenav " + isOpen}>
                        <NavLink to="/explore" className='nav-item'>
                            <Fa icon="book mr-2" />
                            {"Explorer"}
                        </NavLink>

                        <NavLink to="/profile" className='nav-item'>
                            <Fa icon="folder-open mr-2" />
                            {"Mes dépôts"}
                        </NavLink>

                        <NavLink to="/settings" className='nav-item'>
                            <Fa icon="cog mr-2" />
                            {"Paramètres"}
                        </NavLink>

                        <NavLink to="/" className="nav-item">
                            <Fa icon="sign-in mr-2" />
                            {"Se connecter"}
                        </NavLink>
                    </div>
                </nav>
            </div>)
    }
}

export default Navbar;
