/* global loadCSS */
import React, { Component } from 'react';
import '../styles/SwitchButton.scss';




class SwitchButton extends React.Component {

    constructor ( props ) {
        super( props );
		
		this.state = {
            isChecked: null,
		}
    }
	
	componentWillMount () {
		this.setState( { isChecked: this.props.isChecked } );
	}

    
    handleChange = () =>{
		this.setState( { 
            isChecked: !this.state.isChecked 
        } );
        loadCSS('../styles/light/lightTheme.scss')
    }

    render () {
        return( 
            <div className="switch-container d-flex" >
                <span className="mr-3">Nightmode</span>
                <label >
                    <input 
                        ref="switch" 
                        checked={ this.state.isChecked } 
                        onChange={ this.handleChange } 
                        className="switch" 
                        type="checkbox" 
                    />
                    <div>
                        <span><g className="icon icon-toolbar grid-view"></g></span>
                        <span><g className="icon icon-toolbar ticket-view"></g></span>
                        <div></div>
                    </div>
                </label>
            </div>
        );
    }



}


export default SwitchButton;