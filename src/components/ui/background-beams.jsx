import React from "react";

export const BackgroundBeams = ({ className }) => {
  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1221] opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px, rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
    </div>
  );
};
