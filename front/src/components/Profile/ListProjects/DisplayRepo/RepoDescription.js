import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import Raw from './Raw';
import { Container, Row, Col, Card, CardTitle, CardBody, CardFooter, Fa } from 'mdbreact';

class RepoDescription extends Component {

  render() {
    const { name, html_url, description, created_at, updated_at } = this.props.repo;
    const { files } = this.props;
    const readmeObj = files.filter(readme => readme.name === 'README.md')
    return (

        <Col xs='12' lg='8' className='mr-auto'>
            <Card>

              <CardTitle>
                <div>{ name }</div>
              </CardTitle>

              <CardBody>
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
                <div>{ description }</div>

                {
                  files.length && readmeObj.length &&
                  <Raw readmeObj={readmeObj[0]}/>
                }


              </CardBody>

              <CardFooter>
                <div>
                  { created_at }
                  { updated_at }
                </div>
              </CardFooter>

            </Card>
          </Col>
    );
  }
}

export default RepoDescription;
