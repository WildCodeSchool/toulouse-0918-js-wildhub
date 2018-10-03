import React from "react";
import '../styles/listProjet.css';

const Liste = [
    {
        urlImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png',
        altImage: 'placeholder',
        spanClass: 'far fa-heart',
        pTitre: 'Titre1',
        pDescription: 'Description1'
    },
    {
        urlImage: 'https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/14/thumb_bigger_formation-node-js.png',
        altImage: 'placeholder',
        spanClass: 'far fa-heart',
        pTitre: 'Titre2',
        pDescription: 'Description2'
    },
    {
        urlImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
        altImage: 'placeholder',
        spanClass: 'far fa-heart',
        pTitre: 'Titre3',
        pDescription: 'Description3'
    },
    {
        urlImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
        altImage: 'placeholder',
        spanClass: 'far fa-heart',
        pTitre: 'Titre4',
        pDescription: 'Description4'
    },
    {
        urlImage: 'https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/14/thumb_bigger_formation-node-js.png',
        altImage: 'placeholder',
        spanClass: 'far fa-heart',
        pTitre: 'Titre5',
        pDescription: 'Description5'
    },
];


const Projet = ({urlImage, altImage, spanClass, pTitre, pDescription}) => (
    <div className="col-4">
        <div className="card projetsCard">
            <img className="card-img-top" src={urlImage} alt={altImage}/>
            <span className="emptyIconHeart"><i className={spanClass}></i></span>
            <div className="card-body">
                <h5 className="card-title">{pTitre}</h5>
                <p className="card-text">{pDescription}</p>
            </div>
        </div>
    </div>
)


const PillsList = () => (
    <div className='containerGlobal'>
        <div className="container">
            <h2 className='titreProjet'>Projet de Jacky-Tuning</h2>
            <div className="row projetsRow">
                {Liste.map(projet =>
                    <Projet
                        urlImage = {projet.urlImage}
                        altImage = {projet.altImage}
                        spanClass = {projet.spanClass}
                        pTitre = {projet.pTitre}
                        pDescription = {projet.pDescription}
                    />
                )}
            </div>
        </div>
    </div>
);

export default PillsList;