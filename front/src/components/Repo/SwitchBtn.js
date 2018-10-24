import React, { Component } from 'react'
import '../../styles/SwitchBtn.scss'

export default class SwitchBtn extends Component {

  constructor(props){
    super(props);
    this.state = {
      isActive: this.props.isActive
    }

    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch(){

    this.setState({
      isActive: !this.state.isActive
    })

    const { repo } = this.props;

      fetch(`https://wildhub.ssd1.ovh/api/projects`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(repo)
      })
  }

  render(){

    const { isActive } = this.state;
    const repoSate = isActive ? 'Retirer' : 'Partager';
    return (
      <div className='d-flex align-items-center'>
        <label className="switch mb-0">
          <input type="checkbox" checked={isActive} onChange={this.handleSwitch} />
          <span className="slider round" />
        </label>
        <span className="text-muted repoState pl-2"><small>{repoSate}</small></span>
      </div>
    )
  }
}
