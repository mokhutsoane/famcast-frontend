import React, { useState, useRef } from "react";
import ReactPlayer from "react-player/";

const Player = (props) => {
  const [playing, setPlaying] = useState(false);
  const [errorPlaying, setErrorPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const playerRef = useRef(null);
  const [metadata, setMetadata] = useState(null);

  const handlePlay = () => {
    setPlaying(true);
    setErrorPlaying(false);
  };

  const handlePause = () => {
    setPlaying(false);
    if (playerRef.current) {
      playerRef.current.seekTo(0);
    }
  };

  const handleReady = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setErrorPlaying(true);
  };

  return (
    <div className="">
      {playing && (
        <div className="d-flex p-4 bg-licorice  rounded-10  text-bright-blue border-top-5 ">
          <div className="widget-icon  me-7">
            <i
              className="far fa-pause-circle text-white fa-3x p-3"
              style={{ color: "#000" }}
              onClick={handlePause}
            />
          </div>
          {loading ? (
            <span className="py-7 px-2 text-danger">Loading...</span>
          ) : (
            <span className="py-7 px-2 text-white">Streaming Live</span>
          )}
        </div>
      )}
      {!playing && (
        <div className="d-flex   p-4 bg-licorice   rounded-10  text-bright-blue border-top-5">
          <div className="widget-icon  me-7">
            <i
              className="far fa-play-circle text-red fa-3x p-3"
              onClick={handlePlay}
            />
          </div>
          <span className="py-7 px-2 text-red">Listen Live</span>
        </div>
      )}
      {errorPlaying && (
        <span className="text-danger p-3">Not Broadcasting at the moment</span>
      )}
      {metadata && (
        <div>
          <p className="text-danger p-3">{metadata.StreamTitle}</p>
        </div>
      )}
      <ReactPlayer
        ref={playerRef}
        url={props.url}
        playing={playing}
        width={0}
        height={0}
        onReady={handleReady}
        onError={handleError}
      />
    </div>
  );
};

export default Player;
