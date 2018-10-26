import React, { Component } from 'react';
import '../styles/filtres.scss';
import Autosuggest from 'react-autosuggest';
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
    if(newValue.length === 0){ this.props.getExplore() }
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
      placeholder: "Ex: 'JavaScript'",
      value,
      onChange: this.onChange
    };

    return (
      <div className='filter'>
        <div className="filter-text text-center mb-3">Trier par langages</div>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionSelected={this.onSuggestionSelected}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            style={{border: "none"}}
          />
        </div>
      )
    }
  }

  export default Filtre;
