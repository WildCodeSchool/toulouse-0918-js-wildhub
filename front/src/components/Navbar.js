import React, { Component } from "react";
import '../styles/navbar.css'
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
        return (
            <div className="navBar">
                <nav className="navbar navbar-light bg-dark text-light">
                    <div className="d-flex justify-content-start align-items-center">
                        <div>
                            <NavLink to='/'>
                                <img src={img} alt="logo" />
                            </NavLink>
                        </div>
                        <div className="wrapper d-none d-md-block ml-5 boutton">
                            <span className="mr-4"><a className="text-white" href="#!">Explore</a></span>
                            <span className="ml-4"><a className="text-white" href="#!">Sign in</a></span>
                        </div>
                    </div>
                    <div id="mySidenav" className={"sidenav " + isOpen}>
                        <span href="#!" className="closebtn" onClick={this.handleClick}>&times;</span>
                        <a href="#!">
                            <Fa icon="book mr-2" />
                            {"Catalogue d'idées"}
                        </a>

                        <a href="#!">
                            <Fa icon="folder-open mr-2" />
                            {"Mes projets"}
                        </a>

                        <a href="#!">
                            <Fa icon="cog mr-2" />
                            {"Paramètre profil"}
                        </a>

                        <a className="d-md-none d-block" href="#!">
                            <Fa icon="book-open mr-2" />
                            {"Explore"}
                        </a>

                        <a className="d-md-none d-block" href="#!">
                            <Fa icon="sign-in-alt mr-2" />
                            {"Sign in"}
                        </a>
                    </div>
                    <span 
                        className='toggle-nav'
                        onClick={this.handleClick}
                    >
                        &#9776;
                    </span>
                </nav>
            </div>)
    }
}

export default Navbar;
