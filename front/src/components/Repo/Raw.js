import React, { Component } from 'react';
import {token} from '../../settings';
import Prism from 'prismjs';
import axios from 'axios';
require('prismjs/components/prism-jsx');
require('prismjs/themes/prism.css');

const ReactMarkdown = require('react-markdown')


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
      language: '',
      fileObj: this.props.readmeObj

    }
  }

  componentDidMount() {
    this.fetchFile(this.props.readmeObj.url)
  }

  static getDerivedStateFromProps(props, state) {
    return props.readmeObj.url === state.fileObj.url
      ? null
      : {fileObj: props.readmeObj }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.fileObj.url !== this.state.fileObj.url) {
      this.fetchFile(this.state.fileObj.url)
    }
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
      language === 'markdown'
      ? <ReactMarkdown source={code} />
      : <div>{code && getCode(code, language)}</div>
    )
  }




}

export default Raw;
