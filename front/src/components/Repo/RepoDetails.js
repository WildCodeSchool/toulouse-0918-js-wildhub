import React, { Component } from 'react';
import {
    Col,
    Card,
    CardBody,
    CardTitle,
    Fa,
    Button
} from 'mdbreact';
import ReactTooltip from 'react-tooltip';
import Raw from './Raw';
import {token} from '../../settings';

class RepoDetails extends Component {

    constructor(props) {
      super(props);
      this.state = {
        files: this.props.files,
        goBackPathArr: []
      }
      this.developDir = this.developDir.bind(this)
      this.goBackInTree = this.goBackInTree.bind(this)
    }

    developDir(dirPath) {
      const { repoName, ownerName } = this.props;
      fetch(`https://api.github.com/repos/${ownerName}/${repoName}/contents/${dirPath}?ref=master`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(results => results.json())
        .then(files => this.setState({
          files: files,
          goBackPathArr: [...this.state.goBackPathArr, dirPath]
        }))
    }

    goBackInTree() {
      const temp = [...this.state.goBackPathArr];
      temp.splice(-1,1)
      const last = temp[temp.length -1]
      const { repoName, ownerName } = this.props;
      const urlFetch = temp.length ? `https://api.github.com/repos/${ownerName}/${repoName}/contents/${last}?ref=master` :
      `https://api.github.com/repos/${ownerName}/${repoName}/contents`

      fetch(urlFetch, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(results => results.json())
        .then(files => this.setState({
          files: files,
          goBackPathArr: temp
        }))
    }


    render() {
        console.log('props', this.props.files);
        console.log('state', this.state.files);
        console.log('goBack', this.state.goBackPathArr);
        const { name, html_url, description } = this.props.repo;
        const { repoName } = this.props;
        const nameOfRepo = name ? name : repoName;

        const readmeObj = this.props.files.length && this.props.files.filter(readme => readme.name === 'README.md');

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
                      this.state.goBackPathArr.length
                      ? <Fa icon="arrow-circle-left" onClick={this.goBackInTree}/>
                      : ''
                    }

                    {
                      this.props.files && this.props.files.length && this.state.files && this.state.files.length &&
                      this.state.files.map((file, idx) => {
                        return(
                          (file.type === 'dir') ?
                          <div className='text-primary' key={idx} onClick={() => this.developDir(file.path)}>{file.name}</div> :
                          <div key={idx}>{file.name}</div>
                          // <div key={idx} onClick={() => this.developDir(file.name)}>{file.name}</div> :
                          // <div className={`text-${this.props.theme.color}`} key={idx}>{file.name}</div>
                        )
                      })
                    }

                    {
                      this.props.files && this.props.files.length && readmeObj.length &&
                      <Raw theme={this.props.theme} readmeObj={readmeObj[0]}/>
                    }
                  </CardBody>
                </Card>
              </Col>
        );
      }
}

export default RepoDetails;
