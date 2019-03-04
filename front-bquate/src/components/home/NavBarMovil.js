import React from 'react';
import {NavLink} from 'react-router-dom';

export const NavBarMovil = () => (
    <div>
        <nav className="uk-navbar-container uk-navbar" data-uk-navbar="">
            <div className="uk-navbar-left">
                <a className="uk-navbar-toggle" href="#tm-mobile" data-uk-toggle="">
                    <div uk-navbar-toggle-icon="" className="uk-navbar-toggle-icon uk-icon"></div>
                </a>
            </div>
            <div className="uk-navbar-right">
                <a className="uk-navbar-item uk-logo" href="/"><img src="BquateLogo.png" width="150px" height="auto" alt="Bquate"/></a>
            </div>
        </nav>
        <div id="tm-mobile" className="uk-modal-full uk-modal" data-uk-modal="">
            <div className="uk-modal-dialog uk-modal-body uk-text-center uk-flex uk-height-viewport">
                <button className="uk-modal-close-full uk-close uk-icon" type="button" data-uk-close="">
                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"
                            data-svg="close-icon">
                        <line fill="none" stroke="#000" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13"/>
                        <line fill="none" stroke="#000" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13"/>
                    </svg>
                </button>
                <div className="uk-margin-auto-vertical uk-width-1-1">
                    <div className="uk-child-width-1-1 uk-grid uk-grid-stack" data-uk-grid="">
                        <div>
                            <div className="uk-panel" id="module-0">
                                <div className="uk-navbar-center">                                    
                                    <ul className="uk-nav uk-nav-primary uk-nav-center">
                                        <li ><NavLink to="/one"><b>Challenge One  </b></NavLink></li>
                                        <li ><NavLink to="/two"><b>Challenge Two  </b></NavLink></li>
                                        <li ><NavLink to="/three"><b>Challenge Three</b></NavLink></li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);