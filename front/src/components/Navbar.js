import React, { Component } from "react";
import '../styles/navbar.css'
import img from '../images/logo-light.png'

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
                        <div className="d-none d-md-block ml-5 boutton">
                            <span className="mr-4"><a className="text-white" href="#!">Explore</a></span>
                            <span className="ml-4"><a className="text-white" href="#!">Sign in</a></span>
                        </div>
                    </div>
                    <div id="mySidenav" className={"sidenav " + isOpen}>
                        <a href="#!" className="closebtn" onClick={this.handleClick}>&times;</a>
                        <a href="#!">Catalogue d'idées</a>
                        <a href="#!">Mes projets</a>
                        <a href="#!">Paramètre profil</a>
                        <a className="d-md-none d-block" href="#!">Explore</a>
                        <a className="d-md-none d-block" href="#!">Sign in</a>
                    </div>
                    <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={this.handleClick}>&#9776;</span>
                </nav>
            </div>)
    }
}

export default Navbar;
