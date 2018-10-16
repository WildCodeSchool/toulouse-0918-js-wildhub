import React, { Component } from 'react';
import token from '../../../../config';


class Raw extends Component {

  constructor(props){
    super(props);
    this.state = {
       files: []
    }
  }

  componentDidMount() {
    fetch(this.props.url +"/contents", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(results  =>  results.json())
      .then(files => {
        this.setState({
          files: files
        })
      });
  }



  render() {
    return (
      <div>{this.state.files.map(file=>file.name)}</div>
    )
  }



}

export default Raw;
