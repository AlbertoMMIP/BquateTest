import React from 'react';
import { NavBar } from '../home/NavBar';

export const About = () => (
    <div>
        <NavBar />
        <div className="uk-section">
            <div className="uk-container">
            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-1@s uk-margin" data-uk-grid>
                <div>
                    <div className="uk-card-body">
                        <article className="uk-article">
                            <h1 className="uk-article-title"><a className="uk-link-reset" href="">General Info</a></h1>
                            <p className="uk-article-meta">Written by <a href="https://www.linkedin.com/in/alberto-mart%C3%ADnez-b69519107/" target="_blank">Alberto Martinez</a> on 04 March 2019. </p>
                            <p className="uk-text-lead">Site for apply to the job like Node.JS developer in <a href="https://bquate.com/home" target="_blank">Bquate</a> </p>
                            <div className="uk-grid-small uk-child-width-auto" >
                                <div>
                                    <ul className="uk-list uk-list-divider">
                                        <li>Repository:  <a href="https://github.com/AlbertoMMIP/BquateTest" target="_blank" >GitHub</a> </li>
                                        <li>LinkedIn:    <a href="https://www.linkedin.com/in/alberto-mart%C3%ADnez-b69519107/" target="_blank">Alberto Martínez</a></li>
                                        <li>Other Project: <a href="https://colorydestellos.herokuapp.com/" target="_blank">COLOR&DESTELLOS</a> </li>
                                        <li>Tecnologies: 
                                            <ul>
                                                <li><a href="https://nodejs.org/es/">Node JS</a></li>
                                                <li><a href="https://reactjs.org/">React JS</a></li>
                                                <li><a href="https://getuikit.com/">UIKit</a></li>
                                                <li><a href="https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2/Search">API musicbrainz</a></li>
                                                <li><a href="https://id.heroku.com/login">Heroku</a></li>
                                            </ul> 
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </article>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
);