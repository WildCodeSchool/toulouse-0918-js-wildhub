import React, { Component } from 'react';
import { Col } from 'mdbreact';

class AsideRepo extends Component {
  render() {
    const { ownerName, repo } = this.props;
    const { language_stat } = repo;
    console.table(repo);
    return(
      <Col xs='12' lg='3' className='ml-auto'>
        <div>{ownerName}</div>
      </Col>
    )
  }
}

export default AsideRepo;
