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
                        <div className="wrapper d-none d-md-block ml-5 boutton">
                            <span className="mr-4"><a className="text-white" href="#!">Explore</a></span>
                            <span className="ml-4"><a className="text-white" href="#!">Sign in</a></span>
                        </div>
                    </div>
                    <div id="mySidenav" className={"sidenav " + isOpen}>
                        <span href="#!" className="closebtn" onClick={this.handleClick}>&times;</span>
                        <a href="#!"><i className="fas fa-book mr-2"></i> Catalogue d'idées</a>
                        <a href="#!"><i className="fas fa-folder-open mr-2"></i> Mes projets</a>
                        <a href="#!"><i className="fas fa-cog mr-2"></i> Paramètre profil</a>
                        <a className="d-md-none d-block" href="#!"><i className="fas fa-book-open mr-2"></i> Explore</a>
                        <a className="d-md-none d-block" href="#!"><i className="fas fa-sign-in-alt mr-2"></i> Sign in</a>
                    </div>
                    <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={this.handleClick}>&#9776;</span>
                </nav>
            </div>)
    }
}

export default Navbar;
