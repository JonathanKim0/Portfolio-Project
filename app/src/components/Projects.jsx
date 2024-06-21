import React from 'react'
import '../assets/css/Projects.css'
import Tool from './Tool'
import spotify from '../assets/img/spotify.png';

function Header() {
  return (
    <div id="projects-div">
      <div class="row-div">
        <div class="project">
          <div class="top-div">
            <img src={spotify} />
            <div class="text-div">
              Spotify is a Swedish audio streaming and media service provider
              founded on 23 April 2006 by Daniel Ek and Martin Lorentzon. It is
              one of the largest music streaming service providers, with over
              615 million monthly active users, including 239 million paying
              subscribers, as of March 2024. Spotify is listed (through a
              Luxembourg City-domiciled holding company, Spotify Technology
              S.A.[1]) on the New York Stock Exchange in the form of American
              depositary receipts.
            </div>
          </div>
          <div class="bottom-div">
            <Tool label="JavaScript" />
            <Tool label="HTML" />
            <Tool label="CSS" />
          </div>
        </div>
        <div class="project">hi</div>
        <div class="project">hi</div>
      </div>
    </div>
  );
}

export default Header