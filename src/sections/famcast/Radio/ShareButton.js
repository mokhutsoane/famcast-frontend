import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TumblrShareButton,
  TumblrIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from "next-share";

export default function ShareButton(props) {
  return (
    <div>
      <div className="text-light mb-3">
        <p className="text-light mb-3">SHARE THIS PAGE!</p>
        <TwitterShareButton
          className="p-2"
          url={props.url}
          title={props.title}
          hashtag={"#famcast"}
        >
          <TwitterIcon size={36} round />
        </TwitterShareButton>
        <FacebookShareButton
          className="p-2"
          url={props.url}
          quote={props.quote}
          hashtag={"#famcast"}
        >
          <FacebookIcon size={36} round />
        </FacebookShareButton>
        <TelegramShareButton
          className="p-2"
          url={props.url}
          title={props.title}
        >
          <TelegramIcon size={36} round />
        </TelegramShareButton>
        <WhatsappShareButton
          className="p-2"
          url={props.url}
          title={props.title}
          separator=":: "
        >
          <WhatsappIcon size={36} round />
        </WhatsappShareButton>
        <TumblrShareButton className="p-2" url={props.url} title={props.title}>
          <TumblrIcon size={36} round />
        </TumblrShareButton>
      </div>
    </div>
  );
}
