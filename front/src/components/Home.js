import React, { Component } from 'react';
import GitHubLogin from 'react-github-login';
import { Container, Row, Col, Fa } from 'mdbreact';
import { Parallax } from "react-parallax";
import ParallaxImages from '../data/ParallaxImages.js';
import { clientId, redirectUri } from '../settings';
import Draggable from 'react-draggable';


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


    componentDidMount(){
      this.props.resetLoading(false);
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
                    <div style={{ minHeight: '100vh' }}>
                      <Row className="mainAccueil align-items-center">
                        <Draggable>
                          <Col xs='10' md='8' lg='6' className="mx-auto text-center">
                            <div className="header-wrapper" style={{background: `${this.props.theme.bgHome}`}}>
                              <div className={`pt-2 text-${this.props.theme.color} `} >
                                <img className="img-fluid logo mt-5" src={this.props.theme.logo} alt="logo" />
                              </div>
                              <div className={`px-5 pb-3 text-${this.props.theme.color}`} >
                                <h1 className="pb-3" >{"Bienvenue sur WildHub !"}</h1>
                                <p className="text-center py-4">{"WildHub est un site dédié aux développeurs de la Wild Code School, anciens comme actuels. Sur cette nouvelle plateforme tu vas pouvoir partager tes projets personnels afin de leur donner de la visibilité et éventuellement collaborer avec d’autres développeurs de la Wild Code School. Pas besoin de te créer un compte, utilise simplement tes identifiants GitHub pour te connecter sur ce site !"}</p>
                                <p className="fedra-text mt-3">Bonne visite !</p>
                              </div >
                            </div>
                          </Col>
                        </Draggable>
                      </Row>
                    </div>
                  </Parallax>
                  </Container>
                </header>

                <Container fluid className="under-accueil p-0"> 
                  <div className={`py-5 row d-flex justify-content-center align-items-center text-${this.props.theme.color} ${this.props.theme.bgColorDiv}`} >
                      <div className="col-lg-5">
                        <img className="img-fluid rounded z-depth-1" src={ParallaxImages.image2}  alt="placeHolder"></img>
                      </div>
                      <div className="col-lg-4 mt-5">
                        <h2>{"Comment ça fonctionne ?"}</h2>
                        <p>
                            {"Tu ne veux pas te connecter pour le moment? Aucun problème, tu peux accéder aux projets partagés ici en allant dans l’onglet “Explorer” et ainsi naviguer de dépôts en dépôts comme bon te semble."}
                        </p>
                        <p>
                            {"Tu veux te connecter ? Aucun problème, tu peux accéder à ta session grâce à GitHub. Une fois connecté tu trouveras sur ton profil tous tes dépôts et choisir ceux que tu souhaite rendre publiques. Les dépôts partagés apparaissent tous dans l’explorateur de projets."}
                        </p>
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
                                {"WildHub est une plateforme de partage mais aussi d’échange et d’entraide, n’hésite pas à contacter un Wilder si son projet t’intéresse, vous pourrez peut-être collaborer !"}
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
