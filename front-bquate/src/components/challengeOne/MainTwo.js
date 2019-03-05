import React, {Component} from 'react';
import { NavBar } from "../home/NavBar";
import {ItemMusic} from "../common/ItemMusic";

class MainTwo extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
            <div>
                <NavBar />
                <div className="uk-margin">
                    <div className="uk-inline">
                        <span className="uk-form-icon" data-uk-icon="icon: search"/>
                        <input className="uk-input" type="text" name="email" placeholder="Artist, Discs and Tracks . . ."/>
                    </div>
                </div>
                <div className="uk-section">
                    <div className="uk-container">
                        <div className="uk-child-width-1-2@m uk-margin" data-uk-grid>
                        <ItemMusic />
                        <ItemMusic />
                        <ItemMusic />
                        <ItemMusic />
                        <ItemMusic />
                        <ItemMusic />
                        <ItemMusic />
                        <ItemMusic />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default MainTwo;