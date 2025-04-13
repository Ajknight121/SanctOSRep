import {
  useState,
  useContext,
  createContext,
  useRef,
  ReactNode,
} from "react";

export type TimeStampProps = {
  timePercent: number;
  name: string;
};

export const VideoPlayerContext = createContext(undefined);

export function VideoPlayerProvider({ children }: { children: ReactNode }) {
  const playerRef = useRef<HTMLElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [playing, setPlaying] = useState(false);

  

  return (
    <VideoPlayerContext.Provider value={{ playerRef, showVideo, setShowVideo, playing, setPlaying }}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export function useVideoPlayer() {
  const context = useContext(VideoPlayerContext);
  if (!context) {
    throw new Error("useVideoPlayer outside of context");
  }
  return context;
}
