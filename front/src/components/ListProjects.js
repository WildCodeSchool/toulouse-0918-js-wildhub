import React, {Component, Fragment} from "react";
import ReactTooltip from 'react-tooltip';
import { Row, Col, Card, CardTitle, CardBody, CardFooter, Fa } from 'mdbreact';
import langColors from '../data/colors.js';


class Projet extends Component{
    constructor(props){
        super(props);
        this.state = {
            reposList: []
        };
    }

    componentWillMount = () => {
      this.getRepos();
    }

    getRepos = () => {
      fetch ('https://api.github.com/users/JulesGrenier/repos')

      .then(result => result.json())

      .then(repoArr => {
          const promises = repoArr.map(
            repoSingle => fetch(repoSingle.languages_url)

              .then(result => result.json())
          )

          return Promise.all(promises)
            .then(languages => languages.map(
              (language, idx) => Object.assign(repoArr[idx], {language_stat: language})
            ))
            .then(repos => this.setState({reposList:repos}))
      })
    }

    render(){
      let countIdSpan = -1;
      const {reposList} = this.state;
      return (
        
        
//         reposList.length !== 0 &&
//         <div class="card text-center">
//              <div class="card-header">
//              </div>
//              <div class="card-body">
//                  <h5 class="card-title">Special title treatment</h5>
//                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                  <a href="#" class="btn btn-primary">Go somewhere</a>
//              </div>
//              <div class="card-footer text-muted">
//                  2 days ago
//              </div>
//         </div>

        <Row>
          {reposList.map( (repo, index) => {
            let langArr = [];
            let sumCarac = 0;
            // var isEmptyLang = false;
            
            // if(Object.keys(repo.language_stat).length === 0){
            //     isEmptyLang = true;
            // }
            return(
              <Col md="6" key={index} id='list-projects' className="mb-4">
                <Card className="repoCard">
                    <CardBody>
                        <div className="repo-title">
                            <CardTitle className="repo-name">{repo.name}</CardTitle>
                            <a
                                href={repo.html_url}
                                target='_blank'
                                rel="noopener noreferrer"
                                className="ghIcon"
                                data-tip data-for={`tip-repo-${index}`}
                            >
                                <Fa icon="github"/>
                            </a>
                            <ReactTooltip
                            id={`tip-repo-${index}`}
                            place="left"
                            type="dark"
                            effect="solid"
                            >
                            Voir dans GitHub
                            </ReactTooltip>
                            </div>
                            <hr/>
                        <small className='text-muted'>
                            {repo.description}
                        </small>
                    </CardBody>

                    <CardFooter>
                        <small className='text-muted font-italic'>
                            {`Dernière activité le ${repo.updated_at}`}
                        </small>
                    </CardFooter>
                  <div className="language-bar">

{/*placer le test sur isEmptyLang ici*/}

                    {
                      Object.entries(repo.language_stat).map(([key, value]) => {
                        sumCarac += value;
                        langArr.push([key, value]);
                        return null;

                        // Pour afficher la barre grise (marche pas)
                        // if (isEmptyLang) {
                        //     return (
                        //       <Fragment>
                        //         <span
                        //             className="lang-empty"
                        //             style={{boxShadow: 'inset 0 0 .25em'}}
                        //             data-tip data-for={'tip-lang-none'}
                        //         >
                        //         </span>
                        //         <ReactTooltip
                        //             id={`tip-lang-none`}
                        //             place="top"
                        //             type="dark"
                        //             effect="float"
                        //         >
                        //             Pas de langages
                        //         </ReactTooltip>                                
                        //       </Fragment>
                        //     )
                        //
                        // }
                      })
                    }

                    { 
                        langArr.map((lanSingleArr, index) => {
                            countIdSpan += 1
                            return(
                                <Fragment key={index}>
                                    <span
                                        style={{width: (lanSingleArr[1] / sumCarac)*100 + '%',
                                        background: langColors[lanSingleArr[0]]
                                        }}
                                        data-tip data-for={`tip-lang-${countIdSpan}`}
                                    ></span>
                                    <ReactTooltip
                                        id={`tip-lang-${countIdSpan}`}
                                        place="top"
                                        type="dark"
                                        effect="float"
                                    >
                                        {lanSingleArr[0]}
                                    </ReactTooltip>
                                </Fragment>
                            )
                            
                        })
                    }
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row>
      );
    }
}

export default Projet;
