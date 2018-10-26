import React, { Component, Fragment } from 'react';
import { Button, Fa } from 'mdbreact';
import ReactTooltip from 'react-tooltip';

class ScrollBtn extends Component {
    constructor(props){
        super(props);

        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop(){
        window.scroll(0, 0);
    }



    render(){

        const btnState = this.props.state ? 'show' : '';

        return(
            <Fragment>
                <Button
                    tag='a'
                    floating color="elegant"
                    className={`to-top-btn ${btnState}`}
                    data-tip data-for='scroll-top'
                    onClick={this.scrollToTop}
                >
                    <Fa icon='arrow-up' />
                </Button>

                <ReactTooltip
                    id='scroll-top'
                    place="left"
                    type="dark"
                    effect="solid"
                >
                    Retour en haut
                </ReactTooltip>
            </Fragment>
        )
    }
}

export default ScrollBtn;