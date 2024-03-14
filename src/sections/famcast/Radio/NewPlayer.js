import React from "react";
import Script from "next/script";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";

export default function NewPlayer({ radioname, streamurl }) {
  useEffect(() => {
    // lunaRadio("lunaradio", {
    //   token: "WFNfVVNlZiBVYSBsUw==",
    //   radioname: radioname,
    //   streamurl: streamurl,
    //   streamtype: "icecast2",
    //   metadatatechnic: "stream-icy-meta",
    //   icecastmountpoint: "",
    // });
  }, []);

  return (
    <Container>
      <div className=" ">
        <div className="flex-left">
          <div id="player" style={{ width: "100%", height: "60px" }}></div>

          <Script
            id="player"
            strategy="afterInteractive"
            src="https://hosted.muses.org/mrp.js"
          >
            {`
             MRP.insert({
                  'url':' ${streamurl},
                  'codec':'mp3',
                  'volume':100,
                  'autoplay':true,
                  'jsevents':true,
                  'buffering':5,
                  'title':${radioname},
                  'welcome':'Live Streaming',
                  'wmode':'transparent',
                  'skin':'xavi',
                  'width':250,
                  'height':95
                  });
            `}
          </Script>
        </div>
      </div>
    </Container>
  );
}
