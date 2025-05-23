import "./App.css";

import logoColon from "/images/Logo-colon.svg";
import logoTitle from "/images/LogoTitle.svg";
import background from "/images/ui-background.svg";
import cloudCreatures from "/images/cloud-creatures-bg-bright.png";
import bbHeadshot from "/images/bb-headshot-bg-bright.png";
import ccHeadshot from "/images/cc-headshot-bg-bright.png";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import MediaControl from "./MediaControl";
import { useVideoPlayer } from "./VideoContext";
import Notepad from "./components/Notepad";
import Credits from "./components/Credits";
import Settings from "./components/Settings";
import Memory from "./components/Memory";
import Games from "./components/Games";

import mrWashee from "/images/Mr._Washee_Washee.png";
import girl1 from "/images/girl1.png"
import girl2 from "/images/girl2.png"

import SnakeFlair from "/images/SnakeFlair.svg";
import AFlair from "/images/AFlair.svg";
import Barcode from "/images/Memory Card barcode.svg";
import MenuFlair from "/images/MenuHeadFlair.svg";
import settingsBarcode from "/images/settingsBarcode.svg";
import usa from "/images/USA.svg";
import A1 from "/images/A1.svg";

function App() {
  const { playerRef, showVideo, playing } = useVideoPlayer();
  const [mode, setMode] = useState("");
  const [note, setNote] = useState("");
  const [menuDesc, setMenuDesc] = useState("Welcome to Sactuary OS! Press play below to hear the music!")
  const [avatar, setAvatar] = useState("girl1");
  const [bg, setBg] = useState("/images/blue-sky.png")

  useEffect(() => {
    const savedNote = localStorage.getItem('note')
    if (savedNote) {
      setNote(savedNote)
    }
  }, [])

  const handleSetAvatar = (choice:string) => {
    // console.log(choice)
    setAvatar(choice);
  }

  const handleSetNote = (newNote: string) => {
    // Update the current text
    setNote(newNote)

    // Save to localStorage
    localStorage.setItem('note', newNote)
  }

  const handleMenuSelect = (option:string, desc:string) => {
    if (mode == option) {
      setMode("");
      setMenuDesc("Welcome to Sactuary OS! Press play below to hear the music!")
    } else {
      setMode(option);
      setMenuDesc(desc)
    }
  };

  return (
    <div style={{backgroundImage: `url(${bg})`}} className="page">
      <div className="background">
        <img rel="preload" className="background-svg" src={background} width={"90%"} />
      </div>
      <div className={`video-player ${showVideo ? "" : "hide"}`}>
        <ReactPlayer
          muted={false}
          url={"https://youtu.be/d3KfkKXRDzk?t=153"}
          width={"100%"}
          height={"100%"}
          volume={0.8}
          controls={true}
          playing={playing}
          loop={true}
          ref={playerRef}
          
        />
      </div>

      <div className="header col">
        <div className="header-logo">
          <img rel="preload" src={logoColon} width={"33%"} />
          <img rel="preload" className="logo-os" src={logoTitle} width={"66%"} height={"120%"} />
          {/* <h1>DUSQK:</h1> */}
        </div>

        <div className="header-title-group col self-center">
          <div className="header-route">
            {"->"} menu
          </div>
        </div>
      </div>
      <div className="content row">
        <div className="avatar-display">
          <div className="avatar-wrapper">
            {avatar == "mrwashee" ? <img rel="preload" className="avatar" src={mrWashee} /> : ""}
            {avatar == "girl1" ? <img rel="preload" className="avatar" src={girl1} /> : ""}
            {avatar == "girl2" ? <img rel="preload" className="avatar" src={girl2} /> : ""}
          </div>
        </div>
        <div className="menu col">
          <div className="sn-detail row inline">
            SN. <div className="sn-value">123456789-Ajknight</div>
            <div className="sn-label">Select* {">>"}</div>
          </div>
          <ul className="nav-menu">
            <li
              className={`nav-option ${mode == "games" && "selected"}`}
              onClick={() => handleMenuSelect("games", "Play games with your pets and custom avatar!")}
            >
              GAMES
            </li>
            <li
              className={`nav-option ${mode == "settings" && "selected"}`}
              onClick={() => handleMenuSelect("settings", "Customize your OS to be your sanctuary")}
            >
              SETTINGS
            </li>
            <img rel="preload" src={settingsBarcode} className="flair-settings-barcode"/>
            <li
              className={`nav-option ${
                mode == "memory" && "selected"
              } nav-option-ext`}
              onClick={() => handleMenuSelect("memory", "Upload your music, games, avatars and pets!")}
            >
              MEM.CARD
            </li>
            <li
              className={`nav-option ${mode == "notepad" && "selected"}`}
              onClick={() => handleMenuSelect("notepad", "Leave yourself a note, I'll remember it for you!")}
            >
              NOTEPAD
            </li>
            <div className="nav-menu-description">
              {menuDesc}
            </div>
          </ul>
          <ul className="sub-menu">
            <li
              className={`nav-option ${mode == "credits" && "selected"}`}
              onClick={() => handleMenuSelect("credits", "Please check out the original creators! I had fun remaking thier work!")}
            >
              CREDITS
            </li>
          </ul>
        </div>
        <div className="side-section">
          <div className="creatures">
            <div className="creature-headshots row">
              <div className="creature-headshot">
                <img rel="preload" src={bbHeadshot} />
                <div className="creature-label">BB*</div>
              </div>
              <div className="creature-headshot">
                <img rel="preload" src={ccHeadshot} />
                <div className="creature-label">CC*</div>
              </div>
            </div>
          </div>
          <div className="side-section-large">
            {mode == "" ? (<img rel="preload" src={cloudCreatures} width={"100%"} height={"auto"}/>): ""}
            {mode == "games" ? <Games />: ""}
            {mode == "memory" ? <Memory />: ""}
            {mode == "settings" ? <Settings avatar={avatar} setAvatar={handleSetAvatar} bg={bg} setBg={setBg}/>: ""}
            {mode == "notepad" ? <Notepad note={note} setNote={handleSetNote} />: ""}
            {mode == "credits" ? <Credits />: ""}
          </div>
        </div>
        <img rel="preload" src={SnakeFlair} className="flair-snake"/>
      <img rel="preload" src={AFlair} className="flair-a"/>
      <img rel="preload" src={Barcode} className="flair-bottom-barcode"/>
      <img rel="preload" src={Barcode} className="flair-side-barcode"/>
      <img rel="preload" src={A1} className="flair-a1"/>
      
      <img rel="preload" src={usa} className="flair-usa"/>
      <img rel="preload" src={MenuFlair} className="flair-menu"/>
      </div>
      <MediaControl />
      
    </div>
  );
}

export default App;
