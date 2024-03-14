import React, { useEffect } from "react";

function RadioPlayer({ image, streamurl, radioname }) {
  useEffect(() => {
    window.addEventListener("load", function () {
      lunaRadio("famcastradio", {
        token: "WFNfVVNlZiBVYSBsUw==",
        userinterface: "small",
        backgroundcolor: "rgba(0,0,0,0.54)",
        fontcolor: "#ffffff",
        hightlightcolor: "#fa225b",
        fontname: "",
        googlefont: "",
        fontratio: "0.4",
        radioname: radioname,
        scroll: "true",
        scrollradioname: "left",
        scrolltitle: "right",
        coverimage: image,
        onlycoverimage: "false",
        coverstyle: "square",
        usevisualizer: "real",
        visualizertype: "5",
        multicolorvisualizer: "true",
        color1: "#e66c35",
        color2: "#d04345",
        color3: "#85a752",
        color4: "#067dcc",
        visualizeropacity: "0.9",
        visualizerghost: "0.0",
        itunestoken: "1000lIPN",
        metadatatechnic: "stream-icy-meta",
        ownmetadataurl: "",
        streamurl: streamurl,
        streamtype: "icecast2",
        icecastmountpoint: "",
        radionomyid: "",
        radionomyapikey: "",
        radiojarid: "",
        radiocoid: "",
        shoutcastpath: "/;?type=http&nocache=107036",
        shoutcastid: "1",
        streamsuffix: "",
        metadatainterval: "20000",
        volume: "90",
        debug: "true",
        uselocalstorage: "false",
        autoplay: "false",
        displayliveicon: "true",
        displayvisualizericon: "true",
        usestreamcorsproxy: "false",
        corsproxy: "",
      });
    });
  }, []);

  return (
    <div className="container px-0 mx-auto fixed-bottom bg-dark">
      <div style={{ width: "100%", height: "55px" }} id="famcastradio"></div>
    </div>
  );
}

export default RadioPlayer;
