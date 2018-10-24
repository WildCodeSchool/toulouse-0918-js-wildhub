import React, { Component } from 'react';
import {
    Col,
    Card,
    CardBody,
    CardTitle,
    Fa
} from 'mdbreact';
import ReactTooltip from 'react-tooltip';
import Raw from './Raw';
import {token} from '../../settings';

class RepoDetails extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
      this.developDir = this.developDir.bind(this)
    }

    developDir(dirName) {
      const { repoName, ownerName } = this.props;
      fetch(`https://api.github.com/repos/${ownerName}/${repoName}/contents/${dirName}?ref=master`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(results => results.json())
        .then(files => files.map((file, idx) => file
        ))
        .then(files => this.setState({
          files: files
        }))
    }

    render() {
        const { name, html_url, description } = this.props.repo;
        const { repoName } = this.props;
        const nameOfRepo = name ? name : repoName;
        const { files } = this.props;

        const readmeObj = this.props.files.length && files.filter(readme => readme.name === 'README.md');

        return (
            <Col xs='12' lg='8' className='mr-auto mb-5'>
                <Card className={`display-repo ${this.props.theme.colorItems}`}>
                  <CardBody>
                    <div className="repo-title">
                        <CardTitle className={`mb-0 text-${this.props.theme.color}`}>{ nameOfRepo }</CardTitle>
                        <a
                          href={ html_url }
                          target='_blank'
                          rel="noopener noreferrer"
                          className="ghIcon"
                          data-tip data-for={`tip-repo-1`}
                        >
                          <Fa icon="github"/>
                        </a>
                        <ReactTooltip
                          id={`tip-repo-1`}
                          place="left"
                          type="dark"
                          effect="solid"
                        >
                          Voir dans GitHub
                        </ReactTooltip>
                    </div>
                    <hr />
                    <div className={`repo-desc text-${this.props.theme.color}`}>{ description }</div>

                    {
                      files.length &&
                      files.map((file, idx) => {
                        return(
                          (file.type === 'dir') ?
                          <div key={idx} onClick={() => this.developDir(file.name)}>{file.name}</div> :
                          <div className={`text-${this.props.theme.color}`} key={idx}>{file.name}</div>
                        )
                      })
                    }

                    {
                      files.length && readmeObj.length &&
                      <Raw theme={this.props.theme} readmeObj={readmeObj[0]}/>
                    }
                  </CardBody>
                </Card>
              </Col>
        );
      }
}

export default RepoDetails;
