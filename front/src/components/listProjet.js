import React from "react";
import '../styles/listProjet.css';

const PillsList = () => (
    <div>
        <ul className="nav nav-pills justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" href="#">Projets</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Favoris</a>
            </li>
        </ul>

        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div style={{position:'relative'}}>
                        <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x350"/></a>
                        <span className="emptyIconHeart"><i class="far fa-heart"></i></span>
                    </div>
                    <p>Titre</p>
                    <p>Description</p>
                </div>
                <div className="col-4">
                    <div style={{position:'relative'}}>
                        <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x350"/></a>
                        <span className="emptyIconHeart"><i class="far fa-heart"></i></span>
                    </div>
                    <p>Titre</p>
                    <p>Description</p>
                </div>
                <div className="col-4">
                    <div style={{position:'relative'}}>
                        <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x350"/></a>
                        <span className="emptyIconHeart"><i class="far fa-heart"></i></span>
                    </div>
                    <p>Titre</p>
                    <p>Description</p>
                </div>
                <div className="col-4">
                    <div style={{position:'relative'}}>
                        <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x350"/></a>
                        <span className="emptyIconHeart"><i class="far fa-heart"></i></span>
                    </div>
                    <p>Titre</p>
                    <p>Description</p>
                </div>
                <div className="col-4">
                    <div style={{position:'relative'}}>
                        <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x350"/></a>
                        <span className="emptyIconHeart"><i class="far fa-heart"></i></span>
                    </div>
                    <p>Titre</p>
                    <p>Description</p>
                </div>
            </div>
        </div>
    </div>
);

export default PillsList;