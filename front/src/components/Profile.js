import React, { Component } from 'react';
import Navbar from './Navbar';
import AsideProfile from './AsideProfile';
import ListProjects from './ListProjects';
import Footer from './Footer';
import { Container, Row, Col } from 'mdbreact';
import '../styles/ListProjects.scss';


class Profile extends Component {
    render() {
        return (
            <div id='profile-page'>
                <Navbar />
                <Container>
                    <Row>
                        <Col className='col-lg-3 my-5'>
                            <AsideProfile />
                        </Col>
                        <Col className='col-lg-8 ml-auto my-5'>
                            <ListProjects />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Profile;
