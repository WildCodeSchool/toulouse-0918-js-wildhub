import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Profile from './components/Profile';
import Repo from './components/Profile/ListProjects/Repo';
import Error404 from './components/Error404';
import Team from './components/Team';

import DarkThemeProps from './data/DarkThemeProps';
import LightThemeProps from './data/LightThemeProps';

class App extends Component {
  state = {
    loading: true,
    isDarkTheme: true
  }

  // Loader
  componentDidMount (){
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 2000);
  }

  changeTheme = () => {
    this.setState({
      isDarkTheme: !this.state.isDarkTheme
    })
  }
 
  

  render() {
    if(this.state.loading){
        return <Loading />;
    }

    const theme = this.state.isDarkTheme ? DarkThemeProps : LightThemeProps

    return (
    <BrowserRouter>
        <Fragment>
            <Navbar isDarkTheme={this.state.isDarkTheme} changeTheme={this.changeTheme} theme={theme} />
                <Switch>
                  <Route exact path='/' render={() => <Home theme={theme} />} />
                  <Route path='/accueil' component={Home} />
                  <Route path='/profile' component={Profile} />
                  <Route path='/:ownerName/repos/:repoName' component={Repo} />
                  <Route path='/team' component={Team} />
                  <Route component={Error404} />
                </Switch>
            <Footer theme={theme} />
        </Fragment>
    </BrowserRouter>
    );
  }

}

export default App;
