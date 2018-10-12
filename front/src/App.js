import React, { Component } from 'react';
import Loading from './components/Loading'
import Home from './components/Home';
import Profile from './components/Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    loading: true
  }

  componentWillMount (){
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 1000);
  }

  render() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/accueil' component={Home} />
                <Route path='/profile' component={Profile} />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
