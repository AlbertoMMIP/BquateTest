import React,{Component} from 'react';
import { NavBar } from "../home/NavBar";

class MainThree extends Component{

    render(){
        return(
            <div>
                <NavBar />
                <div className="uk-section" >
                    <div className="uk-container" >
                        <ul data-uk-accordion>
                            <li className="uk-open">
                                <a className="uk-accordion-title" href="#">Ejercicio 1</a>
                                <div className="uk-accordion-content">
                                    <p>Create a View that lists all tracks with id, title, title of the album to which it belongs, email and country of origin of the user.</p>
                                    <pre><code>
                                        CREATE VIEW 
                                    </code></pre>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title" href="#">Ejercicio 2</a>
                                <div className="uk-accordion-content">
                                    <p>List all albums from Peru that which genre is ROCK.</p>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title" href="#">Ejercicio 3</a>
                                <div className="uk-accordion-content">
                                    <p>Find any track that does not have artist and update it with the user name, only tracks without artist if you modify other tracks you screw up.</p>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title" href="#">Ejercicio 4</a>
                                <div className="uk-accordion-content">
                                    <p>Set status 0 to any album which not have tracks and show them</p>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title" href="#">Ejercicio 5</a>
                                <div className="uk-accordion-content">
                                    <p>Set status 0 to any user which not have track or albums and show them</p>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title" href="#">Ejercicio 6</a>
                                <div className="uk-accordion-content">
                                    <p>List all tracks that here genre is different to genre of here album</p>
                                </div>
                            </li>
                            <li>
                            <a className="uk-accordion-title" href="#">Ejercicio 7</a>
                                <div className="uk-accordion-content">
                                    <p>Create a Web API</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};

export default MainThree;
