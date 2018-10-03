import React, { Component } from 'react';
import AsideProfile from './AsideProfile'
import PillsList from './listProjet'

class Main extends Component {
    render() {
        return (
            <div>
                <AsideProfile/>
                <PillsList/>
            </div>
        );
    }
}

export default Main;