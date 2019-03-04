import React, {Component} from 'react';
import { NavBar } from "../home/NavBar";

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
                        <p></p>
                    </div>
                </div>
            </div>
        );
    };
}

export default MainTwo;