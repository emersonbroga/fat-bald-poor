import React from "react";
import Icon from "./Icon";

const Switch = props => {
  const { onClick, active, label, id } = props;
  return (
    <div
      onClick={() => {
        onClick(id);
      }}
      className={`item ${active ? "on" : "off"}`}
    >
      <label>{label}</label> <Icon id="switch" />
    </div>
  );
};

export default Switch;
