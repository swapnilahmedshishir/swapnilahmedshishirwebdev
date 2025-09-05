import React, { useId, useMemo } from "react";
import { useEffect, useState } from "react";

export const SparklesCore = ({
  id,
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 100,
  particleColor = "#FFFFFF",
  className,
}) => {
  const uuid = useId();
  const ref = React.useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      setCanvasSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: particleDensity }, () => ({
      x: Math.random() * canvasSize.width,
      y: Math.random() * canvasSize.height,
      size: Math.random() * (maxSize - minSize) + minSize,
      speed: Math.random() * 0.5 + 0.1,
      direction: Math.random() * 360,
    }));
  }, [canvasSize, minSize, maxSize, particleDensity]);

  return (
    <div
      ref={ref}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ background }}
    >
      <canvas
        className="absolute inset-0 w-full h-full"
        width={canvasSize.width}
        height={canvasSize.height}
      />
    </div>
  );
};
