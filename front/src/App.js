import React, { Component, Fragment } from 'react';
import Loading from './components/Loading'
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
    if (this.state.loading){
      return <Loading/>
    }
    return (
        <Fragment>
            <Header />
            <Main />
            <Footer />
        </Fragment>
    );
  }
}

export default App;
