import React, { Component } from 'react';
import langColors from '../../data/colors.js';

class LangList extends Component {

  render() {
    let sumCarac = 0;
    const { repo } = this.props;
    let langArr = [];

    Object.entries(repo.language_stat).map(([key, value]) => {
        sumCarac += value;
        langArr.push([key, value]);
        return null;
    })

    return (
      <div className="languages-list">
        {
          langArr.map((lanSingleArr, idx) => {
            return (
              <div key={idx}>
                <span className="dot-color" style={{background: langColors[lanSingleArr[0]]}}></span>
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


export default LangList;
