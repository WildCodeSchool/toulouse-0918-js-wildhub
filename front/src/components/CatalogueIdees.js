import React, { Component, Fragment } from 'react';
import Navbar from './Navbar'
import '../styles/CatalogueIdees.css';

class CatalogueIdees extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                    <h2>Catalogue d'idées</h2>
            </Fragment>
        );
    }
}

export default CatalogueIdees;