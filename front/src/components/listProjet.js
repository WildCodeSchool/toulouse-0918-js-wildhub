import React, {Component, Fragment} from "react";
import ReactTooltip from 'react-tooltip';
import '../styles/listProjet.css';
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
      fetch ('https://api.github.com/users/NelsonHui123/repos')

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
      const {reposList} = this.state;
      return (
        (reposList.length !== 0) &&
        <Fragment>
          {reposList.map( (repo, index) => {
            let langArr = [];
            let sumCarac = 0;
            return(
              <div key={index} className='col-md-6 mb-4'>
                <div className="card repoCard">
                    <a
                        href='#!'
                        className="ghIcon"
                        data-tip data-for={`tip-repo-${index}`}
                    >
                        <i class="fab fa-github"></i>
                    </a>
                    <ReactTooltip
                        id={`tip-repo-${index}`}
                        place="left"
                        type="dark"
                        effect="solid"
                    >
                        Voir dans GitHub
                    </ReactTooltip>

                    <h5 className="repo-name">{repo.name}</h5>
                    <div className="repo-desc">
                        <small className='text-muted'>
                            {repo.description}
                        </small>
                    </div>
                    <div className="date">
                        <small className='text-muted font-italic'>
                            {`Dernière activité le ${repo.updated_at}`}
                        </small>
                    </div>
                  <div className="language-bar">
                    {
                      Object.entries(repo.language_stat).map(([key, value]) => {
                        sumCarac += value;
                        langArr.push([key, value])
                      })
                    }
                    {
                      langArr.map((lanSingleArr, index) => {
                          return(
                            <Fragment>
                                <span
                                    key={index}
                                    style={{width: (lanSingleArr[1] / sumCarac)*100 + '%',
                                    background: langColors[lanSingleArr[0]]
                                    }}
                                    data-tip data-for={`tip-lang-${index}`}
                                    ></span>
                                    <ReactTooltip
                                    id={`tip-lang-${index}`}
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
                </div>
              </div>
            )
          })}
        </Fragment>
      );
    }
}

export default Projet;
