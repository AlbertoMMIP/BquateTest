import React from "react";
import {Link} from 'react-router-dom';

export const Options = () => (
  <div className="uk-container" >
    <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid >
      <div>
        <div className="uk-card uk-card-default uk-card-body">
          <h3 className="uk-card-title">Challenge One</h3>
          <p>
            Write a program that prints all the numbers from 1 to 100. However,
            for multiples of 3, instead of the number, print "Multi". For
            multiples of 5 print "IT". For numbers which are multiples of both 3
            and 5, print "Multipli".
          </p>
          <Link to="/one">Solution</Link>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-primary uk-card-body">
          <h3 className="uk-card-title">Challenge Two</h3>
          <p>
            Build a frontend interface to search artist, discs (releases) and
            tracks (recordings), the tables for listing must have:
          </p>
          <ul>
            <li>Image</li>
            <li>Name</li>
            <li>Little description</li>
            <li>On click name show element with mayor description</li>
          </ul>
          <Link to="/">Solution</Link>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-secondary uk-card-body">
          <h3 className="uk-card-title">Challenge Three</h3>
          <p>Using the file bd_musica.sql that we have provided you, using Nodejs and MySql, you must create the database needed for the query exercises:</p>
          <Link to="/">Solution</Link>
        </div>
      </div>
    </div>
  </div>
);
