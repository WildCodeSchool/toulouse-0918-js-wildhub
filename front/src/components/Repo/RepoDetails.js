import React, { Component } from 'react';
import {
    Col,
    Card,
    CardBody,
    CardTitle,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Fa
} from 'mdbreact';
import ReactTooltip from 'react-tooltip';
import Raw from './Raw';
import '../../styles/repo/repo-details.scss';

class RepoDetails extends Component {

    constructor(props) {
      super(props);
      this.state = {
        files: [],
        goBackPathArr: [],
        fileCode: [],
        activeBranch: this.props.repo.default_branch,
        branchesList: []
      }
      this.developDir = this.developDir.bind(this);
      this.goBackInTree = this.goBackInTree.bind(this);
      this.changeCode = this.changeCode.bind(this);
      this.setActiveBranch = this.setActiveBranch.bind(this);
    }

    developDir(dirPath) {
      const { repoName, ownerName, accessToken } = this.props;
      const { activeBranch } = this.state;
      fetch(`https://api.github.com/repos/${ownerName}/${repoName}/contents/${dirPath}?ref=${activeBranch}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
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
      const previous = temp[temp.length -1]
      const { repoName, ownerName, accessToken } = this.props;
      const { activeBranch } = this.state;
      const urlFetch = temp.length ? `https://api.github.com/repos/${ownerName}/${repoName}/contents/${previous}?ref=${activeBranch}` :
      `https://api.github.com/repos/${ownerName}/${repoName}/contents?ref=${activeBranch}`

      fetch(urlFetch, {
        headers: {
          Authorization: `Bearer ${accessToken}`
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
      const { repoName, ownerName, accessToken } = this.props;

      fetch(`https://api.github.com/repos/${ownerName}/${repoName}/branches`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(results => results.json())
      .then(branch =>
        this.setState({
            branchesList: branch
          })
      );

      fetch(`https://api.github.com/repos/${ownerName}/${repoName}/contents`, {
        headers: {
          Authorization: `Bearer ${this.props.accessToken}`
        }
      })
      .then(results  =>  results.json())
      .then(files => {
        this.setState({
          files: files
        })
        const readmeObj = this.state.files.length && this.state.files.filter(readme => readme.name === 'README.md');
        this.setState({
          fileCode: readmeObj
        });
      })
    }

    setActiveBranch(e){
      e.preventDefault();
      this.setState({activeBranch: e.target.textContent})
    }


    render() {
        const { name, html_url, description } = this.props.repo;
        const { repoName } = this.props;
        const { branchesList, activeBranch } = this.state;
        const nameOfRepo = name ? name : repoName;
        return (
            <Col xs='12' lg='8' className='mr-auto mb-5'>
                <Card className='display-repo'>
                  <CardBody>
                    <div className="repo-title">
                        <CardTitle className='mb-0' style={{fontFamily: 'Gotham'}}>{ nameOfRepo }</CardTitle>
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
                    {console.log(this.props.repo.default_branch)}
                    {
                      branchesList && activeBranch &&
                      <Dropdown>
                        <DropdownToggle caret color="primary" className='mx-0'>{`branche: ${activeBranch}`}</DropdownToggle>
                        <DropdownMenu>
                          {
                            branchesList.map((branch, idx) => (
                              <DropdownItem key={idx} href="#" onClick={this.setActiveBranch}>{branch.name}</DropdownItem>
                            ))
                          }
                        </DropdownMenu>
                      </Dropdown>
                    }

                    <hr />
                    <div
                      className='repo-desc mb-4'
                      style={{fontFamily: 'SourceSans', fontSize: '1.2em'}}
                    >
                      { description }
                    </div>

                    <div className="tree">

                      {
                        this.state.goBackPathArr.length
                        ? <span className="previous"><Fa icon="arrow-circle-left" onClick={this.goBackInTree}/></span>
                        : ''
                      }

                      {                        
                        this.state.files && this.state.files.length &&
                        this.state.files.map((file, idx) => {
                          return(
                            (file.type === 'dir') ?
                            <span className='doc-link' key={idx}>
                              <Fa icon="folder"/>
                              <span className='repo-desc ml-2' style={{fontFamily: 'SourceSans'}}  key={idx} onClick={() => this.developDir(file.path)}>{file.name}</span>
                            </span>
                            :
                            <span className='doc-link' key={idx} onClick={() => this.changeCode(file)}>
                              <Fa icon="file-code-o"/>
                              <span className='repo-desc ml-2' style={{fontFamily: 'SourceSans'}} key={idx}>{file.name}</span>
                            </span>


                          )
                        })
                      }
                    </div>

                    {
                      this.state.fileCode.length ?
                      <div className='fileCode p-3 mt-3 rounded'>
                        <Raw accessToken={this.props.accessToken} fileContent={this.state.fileCode[0]}/>
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
