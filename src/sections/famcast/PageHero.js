import React from "react";

export default function PageHero({ title, subtitle }) {
  return (
    <div className="bg-blackish-blue bgrcorners pb-10 pt-30 pt-lg-30 pb-lg-10 mb-10 p-3">
      <div className="container bg-dark p-3 rounded">
        <h1 className="text-light gr-text-5">{title}</h1>
        <h2 className="text-light gr-text-8">{subtitle}</h2>
      </div>
    </div>
  );
}
