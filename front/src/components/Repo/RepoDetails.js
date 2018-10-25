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
        files: this.props.files,
        goBackPathArr: [],
      }
      this.developDir = this.developDir.bind(this)
      this.goBackInTree = this.goBackInTree.bind(this)
      this.changeCode = this.changeCode.bind(this)
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

    changeCode(file) {
      this.setState({
        fileCode: [file]
      })
    }

    componentDidMount() {
        const readmeObj = this.props.files.length && this.props.files.filter(readme => readme.name === 'README.md');
        this.setState({
          fileCode : readmeObj
        })
    }


    render() {
        const { name, html_url, description } = this.props.repo;
        const { repoName } = this.props;
        const nameOfRepo = name ? name : repoName;

        return (
            <Col xs='12' lg='8' className='mr-auto mb-5'>
                <Card className={`display-repo ${this.props.theme.colorItems}`}>
                  <CardBody>
                    <div className="repo-title">
                        <CardTitle className={`mb-0 text-${this.props.theme.color}`} style={{fontFamily: 'Gotham'}}>{ nameOfRepo }</CardTitle>
                        <a
                          href={ html_url }
                          target='_blank'
                          rel="noopener noreferrer"
                          className="ghIcon"
                          data-tip data-for={`tip-repo-1`}
                        >
                          <Fa icon="github" style={{color: `${this.props.theme.color}`}}/>
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
                    <div
                      className={`repo-desc mb-4 text-${this.props.theme.color}`}
                      style={{fontFamily: 'SourceSans', fontSize: '1.2em'}}
                    >
                      { description }
                    </div>

                    {
                      this.state.goBackPathArr.length
                      ? <Fa icon="arrow-circle-left" onClick={this.goBackInTree} style={{color: `${this.props.theme.color}`, cursor: 'pointer'}}/>
                      : ''
                    }

                    {
                      this.props.files && this.props.files.length && this.state.files && this.state.files.length &&
                      this.state.files.map((file, idx) => {
                        return(
                          (file.type === 'dir') ?
                          <div >
                            <Fa icon="folder" style={{color: `${this.props.theme.color}`, cursor: 'pointer'}}/>
                            <span className={`repo-desc ml-2 text-${this.props.theme.color}`} style={{fontFamily: 'SourceSans', cursor: 'pointer'}}  key={idx} onClick={() => this.developDir(file.path)}>{file.name}</span>
                          </div>
                          :
                          <div onClick={() => this.changeCode(file)}>
                            <Fa icon="file-code-o" style={{color: `${this.props.theme.color}`}}/>
                            <span className={`repo-desc ml-2 text-${this.props.theme.color}`} style={{fontFamily: 'SourceSans', cursor: 'pointer'}} key={idx}>{file.name}</span>
                          </div>


                        )
                      })
                    }

                    {
                      this.props.files && this.props.files.length && this.state.fileCode ?
                      <div id='codeReadme' className='p-3 mt-3 rounded' style={{background: "#f6f2ef"}}>
                        <Raw theme={this.props.theme} readmeObj={this.state.fileCode[0]}/>
                      </div>
                      : ''
                    }
                  </CardBody>
                </Card>
              </Col>
        );
      }
}

export default RepoDetails;
