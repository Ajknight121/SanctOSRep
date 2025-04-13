import "./App.css";

import star from "./images/Star-black.svg";
import logo from "./images/logo.svg";
import logoColon from "./images/Logo-colon.svg";
import logoTitle from "./images/LogoTitle.svg";
import background from "./images/ui-background.svg";
import cloudCreatures from "./images/cloud-creatures.png";
import bbHeadshot from "./images/bb-headshot.png";
import ccHeadshot from "./images/cc-headshot.png";

import { useContext, useRef } from "react";
import ReactPlayer from "react-player/youtube";
import MediaControl from "./MediaControl";
import {useVideoPlayer} from "./VideoContext";
import React from "react";
import TimeStamp from "./TimeStamp";

function App() {
  
  const {playerRef, showVideo, playing} = useVideoPlayer();

  return (
    <div className="page">
      <div className={`video-player ${showVideo ? "" : "hide"}`}>
        <ReactPlayer
          muted={false}
          url={"https://youtu.be/d3KfkKXRDzk"}
          width={"100%"}
          height={"100%"}
          volume={0.06}
          controls={true}
          playing={playing}
          loop={true}
          ref={playerRef}
        />
      </div>

      <div className="header col">
        <div className="header-logo">
          <img src={logoColon} width={"33%"} />
          <img src={logoTitle} width={"66%"} height={"120%"} />
          {/* <h1>DUSQK:</h1> */}
        </div>

        <div className="header-title-group col self-center">
          {/* <h1>Sanctuary OS</h1> */}
          <div className="header-route">
            <h2>{"->"} menu</h2>
          </div>
        </div>
      </div>
      <div className="content row">
        <div className="avatar-display"></div>
        <div className="menu col">
          <div className="sn-detail row inline">
            SN. <div className="sn-value">123456789-Ajknight</div>
            <div className="sn-label">Select*</div>
          </div>
          <ul className="nav-menu">
            <li className="nav-option">GAMES</li>
            <li className="nav-option">SETTINGS</li>
            <li className="nav-option nav-option-ext">MEM.CARD</li>
            <li className="nav-option">NOTEPAD</li>
            <div className="nav-menu-description">
              This is a description of the highlighted menu option
            </div>
          </ul>
          <ul className="sub-menu">
            <li className="nav-option">CREDITS</li>
          </ul>
        </div>
        <div className="creatures">
          <div className="creature-headshots row">
            <div className="creature-headshot">
              <img src={bbHeadshot} />
              <div className="creature-label">BB*</div>
            </div>
            <div className="creature-headshot">
              <img src={ccHeadshot} />
              <label className="creature-label">CC*</label>
            </div>
          </div>
          <div className="creature-large">
            <img src={cloudCreatures} />
          </div>
        </div>
      </div>
      <MediaControl player={playerRef} />
      <div className="background">
        <img className="background-svg" src={background} width={"90%"} />
      </div>
    </div>
  );
}

export default App;
