import React, { Component, Fragment } from 'react';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Profile from './components/Profile';
import Error404 from './components/Error404';
import Team from './components/Team';
import Repo from './components/Repo';
import Explore from './components/Explore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        loading: true
      }
  }

  // Loader
  componentDidMount (){
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 2000);
  }



  render() {
    if(this.state.loading){
        return <Loading />;
    }


    return (
    <BrowserRouter>
        <Fragment>
          <Navbar />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/explore' component={Explore} />
                <Route exact path='/explore/:ownerName/repos/:repoName' component={Repo} />
                <Route exact path='/users/:username' component={Profile} />
                <Route exact path='/users/:ownerName/repos/:repoName' component={Repo} />
                <Route exact path='/team' component={Team} />
                <Route component={Error404} />
              </Switch>
          <Footer />
        </Fragment>
    </BrowserRouter>
    );
  }

}

export default App;
