import React, { Component, Fragment } from 'react';
import ReactTooltip from 'react-tooltip';
import langColors from '../../data/colors.js';

class LangBar extends Component {
    render() {
        let sumChar = 0, countIdSpan = 0;
        const { repo, name } = this.props;
        let langArr = [];
    
        Object.entries(repo.language_stat).map(([key, value]) => {
            sumChar += value;
            langArr.push([key, value]);
            return null;
        })
    
        return (
            <div className="language-bar">
            {
                langArr.map((singleLang, index) => {
                    countIdSpan += 1
                    return(
                        <Fragment key={index}>
                            <span
                                style={{width: ((singleLang[1] / sumChar)*100).toFixed(2) + '%',
                                background: langColors[singleLang[0]]
                                }}
                                data-tip data-for={`tip-lang-${name}-${countIdSpan}`}
                            ></span>
                            <ReactTooltip
                                id={`tip-lang-${name}-${countIdSpan}`}
                                place="top"
                                type="dark"
                                effect="float"
                            >
                                {`${singleLang[0]}: ${((singleLang[1] / sumChar)*100).toFixed(2)} %`}
                            </ReactTooltip>
                        </Fragment>
                    )
  
                })
            }
            </div>
        );
      }
}

export default LangBar;