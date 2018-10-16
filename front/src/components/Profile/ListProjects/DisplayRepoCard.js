import React, {Component} from "react";
import LanguagesBar from './LanguagesBar';
import ReactTooltip from 'react-tooltip';
import { Col, Card, CardBody, CardTitle, CardFooter, Fa } from 'mdbreact';
import { Link } from 'react-router-dom';


class DisplayRepoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    const { repo, key } = this.props;

    return(
      <Col md='6' className='mb-4'>

        <Card className="repoCard">

          <CardBody>
            <div className="repo-title">
            <Link to={`${repo.owner.login}/repos/${repo.name}`}>
              <CardTitle className="repo-name">{repo.name}</CardTitle>
            </Link>

            <a
              href={repo.html_url}
              target='_blank'
              rel="noopener noreferrer"
              className="ghIcon"
              data-tip data-for={`tip-repo-${key}`}
            >
              <Fa icon="github"/>
            </a>
            <ReactTooltip
              id={`tip-repo-${key}`}
              place="left"
              type="dark"
              effect="solid"
            >
              Voir dans GitHub
            </ReactTooltip>
            </div>

            <hr/>

            <small className='text-muted'>
              {repo.description}
            </small>
          </CardBody>

          <CardFooter>
            <small className='text-muted font-italic'>
              {`Dernière activité le ${repo.updated_at}`}
            </small>
          </CardFooter>

          <LanguagesBar repo={repo} idx={key} />

        </Card>

      </Col>
    )
  }
}

export default DisplayRepoCard;
