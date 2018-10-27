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
        // let currentYOffset = window.pageYOffset;
        // let initYOffset = currentYOffset

        // const intervalId = setInterval(function(){
        //     currentYOffset -= initYOffset*0.05; 
        //     document.body.scrollTop = currentYOffset ;
        //     document.documentElement.scrollTop = currentYOffset;
          
        //       if(window.pageYOffset === 0){
        //         clearInterval(intervalId);
        //       }
        // }, 5);

    }

    // topFunction() {
        
    //     initYOffset = currentYOffset;
      
    //     var intervalId = setInterval(function(){
    //     currentYOffset -= initYOffset*0.05; 
    //     document.body.scrollTop = currentYOffset ;
    //     document.documentElement.scrollTop = currentYOffset;
      
    //       if(self.pageYOffset == 0){
    //         clearInterval(intervalId);
    //       }
    //     }, 20);
      
    //   } 



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
