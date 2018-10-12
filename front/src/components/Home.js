import React, { Component } from 'react';
import LoginPage from './LoginPage';
import {NavLink} from 'react-router-dom';
import { Button } from 'mdbreact';

class Home extends Component {
    render() {
        return (
            <div id='home-page'>
                <LoginPage />
                
                    <NavLink to='/profile' className='text-white'>
                        <Button variant='contained' color='elegant'>
                            Profil
                        </Button>
                    </NavLink>
                
            </div>
        );
    }
}

export default Home;
