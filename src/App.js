import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import { PlaylistAddSharp } from '@material-ui/icons';

const spotify = new SpotifyWebApi();

function App() {
  const[{ user, token }, dispatch] = useDataLayerValue();

  //Run code based on a given condition
  useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash = "";
      const _token = hash.access_token;

      if(_token){

        dispatch({
          type: "SET_TOKEN",
          token: _token,
        })

        spotify.setAccessToken(_token);

        spotify.getMe().then(user=> {
          dispatch({
            type:"SET_USER",
            user: user,
          });
        });

        
        spotify.getUserPlaylists().then((playlists) =>{
          dispatch({
            type:"SET_PLAYLISTS",
            playlists: playlists,
          });

        });
      }
      
       spotify.getPlaylist('37i9dQZEVXcQOurjPOTPGO').then(response =>{
            dispatch({
              type: "SET_DISCOVER_WEEKLY",
              discover_weekly: response,     
            })
       });

      console.log("I HAVE A TOKEN>>> ", token);
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login/>
        )
      }
     

    </div>
  );
}

export default App;
