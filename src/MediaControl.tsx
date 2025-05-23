import { useEffect, useState } from "react";
import { TimeStampProps, useVideoPlayer } from "./VideoContext";
import TimeStamp from "./TimeStamp";


export default function MediaControl() {
  const { playerRef, showVideo, setShowVideo, playing, setPlaying } =
    useVideoPlayer();
  const [duration, setDuration] = useState(1);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [clickPosition, setClickPosition] = useState(0);

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

  useEffect(() => {
    const parseTimestamps = (timestampText: string[]) => {
      const stamps = timestampText.map((stamp: string) => {
        const [time, name] = stamp.split("-");
        const timesection = time.trim().split(":");
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
        // console.log(hours, minutes, seconds);
        // console.log(duration);
        console.log(sanctuaryTimestamps)
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;

        return {
          timePercent: (totalSeconds / duration) * 100,
          name: name.trim(),
        };
      });
      // console.log(stamps);
      setTimestamps(stamps);
    };

    parseTimestamps(sanctuaryTimestamps);

    return () => {};
  }, [duration]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement) {
      setIsDragging(true);
      const rect = e.target.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mousePercent = (mouseX / rect.width) * 100;
      setClickPosition(mousePercent);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!playerRef.current) {
      return;
    }
    if (!isDragging) return;

    if (e.target instanceof HTMLElement) {
      const rect = e.target.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mousePercent = (mouseX / rect.width) * 100;

      // Update the player time based on the click position
      const currentTime = (mousePercent / 100) * duration;
      playerRef.current.seekTo(currentTime);
      // console.log("set");
      // Update the progress state
      setCurrentProgress(mousePercent);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!playerRef.current) {
        return;
      }
      if (playerRef.current.player.isReady != false && !isDragging) {
        // console.log(playerRef.current);
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
  }, [isDragging, playerRef]);

  const handlePlayToggle = () => {
    setPlaying((prev: boolean) => !prev);
  };

  const handleShowPlayer = () => {
    setShowVideo((prev: boolean) => !prev);
  };

  return (
    <div className="media-control">
      <div
        className="progress-bar"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {timestamps.map((stamp, index) => (
          <TimeStamp
            key={"time-" + index}
            name={stamp.name}
            timePercent={stamp.timePercent}
          />
        ))}
        <div
          className="current-progress"
          style={{ width: `${currentProgress}%` }}
        ></div>
      </div>
      <div className="media-toggles">
        <button className={`toggle-play ${playing ? "": "highlight"}`} onClick={handlePlayToggle}>
          {playing == true ? "Pause" : "Play"}
        </button>
        <button className="toggle-show" onClick={handleShowPlayer}>
          {showVideo == true ? "Hide Original" : "Show Original"}
        </button>
      </div>
    </div>
  );
}
