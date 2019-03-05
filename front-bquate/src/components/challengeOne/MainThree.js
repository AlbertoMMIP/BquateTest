import React,{Component} from 'react';
import { NavBar } from "../home/NavBar";

class MainThree extends Component{

    render(){
        return(
            <div>
                <NavBar />
                    <div className="uk-container">
                        <h2>Query Exercises</h2>
                        <p>Using the file bd_musica.sql that we have provided you, using Nodejs and MySql, you must create the database needed for the following query exercises:</p>
                    </div>
                <div className="uk-section" >
                    <div className="uk-container" >
                        <ul data-uk-accordion>
                            <li className="uk-open">
                                <a className="uk-accordion-title" href="#">Query 1</a>
                                <div className="uk-accordion-content">
                                    <p>Create a View that lists all tracks with id, title, title of the album to which it belongs, email and country of origin of the user.</p>
                                    <pre>
                                        <code>CREATE VIEW 'INFO_TRACKS'  AS
                                        SELECT tracks.id,tracks.title,albums.title as 'album_title',users.email, country.name 
                                        FROM tracks 
                                        INNER JOIN albums ON tracks.albumid = albums.id
                                        INNER JOIN users ON albums.userid = users.id
                                        INNER JOIN country ON  users.countrycode = country.code
                                        </code>
                                    </pre>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title" href="#">Query 2</a>
                                <div className="uk-accordion-content">
                                    <p>List all albums from Peru that which genre is ROCK.</p>
                                    <pre>
                                        <code>
                                            SELECT albums.* FROM albums
                                            INNER JOIN users ON albums.userid = users.id
                                            WHERE albums.genre = 'ROCK' AND users.countrycode = 'PE';
                                        </code>
                                    </pre>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title" href="#">Query 3</a>
                                <div className="uk-accordion-content">
                                    <p>Find any track that does not have artist and update it with the user name, only tracks without artist if you modify other tracks you screw up.</p>
                                    <pre>
                                        <code>
                                            UPDATE tracks 
                                            INNER JOIN albums ON tracks.albumid = albums.id
                                            INNER JOIN users ON albums.userid = users.id
                                            SET tracks.artist = users.name
                                            WHERE tracks.artist = '';
                                        </code>
                                    </pre>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title" href="#">Query 4</a>
                                <div className="uk-accordion-content">
                                    <p>Set status 0 to any album which not have tracks and show them</p>
                                    <pre>
                                        <code>
                                            UPDATE albums  
                                            LEFT JOIN tracks ON tracks.albumid = albums.id
                                            SET albums.status = 0
                                            WHERE tracks.id = '';

                                            SELECT * FROM albums WHERE status = 0;

                                        </code>
                                    </pre>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title" href="#">Query 5</a>
                                <div className="uk-accordion-content">
                                    <p>Set status 0 to any user which not have track or albums and show them</p>
                                    <pre>
                                        <code>
                                            UPDATE users 
                                            LEFT JOIN albums ON users.id = albums.userid
                                            LEFT JOIN tracks ON albums.id = tracks.albums.id
                                            SET users.status = 0
                                            WHERE albums.id = '' OR track.id = ''

                                            SELECT * FROM users WHERE status = 0;
                                        </code>
                                    </pre>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title" href="#">Query 6</a>
                                <div className="uk-accordion-content">
                                    <p>List all tracks that here genre is different to genre of here album</p>
                                    <pre>
                                        <code>
                                            SELECT tracks.* FROM tracks 
                                            INNER JOIN albums ON tracks.albumid = albums.id
                                            WHERE tracks.genre &lt;&gt; albums.genre
                                        </code>
                                    </pre>
                                </div>
                            </li>
                            <li>
                            <a className="uk-accordion-title" href="#">Query 7</a>
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
