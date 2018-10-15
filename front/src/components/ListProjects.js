import React, {Component, Fragment} from "react";
import ReactTooltip from 'react-tooltip';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, CardFooter, Button, Fa } from 'mdbreact';
import langColors from '../data/colors.js';


class Projet extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isRepoSelect: false,
            selectedRepo: {}
        }

    }

    handleClick = (repo, langArr, sumCarac) => {
        this.setState({
            isRepoSelect: !this.state.isRepoSelect,
            selectedRepo: repo,
            arrayLanguage: langArr,
            sumCaracLang: sumCarac
        })
    }


    //Arbre
    showTree = () => {
      fetch(this.state.selectedRepo.url+'/contents', {
          headers: {
            Authorization: `Bearer ${'6915ea5a6bdf7bfb42a54a7e66c9d42ee1c74ef6'}`
          }
        })

          .then(result => result.json())
          .then(tree => this.setState({tree:tree}))
    }

    render() {
      let isSelect = this.state.isRepoSelect;
      let countIdSpan = -1;
      const reposList = this.props.getReposList;

      if (!isSelect) {
        return (

          <Row id='list-projects'>
            {reposList.map( (repo, index) => {
                let langArr = [];
                let sumCarac = 0;

                return(
                <Col md="6" key={index} className="mb-4">
                    <Card
                    className="repoCard"
                    onClick={() => this.handleClick(repo, langArr, sumCarac)}
                    >
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

                        {
                        Object.entries(repo.language_stat).map(([key, value]) => {
                            sumCarac += value;
                            langArr.push([key, value]);
                            return null;
                        })
                        }

                        {
                            langArr.map((lanSingleArr, index2) => {
                                countIdSpan += 1
                                return(
                                    <Fragment key={index2}>
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
    } else {
      const { selectedRepo, arrayLanguage, sumCaracLang } = this.state;
      const { name, created_at, updated_at, html_url, description} = selectedRepo;
      const { handleClick } = this;
        return (
            <Row id='list-projects'>
              <Col xs='12' className='mb-3'>
                <Button
                  size='sm'
                  variant='contained'
                  color='elegant'
                  onClick={handleClick}
                >
                  <Fa icon='caret-left' className='mr-2' /> Retour
                </Button>
              </Col>
              <Col xs='12'>
                <Card>
                  <CardHeader>
                    <div className='mb-3'>
                      <h3>{name}</h3>
                      <small className='text-muted font-italic d-block'>
                         {`Créé le ${created_at}`}
                      </small>
                      <small className='text-muted font-italic d-block'>
                        {`Dernière modification le ${updated_at}`}
                      </small>
                    </div>
                  </CardHeader>

                  <CardBody>
                    <div className='mb-5'>
                      {arrayLanguage}
                      {sumCaracLang}
                    </div>

                    <div className='mb-5'>
                     <h4>Description du Projet</h4>
                     <p className='pl-3'>{description}</p>
                    </div>

                    <div className='mb-5'>
                    <Button outline color='blue-grey' size='sm'>
                        <a
                        href={html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-dark'
                        >Voir sur github</a>
                    </Button>

                    {/*Arbre*/}
                    <Button onClick={this.showTree} outline color='blue-grey' size='sm'>Voir l'arbre</Button>


                    </div>

                 </CardBody>
               </Card>
              </Col>

            </Row>
        )
    }
    }
}

export default Projet;
