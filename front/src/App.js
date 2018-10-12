import React, { Component, Fragment } from 'react';
import Loading from './components/Loading'
import LoginPage from './components/LoginPage'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  state = {
    loading: true
  }

  componentWillMount (){
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000);
  }

  render() {

    return (
        <Fragment>
            <LoginPage/>
        </Fragment>
    );
  }
}

export default App;
