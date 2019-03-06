import React, {Component} from 'react';
import { NavBar } from "../home/NavBar";
import { searchArtists, getRecordings } from '../../services';
import { ItemMusic } from '../common/ItemMusic';

class MainTwo extends Component{
    constructor(){
        super();
        this.state = {
            artists:[],
            recordings:[],
            selectedArtist:''
        };
    }
    
    search = (e) => {
        e.preventDefault();
        let artistToSearch = document.getElementById('inputSearch').value;
        if (artistToSearch === '') artistToSearch = 'Juan Gabriel';
        searchArtists(artistToSearch)
            .then(artists => {
                let sortArray = [];
                sortArray = artists.data.artists.map(element => {
                    return {
                        id:element.id,
                        name:element.name,
                        gender:element.gender,
                        type:element.type,
                        country:element.country
                        }
                });
                this.setState({artists:sortArray});
            });
    }

    getRecords = (id,artist) =>{
        getRecordings(id)
                .then(records => {
                    this.setState({recordings:records.data.recordings,selectedArtist:artist});
                })
    }

    render(){
        let {artists,recordings,selectedArtist} = this.state;
        return (
            <div>
                <NavBar />
                <div className="uk-section uk-container">
                    <div className="uk-inline uk-flex uk-flex-center">
                        <span className="uk-form-icon" data-uk-icon="icon: search"/>
                        <input className="uk-input" type="text" name="artistToSearch" id="inputSearch" placeholder="Search Artists . . ."/>
                        <button className="uk-button uk-button-primary uk-inline" onClick={this.search}  >Search</button>
                    </div>
                </div>
                <div className="uk-section uk-container">
                    <div className="uk-text-center" data-uk-grid>
                        <div className="uk-width-1-2">
                            {artists.length > 0 ?
                            <h3>Artists</h3> : null}
                            <ul className="uk-list uk-list-striped">
                            {artists.length > 0 ?
                                artists.map((art,idx) =>
                                <li key={idx}>
                                    <ItemMusic key={art.id} id={art.id} name={art.name} country={art.country} gender={art.gender} showRecording={this.getRecords} />
                                </li> ): null    
                            }
                            </ul>
                        </div>
                        <div className="uk-width-1-2">
                            <h3>{selectedArtist}</h3>
                            <ul className="uk-list uk-list-striped">
                            {recordings.length > 0 ?
                                recordings.map((rec,idx) =>
                                <li key={idx}>
                                    {rec.title}
                                </li> ): null    
                            }
                            </ul>
                        </div>                        
                    </div>
                </div>                
            </div>
        );
    };
}

export default MainTwo;