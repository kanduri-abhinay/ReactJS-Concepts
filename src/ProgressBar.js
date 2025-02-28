import { useEffect, useState } from "react";

function ProgressBar() {
  const [progress, updateProgress] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progress >= 100) {
        clearInterval(intervalId);
      }
      updateProgress((state) => {
        const newProgress = state + 1;
        if (newProgress === 100) clearInterval(intervalId);
        return newProgress;
      });
    }, 100);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundColor: "green",
          textAlign: "end",
          color: "white",
          transform: `translateX(${progress - 100}%)`,
          transition: "transform 0.1s ease-in",
        }}
      >
        {progress}%
      </div>
    </div>
  );
}
export default ProgressBar;
