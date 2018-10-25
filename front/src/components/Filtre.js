import React, { Component, Fragment } from 'react';
import filtres from '../styles/filtres.css'
import Autosuggest from 'react-autosuggest';
import { Container, Row, Col } from 'mdbreact';
import colors from '../data/colors';

const languages = Object.keys(colors);

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.language}</span>
  );
}

class Filtre extends Component {

  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    console.log(newValue)
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    fetch(`https://wildhub.ssd1.ovh/api/projects/`)
      .then(response => response.json())
      .then(data => this.setState({ suggestions: data }))
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {

    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Exemple 'JavaScript'",
      value,
      onChange: this.onChange
    };

    return (
      <Fragment>
        <span>Trier par langages</span>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
        </Fragment>
      )
    }
  }

  export default Filtre;
