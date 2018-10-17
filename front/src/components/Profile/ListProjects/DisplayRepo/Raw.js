import React, { Component } from 'react';
import token from '../../../../config';
import Prism from 'prismjs';
import axios from 'axios';
require('prismjs/components/prism-jsx');
require('prismjs/themes/prism.css');

const languagesMap = {
  js: 'jsx',
  md: 'markdown',
};

const getCode = (code, language) => (
  <pre>
    <code className={ `language-${language}` }>
      {code}
    </code>
  </pre>
)

const base64ToUtf8 = str => decodeURIComponent(escape(window.atob(str)));

class Raw extends Component {

  constructor(props){
    super(props);
    this.state = {
      code: '',
      language: ''
    }
  }

  componentDidMount() {
    this.fetchFile(this.props.readmeObj.url)
  }


  fetchFile(file) {
    const extension = file.split('.').pop().split('?').shift();
    const language = languagesMap[extension];

    axios.get(file, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
      .then(response => {
        const { content } = response.data;
        const code = base64ToUtf8(content);
        this.setState(
          { code, language },
          () => Prism.highlightAll()
        )
      })
  }

  render() {
    const {code, language} = this.state

    return (

      <div>{code && getCode(code, language)}</div>
    )
  }




}

export default Raw;
