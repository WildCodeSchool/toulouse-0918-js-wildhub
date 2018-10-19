import React, { Component, Fragment } from 'react';
import ReactTooltip from 'react-tooltip';
import langColors from '../../../data/colors.js';

class LanguagesList extends Component {

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
      <div className="languages-list">
        {
          langArr.map((lanSingleArr, idx) => {
            return (
              <div>
                <span  key={idx} className="dot-color" style={{background: langColors[lanSingleArr[0]]}}></span>
                <span>
                  {`${lanSingleArr[0]}: ${((lanSingleArr[1]/sumCarac) * 100).toFixed(2)} %`}
                </span>
              </div>
            )
          })
        }
      </div>
    );
  }
}


export default LanguagesList;
