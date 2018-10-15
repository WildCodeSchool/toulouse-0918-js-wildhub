import React, { Component, Fragment } from 'react';
import Loading from './components/Loading';
import Home from './components/Home';
import Profile from './components/Profile';
import Repo from './components/Profile/ListProjects/Repo';
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
    }, 1000);
  }

  render() {
    if(this.state.loading){
        return <Loading />;
    }

    return (
        <BrowserRouter>
            <Fragment>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/accueil' component={Home} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/:ownerName/repos/:repoName' component={Repo} />
                </Switch>
            </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
