import { useState, useEffect } from "react";

import SomeList from "./SomeList";

const Stopwatch = () => {
  const [currentTime, setCurrentTime] = useState(0);

  const timeConversion = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="time">
        <p>{timeConversion(currentTime)}</p>
      </div>
      <SomeList currentTime={timeConversion(currentTime)} />
    </div>
  );
};

export default Stopwatch;
