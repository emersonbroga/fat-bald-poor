import React, { useState } from "react";
import Switch from "./components/Switch";

const initialState = {
  fat: false,
  bald: false,
  poor: false
};

const App = () => {
  const [switches, setSwitches] = useState(initialState);

  const toggleSwitch = id => {
    const currentState = switches[id];
    if (currentState === undefined) return;
    const activeSwitches = Object.values(switches).filter(value => value).length;
    const maxActive = Object.values(switches).length - 1;
    const newState = activeSwitches === maxActive ? initialState : switches;
    setSwitches({ ...newState, [id]: !currentState });
  };

  return (
    <div className="container">
      <h1>Gordo, Careca ou Pobre</h1>
      <Switch onClick={toggleSwitch} id="fat" active={switches["fat"]} label="Gordo" />
      <Switch onClick={toggleSwitch} id="bald" active={switches["bald"]} label="Careca" />
      <Switch onClick={toggleSwitch} id="poor" active={switches["poor"]} label="Pobre" />
    </div>
  );
};

export default App;
