import React, { Component } from 'react';
import AsideProfile from './AsideProfile'
import PillsList from './listProjet'

class Main extends Component {

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-3 my-5">
                        <AsideProfile />
                    </div>
                    <div className='col-lg-8 ml-auto my-5'>
                        <PillsList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;