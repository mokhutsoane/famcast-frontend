import React from "react";

export default function GalleryHero({ title, subtitle }) {
  return (
    <div className="custombg pb-10 pt-15 mb-8 ">
      <div className="container custombg3 p-3 rounded-5">
        <h1 className=" gr-text-9 ">{title}</h1>
        <h2 className=" gr-text-11">{subtitle}</h2>
      </div>
    </div>
  );
}
