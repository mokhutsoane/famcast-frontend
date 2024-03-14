import React, { useState, useRef } from "react";
import ReactHowler from "react-howler";

const Player2 = ({ mediaurl, metadata }) => {
  const [playing, setPlaying] = useState(false);
  const [errorPlaying, setErrorPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const playerRef = useRef(null);

  const handleOnLoad = () => {
    setLoading(false);
  };

  const handlePlay = () => {
    setPlaying(true);
    setErrorPlaying(false);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handleReady = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setErrorPlaying(true);
  };

  const iceMeta = metadata
    ? `<meta name="ice-meta" content="${metadata}" />`
    : "";

  const customHtml5 = `<audio controls ${iceMeta}><source src="${mediaurl}" /></audio>`;

  return (
    <div>
      {playing && (
        <div className="d-flex  bg-azureish-white   rounded-10  text-bright-blue border-top-5">
          <i
            className="far fa-pause-circle fa-3x p-3"
            style={{ color: "#000" }}
            onClick={handlePause}
          />
          {loading ? (
            <span className="py-7 px-2 text-danger">Loading...</span>
          ) : (
            <span className="py-7 px-2 text-black">Streaming Live</span>
          )}
        </div>
      )}
      {!playing && (
        <div className="d-flex  bg-azureish-white   rounded-10  text-bright-blue border-top-5">
          <i
            className="far fa-play-circle fa-3x p-3"
            style={{ color: "#000" }}
            onClick={handlePlay}
          ></i>
          <span className="py-7 px-2 text-black">Listen Live</span>
        </div>
      )}
      {errorPlaying && (
        <span className="text-danger p-3">Not Broadcasting at the moment</span>
      )}

      {metadata && <p>{metadata}</p>}

      <ReactHowler
        src={mediaurl}
        html5={customHtml5}
        onEnd={handlePause}
        onStop={handlePause}
        onPlay={handlePlay}
        onLoad={handleOnLoad}
        playing={playing}
        onReady={handleReady}
        onError={handleError}
      />
    </div>
  );
};

export default Player2;
