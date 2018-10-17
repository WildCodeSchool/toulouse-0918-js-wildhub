import React, { Component } from 'react';
import Loading from './components/Loading';
import Home from './components/Home';
import Profile from './components/Profile';
import Repo from './components/Profile/ListProjects/Repo';
import Error404 from './components/Error404';
import Team from './components/Team';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    loading: true
  }

  componentDidMount (){
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000);
  }

  render() {
    if(this.state.loading){
        return <Loading />;
    }

    return (
        <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/accueil' component={Home} />
              <Route path='/profile' component={Profile} />
              <Route path='/:ownerName/repos/:repoName' component={Repo} />
              <Route path='/team' component={Team} />
              <Route component={Error404} />
            </Switch>
        </BrowserRouter>
    );
  }

}

export default App;
