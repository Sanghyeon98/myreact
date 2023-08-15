import React, { useState } from "react";

const EventHandling = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);
  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={handleClick}>{isToggleOn ? "On" : "Off"}</button>
    </div>
  );
};

export default EventHandling;
