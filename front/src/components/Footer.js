import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid bg-dark text-light text-center pt-5 pb-5">
                <div className="row">
                    <div className="col" style={{fontSize: '20px'}}>
                        <p>Made with <i className="fas fa-heart text-danger"></i> by wildHub team</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;