import React from 'react';

export const ItemMusic = ({id,name,country,gender,showRecording}) => (
    <div>
        <div className="uk-card uk-card-small uk-card-default uk-card-body">
            <p>Artist: {name}</p>
            <p>Country: {country}</p>
            <p>Gender: {gender}</p>
            <button className="uk-button uk-button-default" onClick={() => showRecording(id,name)} >Recordings</button>
        </div>
    </div>
);