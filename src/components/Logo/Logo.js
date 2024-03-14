import React from "react";
import Link from "next/link";

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link legacyBehavior href="/">
      <a className={`d-block ${className}`} {...rest}>
        {white ? (
          <img
            src={"/q/image/logo.png"}
            alt=""
            className="rcorners7"
            width={50}
            height={50}
          />
        ) : (
          <img
            src={"/q/image/logo.png"}
            className="rcorners7"
            alt=""
            width={50}
            height={50}
          />
        )}
      </a>
    </Link>
  );
};

export default Logo;
