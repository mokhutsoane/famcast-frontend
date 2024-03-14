import React from "react";

export default function PageHero({ title, subtitle }) {
  return (
    <div className="bg-default-8 bgrcorners pb-10 pt-24 pt-lg-24 pb-lg-10 mb-10 ">
      <div className="container custombg3 p-3 rounded-5">
        <h1 className="text-light gr-text-5">{title}</h1>
        <h2 className="text-light gr-text-8">{subtitle}</h2>
      </div>
    </div>
  );
}