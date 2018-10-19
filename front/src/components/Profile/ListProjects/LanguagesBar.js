import React, { Component, Fragment } from 'react';
import ReactTooltip from 'react-tooltip';
import langColors from '../../../data/colors.js';

class LanguagesBar extends Component {

  render() {
    let sumCarac = 0, countIdSpan = 0;
    const { repo, key, name } = this.props;
    let langArr = [];

    Object.entries(repo.language_stat).map(([key, value]) => {
        sumCarac += value;
        langArr.push([key, value]);
        return null;
    })
    console.log(repo)
    return (
      <div className="language-bar">

          {
              langArr.map((lanSingleArr, index) => {
                  countIdSpan += 1
                  return(
                      <Fragment key={index}>
                          <span
                              style={{width: ((lanSingleArr[1] / sumCarac)*100).toFixed(2) + '%',
                              background: langColors[lanSingleArr[0]]
                              }}
                              data-tip data-for={`tip-lang-${name}-${countIdSpan}`}
                          ></span>
                          <ReactTooltip
                              id={`tip-lang-${name}-${countIdSpan}`}
                              place="top"
                              type="dark"
                              effect="float"
                          >
                              {`${lanSingleArr[0]}: ${((lanSingleArr[1] / sumCarac)*100).toFixed(2)} %`}
                          </ReactTooltip>
                      </Fragment>
                  )

              })
          }
      </div>
    );
  }
}


export default LanguagesBar;
