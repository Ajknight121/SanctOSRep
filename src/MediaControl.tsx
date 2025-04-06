import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useRef } from "react";
import TimeStamp from "./TimeStamp";

export type TimeStampProps = {
  timePercent: number,
  name: string
}

export default function MediaControl() {
  const playerRef = useRef(null);
  const [duration, setDuration] = useState(1);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [changed, setChanged] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [clickPosition, setClickPosition] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [timestamps, setTimestamps] = useState([] as TimeStampProps[]);

  const sanctuaryTimestamps = [
    "0:00 - Sanctuary OS",
    "2:33 - Sanctuary 1",
    "6:24 - Sanctuary 2",
    "11:56 - Sanctuary 3",
    "15:14 - Sanctuary 4",
    "19:56 - Sanctuary 5",
    "22:44 - Sanctuary 6",
    "27:23 - Sanctuary 7",
    "31:08 - Sanctuary 8",
    "35:30 - Sanctuary 9",
    "39:29 - Sanctuary 10",
    "42:44 - Sanctuary 11",
  ];

  const parseTimestamps = (timestampText: string[]) => {
    
    const stamps = timestampText.map((stamp:string) => {
      const [time, name] = stamp.split('-');
      const timesection = time.trim().split(':');
      let seconds = 0;
      let minutes = 0;
      let hours = 0;
      if (timesection.length == 1) {
        seconds = Number(timesection[0]);
      } else if (timesection.length == 2) {
        seconds = Number(timesection[1]);
        minutes = Number(timesection[0]);
      } else {
        seconds = Number(timesection[2]);
        minutes = Number(timesection[1]);
        hours = Number(timesection[0]);
      }
      console.log(hours, minutes,seconds)
      console.log(duration)
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;

      return { timePercent: (totalSeconds / duration) * 100, name: name.trim() };
    })
    console.log(stamps);
    setTimestamps(stamps);
  }

  useEffect(() => {
    parseTimestamps(sanctuaryTimestamps)
  
    return () => {
      
    }
  }, [duration])
  

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = e.target.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mousePercent = (mouseX / rect.width) * 100;
    setClickPosition(mousePercent);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const rect = e.target.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mousePercent = (mouseX / rect.width) * 100;

    // Update the player time based on the click position
    const currentTime = (mousePercent / 100) * duration;
    playerRef.current.seekTo(currentTime);
    console.log("set");
    // Update the progress state
    setCurrentProgress(mousePercent);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (playerRef.current.player.isReady != false) {
        console.log(playerRef.current);
        // console.log(playerRef.current.player)
        const total = playerRef.current.getDuration();
        const current = playerRef.current.getCurrentTime();
        setDuration(total);
        // console.log(current);
        // console.log(total);
        if (!isDragging) {
          setCurrentProgress((current / total) * 100);
        }
        // console.log((current / total) * 100);
      }
    }, 500); // Run every 500ms (half second)

    return () => clearInterval(intervalId);
  }, [changed, playerRef]);

  const handlePlayToggle = () => {
    setPlaying(!playing);
    if (playerRef && playerRef.current) {
      playerRef.current.togglePlay();
    }
  };

  const handleShowPlayer = () => {
    setShowVideo(!showVideo);
  }

  return (
    <div className="media-control">
      <div className={`video-player ${showVideo ? "": "hide"}`}>
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
      <button className="toggle-play" onClick={handlePlayToggle}>
        {playing == true ? "Pause" : "Play"}
      </button>
      <button className="toggle-play" onClick={handleShowPlayer}>
        {showVideo == true ? "Hide" : "Show"}
      </button>
      <div
        className="progress-bar"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {timestamps.map((stamp) => <TimeStamp name={stamp.name} timePercent={stamp.timePercent}/>)}
        <div
          className="current-progress"
          style={{ width: `${currentProgress}%` }}
        >
        </div>
      </div>
    </div>
  );
}
