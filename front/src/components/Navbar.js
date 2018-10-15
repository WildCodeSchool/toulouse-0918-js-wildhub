import React, { Component } from "react";
import '../styles/navbar.css'
import img from '../images/logo-light.png';
import { Fa } from 'mdbreact';

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
                            <img src={img} alt="logo" />
                        </div>
                        <div className="wrapper d-none d-md-block ml-5 boutton">
                            <span className="mr-4"><a className="text-white" href="#!">Explorer</a></span>
                            <span className="ml-4"><a className="text-white" href="#!">Se connecter</a></span>
                        </div>
                    </div>
                    <div id="mySidenav" className={"sidenav " + isOpen}>
                        <span href="#!" className="closebtn" onClick={this.handleClick}>&times;</span>
                        <a href="#!">
                            <Fa icon="book mr-2" />
                            {"Explorer"}
                        </a>

                        <a href="#!">
                            <Fa icon="folder-open mr-2" />
                            {"Mes dépôts"}
                        </a>

                        <a href="#!">
                            <Fa icon="cog mr-2" />
                            {"Paramètres"}
                        </a>

                        <a className="d-md-none d-block" href="#!">
                            <Fa icon="sign-in-alt mr-2" />
                            {"Se connecter"}
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
