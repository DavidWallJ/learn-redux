/**
 * Created by david on 6/1/17.
 */
import axios from 'axios';
// all these action generators are exported for use

export const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
    // same as name: name
  }
};


export const addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
};

export const removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
};


export const addMovie = (movie, genre) => {
  return {
    type: 'ADD_MOVIE',
    genre,
    movie
  }
};

export const removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
};


export const startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
};

export const completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
};

export const fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());

    axios.get('http://ipinfo.io').then((res) => {
      // axios has been included in this project
      const loc = res.data.loc;
      const baseUrl = 'http://maps.google.com?q=';

      dispatch(completeLocationFetch(baseUrl + loc));
    });
  };
};