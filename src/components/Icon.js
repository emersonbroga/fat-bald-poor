import React from "react";

const Icon = ({ id }) => {
  switch (id) {
    case "switch":
      return (
        <svg
          enableBackground="new 0 0 96 96"
          className="switch"
          version="1.1"
          viewBox="0 0 96 96"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="outer"
            d="M64,16H32C14.33,16,0,30.33,0,48s14.33,32,32,32h32c17.67,0,32-14.33,32-32S81.67,16,64,16z M64,72H32  C18.745,72,8,61.255,8,48s10.745-24,24-24h32c13.255,0,24,10.745,24,24S77.255,72,64,72z"
          />
          <path
            className="inner"
            d="M32,32c-8.836,0-16,7.164-16,16c0,8.836,7.164,16,16,16s16-7.164,16-16C48,39.164,40.836,32,32,32z M32,56  c-4.418,0-8-3.582-8-8c0-4.418,3.582-8,8-8s8,3.582,8,8C40,52.418,36.418,56,32,56z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
