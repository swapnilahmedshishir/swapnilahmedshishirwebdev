import React from "react";

export const GlowingEffect = ({ className }) => {
  return (
    <div
      className={`${className} animate-pulse opacity-70`}
      style={{
        background:
          "radial-gradient(circle, rgba(78,204,163,0.3) 0%, transparent 70%)",
      }}
    ></div>
  );
};
