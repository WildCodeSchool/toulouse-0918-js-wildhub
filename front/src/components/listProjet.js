import React, {Component, Fragment} from "react";
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
                <div className="card projetsCard">
                  <div className="repo-name">{repo.name}</div>
                  <div className="repo-desc">{repo.description}</div>
                  <div className="language-bar">
                    {
                      Object.entries(repo.language_stat).map(([key, value]) => {
                        sumCarac += value;
                        langArr.push([key, value])
                      })
                    }
                    {
                      langArr.map(lanSingleArr => {
                          return(
                              <span
                                style={{width: (lanSingleArr[1] / sumCarac)*100 + '%',
                                  height: 5,
                                  background: langColors[lanSingleArr[0]],
                                  display: 'inline-block'
                                }}
                              ></span>
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
