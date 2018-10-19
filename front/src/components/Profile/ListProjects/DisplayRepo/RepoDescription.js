import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import Raw from './Raw';
import { Container, Row, Col, Card, CardTitle, CardBody, CardFooter, Fa } from 'mdbreact';

class RepoDescription extends Component {

  render() {
    const { name, html_url, description } = this.props.repo;
    const { files } = this.props;
    const readmeObj = files.filter(readme => readme.name === 'README.md')
    return (

        <Col xs='12' lg='8' className='mr-auto mb-5'>
            <Card className='display-repo'>

              <CardBody>
                <div className="repo-title">
                    <CardTitle className='mb-0'>{ name }</CardTitle>

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


                <div className='repo-desc'>{ description }</div>

                {
                  files.length && readmeObj.length &&
                  <Raw readmeObj={readmeObj[0]}/>
                }


              </CardBody>
            </Card>
          </Col>
    );
  }
}

export default RepoDescription;
