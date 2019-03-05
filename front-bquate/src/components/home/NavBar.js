import React from "react";
import { NavBarMovil } from "./NavBarMovil";
import {NavLink} from 'react-router-dom'

export const NavBar = () => (
  <div>
    <div className="uk-hidden@l">
      <NavBarMovil />
    </div>
    <div className="uk-visible@l tm-header-transparent" data-uk-header="">
      <div data-uk-sticky="" data-media="@l" data-cls-active="uk-navbar-sticky" data-sel-target=".uk-navbar-container" className="uk-sticky" data-style="">
        <nav className="uk-navbar-container uk-margin" data-uk-navbar>
          <div className="uk-navbar-center">
            <div className="uk-navbar-center-left">
              <div>
                <ul className="uk-navbar-nav">
                  <li className="uk-active"><NavLink to="/one">Challenge One</NavLink></li>
                  <li> <NavLink to="/two">Challenge Two</NavLink> </li>
                </ul>
              </div>
            </div>
            <NavLink className="uk-navbar-item uk-logo" to="/"> <img src="BquateLogo.png" alt="Logo"/> </NavLink>
            <div className="uk-navbar-center-right">
              <div>
                <ul className="uk-navbar-nav">
                  <li> <NavLink to="/three">Challenge Three</NavLink> </li>
                  <li> <NavLink to="/about">About</NavLink> </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
);
