import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player/youtube'
import { useRef } from "react";
export default function MediaControl() {
  const playerRef = useRef(null);
  const [duration, setDuration] = useState(1);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [changed, setChanged] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [clickPosition, setClickPosition] = useState(0);
  const [playing, setPlaying] = useState(false);

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
    console.log('set')
    // Update the progress state
    setCurrentProgress(mousePercent);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (playerRef.current.player.isReady != false) {
        console.log(playerRef.current)
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

  }

  return (
    <div className="media-control">
      <div className="video-player">
        <ReactPlayer muted={false} url={"https://youtu.be/d3KfkKXRDzk"} width={"100%"} height={"100%"} volume={.06} controls={true} playing={playing} loop={true} ref={playerRef}/>
      </div>
      <div className="toggle-play" onClick={handlePlayToggle}>{playing == true ? "Pause": "Play"}</div>
      <div
        className="progress-bar"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div
          className="current-progress"
          style={{ width: `${currentProgress}%` }}
        ></div>
      </div>
    </div>
  );
}
