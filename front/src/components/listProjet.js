import React, {Component} from "react";
import '../styles/listProjet.css';

const Liste = [
    {
        pTitre: 'Titre1',
        pDescription: 'Description1',
        pLanguages: [
            {
                name: "JavaScript",
                percentage: "60%"
            },
            {
                name: "HTML",
                percentage: "40%"
            }
        ]
    },
    {
        pTitre: 'Titre2',
        pDescription: 'Description2',
        pLanguages: [
            {
                name: "JavaScript",
                percentage: "60%"
            },
            {
                name: "HTML",
                percentage: "40%"
            }
        ]
    },
    {
        pTitre: 'Titre3',
        pDescription: 'Description3',
        pLanguages: [
            {
                name: "JavaScript",
                percentage: "60%"
            },
            {
                name: "HTML",
                percentage: "40%"
            }
        ]
    },
    {
        pTitre: 'Titre4',
        pDescription: 'Description4',
        pLanguages: [
            {
                name: "JavaScript",
                percentage: "60%"
            },
            {
                name: "HTML",
                percentage: "40%"
            }
        ]
    },
    {
        pTitre: 'Titre5',
        pDescription: 'Description5',
        pLanguages: [
            {
                name: "JavaScript",
                percentage: "60%"
            },
            {
                name: "HTML",
                percentage: "40%"
            }
        ]
    },
];

const color = {
    JavaScript: "bg-warning",
    HTML: "bg-danger"
}

class Projet extends Component{
    constructor(props){
        super(props);
        this.state = {
            isFavorite: false,
        };
    }

    handleClick = () => {
        this.setState({
            isFavorite: !this.state.isFavorite,
        });
    }

    render(){
        const icoHeart = this.state.isFavorite ? 'fas fa-heart' : 'far fa-heart';
        return(
            <div className="col-md-6 mb-4">
                <div className="card projetsCard">
                    <span className="IconHeart" onClick={this.handleClick}><i className={icoHeart}></i></span>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.pTitre}</h5>
                        <p className="card-text">{this.props.pDescription}</p>
                        <div className="language-gage">
                            {this.props.pLanguages.map(percent => (
                                <span className={color[percent.name]} style={{width: percent.percentage}}></span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const PillsList = () => (
    <div className='containerGlobal'>
        <div className="container">
            <h2 className='titreProjet'>Projet de Jacky-Tuning</h2>
            <div className="row projetsRow">
                {Liste.map(projet =>
                    <Projet
                        urlImage = {projet.urlImage}
                        altImage = {projet.altImage}
                        pTitre = {projet.pTitre}
                        pDescription = {projet.pDescription}
                        pLanguages = {projet.pLanguages}
                    />
                )}
            </div>
        </div>
    </div>
);

export default PillsList;