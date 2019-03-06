import axios from 'axios';
var base_url = "http://musicbrainz.org/ws/2"

export const searchArtists = (artist) => {
    return axios.get(`${base_url}/artist/?query=artist:${artist}`);
}

export const getRecordings = (idArtist) => {
    return axios.get(`${base_url}/recording/?query=arid:${idArtist}`);
}