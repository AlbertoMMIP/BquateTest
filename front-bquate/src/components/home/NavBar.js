import React from "react";
import { NavBarMovil } from "./NavBarMovil";

export const NavBar = () => (
  <div>
    <div className="uk-hidden@l">
      <NavBarMovil />
    </div>
    <div className="uk-visible@l tm-header-transparent" data-uk-header="">
      <div data-uk-sticky="" data-media="@l" data-cls-active="uk-navbar-sticky" data-sel-target=".uk-navbar-container" className="uk-sticky" data-style="" >
            <nav className="uk-navbar-container uk-margin" data-uk-navbar>
              <div className="uk-navbar-center">
                <div className="uk-navbar-center-left">
                  <div>
                    <ul className="uk-navbar-nav">
                      <li className="uk-active"><a href="#">Challenge One</a></li>
                    </ul>
                  </div>
                </div>
                <a className="uk-navbar-item uk-logo" href="#"><img src="BquateLogo.png" /></a>
                <div className="uk-navbar-center-right">
                  <div>
                    <ul className="uk-navbar-nav">
                      <li><a href="#">Challenge Two</a></li>
                      <li><a href="#">Challenge Three</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
      </div>
    </div>
  </div>
);
