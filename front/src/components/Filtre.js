import React, { Component, Fragment } from 'react';
import filtres from '../styles/filtres.css'
import Autosuggest from 'react-autosuggest';
import { Container, Row, Col } from 'mdbreact';
import colors from '../data/colors';

const languages = Object.keys(colors);
const getSuggestionValue = (suggestion => suggestion)
const renderSuggestion = (suggestion => <span className="suggestion">{suggestion}</span> )

class Filtre extends Component {

  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
      const suggestions = languages.filter(language => language.toLowerCase().startsWith(value.toLowerCase()))
      this.setState({
        suggestions: suggestions
      })
  }

  onSuggestionSelected = (event) => {
    this.props.getByLanguage(event.target.innerText)
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
          onSuggestionSelected={this.onSuggestionSelected}
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
