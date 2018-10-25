import React, { Component } from 'react';
import GitHubLogin from 'react-github-login';
import { Container, Row, Col, Fa } from 'mdbreact';
import { Parallax } from "react-parallax";
import ParallaxImages from '../data/ParallaxImages.js';
import { clientId, redirectUri } from '../settings';


class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
        username: ''
      }
    }

    getUsername = (e) => {
      this.setState({
        username: e.target.value
      })
    }

    render() {

        return (
            <main id='home-page'>
                <header>
                  <Container fluid className={`p-0 ${this.props.theme.bgColorDiv}`}>
                  <Parallax
                    bgImage={ParallaxImages.image1}
                    strength={400}
                    renderLayer={percentage => (
                      <div>
                       
                        <div
                          style={{
                            position: "absolute",
                            background: `${this.props.theme.colorCircle2} ${percentage * 1.5}`,
                            left: "20%",
                            top: "40%",
                            borderRadius: "50%",
                            transform: "translate(-50%,-50%)",
                            width: percentage *500,
                            height: percentage * 500
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            background: `${this.props.theme.colorCircle1} ${percentage * 1.5}`,
                            left: "20%",
                            top: "25%",
                            borderRadius: "50%",
                            transform: "translate(-50%,-50%)",
                            width: percentage * 200,
                            height: percentage * 200
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            background: `${this.props.theme.colorCircle2} ${percentage * 1.5}`,
                            left: "75%",
                            top: "75%",
                            borderRadius: "50%",
                            transform: "translate(-50%,-50%)",
                            width: percentage * 400,
                            height: percentage * 400
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            background: `${this.props.theme.colorCircle1} ${percentage * 1.5}`,
                            left: "85%",
                            top: "25%",
                            borderRadius: "50%",
                            transform: "translate(-50%,-50%)",
                            width: percentage * 300,
                            height: percentage * 300
                          }}
                        />
                         <div
                          style={{
                            position: "absolute",
                            background: `${this.props.theme.colorCircle2} ${percentage * 1.5}`,
                            left: "90%",
                            top: "25%",
                            borderRadius: "50%",
                            transform: "translate(-50%,-50%)",
                            width: percentage * 150,
                            height: percentage * 150
                          }}
                        />
                      </div>
                      
                    )}
                  >
                    <div style={{ height: '100vh' }}>
                      <Row className="mainAccueil align-items-center">
                        <Col xs='10' md='8' lg='6' className="mx-auto text-center">
                        
                          <div style={{marginTop: '100px'}}>
                            <div className={`pt-2 text-${this.props.theme.color} `} style={{background: `${this.props.theme.bgHome}`}}>
                              <img className="img-fluid logo mt-5" src={this.props.theme.logo} alt="logo" />
                            </div>
                            <div className={`p-5 text-${this.props.theme.color}`} style={{background: `${this.props.theme.bgHome}`}}>
                              <h1 className="pb-3" >{"Bienvenue sur WildHub !"}</h1>
                              <p className="text-left">{"Wild Hub est une plateforme de partage qui rassemble les projets personnels des anciens et actuels élèves de la Wild Code School."}</p>
                              <p className="fedra-text mt-5">Bonne visite !</p>
                            </div >
                          </div>
                        
                          <div className="pt-5 pb-5">
                            {
                              this.props.login
                              ? ''
                              : <GitHubLogin
                                className={`btn ${this.props.theme.color} text-${this.props.theme.nameTheme}`}
                                bgColor={this.props.theme.bgColor}
                                color={this.props.theme.color}
                                scope="user:email,public_repo"
                                clientId={clientId}
                                redirectUri={redirectUri}
                                onSuccess={this.props.handleLoginSuccess}
                                onFailure={this.props.handleLoginFailure}
                                children={<span style={{verticalAlign: 'middle'}}>
                                  Se connecter
                                  <Fa icon="github" className="ml-2" size="2x" style={{verticalAlign: 'middle'}}/>
                                </span>}
                              />
                            }

                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Parallax>

                    {/* <Row className="mainAccueil align-items-center">
                      <Col xs='10' md='8' lg='6' className="mx-auto text-center">

                        <div className="pt-5">
                          <img className="img-fluid logo mt-5" src={this.props.theme.logo} alt="logo" />
                        </div>

                        <div className={`pt-5 text-${this.props.theme.color}`} >
                          <h1 className="pb-3" >{"Bienvenue sur WildHub !"}</h1>
                          <p className="text-left">{"Wild Hub est une plateforme de partage qui rassemble les projets personnels des anciens et actuels élèves de la Wild Code School."}</p>
                          <p className="fedra-text mt-5">Bonne visite !</p>
                        </div >

                        <div className="pt-5 pb-5">

                          {
                            this.props.login
                            ? ''
                            : <GitHubLogin
                              className={`btn ${this.props.theme.color} text-${this.props.theme.nameTheme}`}
                              bgColor={this.props.theme.bgColor}
                              color={this.props.theme.color}
                              scope="user:email,public_repo"
                              clientId={clientId}
                              redirectUri={redirectUri}
                              onSuccess={this.props.handleLoginSuccess}
                              onFailure={this.props.handleLoginFailure}
                              children={<span style={{verticalAlign: 'middle'}}>
                                Se connecter
                                <Fa icon="github" className="ml-2" size="2x" style={{verticalAlign: 'middle'}}/>
                              </span>}
                            />
                          }

                        </div>
                      </Col>
                    </Row> */}
                  </Container>
                </header>

                <Container fluid className="under-accueil p-0">
                  {/* <Parallax bgImage={ParallaxImages.image1} strength={600}>
                    <div className="parallax-div"> </div>
                  </Parallax> */}

                  <div className={`py-5 row text-${this.props.theme.color} ${this.props.theme.bgColorDiv}`} >
                      <div className="col-md-6 mx-auto text-center d-flex flex-column align-self-center pr-5 pl-5">
                        <img className="img-fluid rounded z-depth-1" src={ParallaxImages.image2}  alt="placeHolder"></img>
                        <div className="mt-5">
                            <h2>{"Envie de booster tes projets ?"}</h2>
                            <p>
                                {"WildHub est une plateforme qui permet de partager tes projets personnels depuis GiHub.Tu peux sélectionner les projets que tu souhaite partager afin qu'ils apparaissent dans l'explorateur. Ainsi tous les Wilders pourront voir tes projets et éventuellement t'aider ou collaborer avec toi grâce au chat !"}
                            </p>
                        </div>
                      </div>
                  </div>

                  <Parallax bgImage={ParallaxImages.image3} strength={600} >
                    <div className="parallax-div"></div>
                  </Parallax>

                  <div className={`py-5 row text-${this.props.theme.color} ${this.props.theme.bgColorDiv}`} >
                      <div className="col-md-6 mx-auto text-center d-flex flex-column align-self-center pr-5 pl-5">
                        <img className="img-fluid rounded z-depth-1" src={ParallaxImages.image4}  alt="placeHolder"></img>
                        <div className="mt-5">
                            <h2 >{"La Plateforme d'échange des Wilders !"}</h2>
                            <p>
                                {"Wild Hub rassemble les codes écrits par les Wilders. Javascript, Java, PHP...toutes les langues parlées par les Wilders se retrouvent ici !"}
                            </p>
                        </div>
                      </div>
                  </div>

                  <Parallax bgImage={ParallaxImages.image5} strength={600} >
                    <div className="parallax-div"></div>
                  </Parallax>
                </Container>
            </main>
        );
    }
}
export default Home;
