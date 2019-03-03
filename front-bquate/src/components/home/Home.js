import React from "react";
import { NavBar } from "./NavBar";
import { Options } from "./Options";

export const Home = () => (
  <div>
    <NavBar />
    <div className="uk-cover-container" data-uk-height-viewport>
      <canvas width="" height=""></canvas>
      <img src="https://images.unsplash.com/photo-1491421722235-b556e8f64dab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="backgroung"
          data-uk-cover />
      <Options />
    </div>
  </div>

);
