import React, { Component } from 'react';
import AsideProfile from './AsideProfile'
import PillsList from './listProjet'

class Main extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <AsideProfile/>
                    <div className='col-9'>
                        <PillsList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;