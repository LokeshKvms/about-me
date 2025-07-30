import React from "react";

const HoverCard = ({ children, className = "" }) => {
  return (
    <div className={`relative m-5 max-w-xs ${className}`}>
      <div
        className="group relative z-10 block w-full -translate-x-0.5 -translate-y-0.5 overflow-hidden border-2 border-neutral-950 bg-white px-6 py-4 transition-transform hover:-translate-x-2 hover:-translate-y-2 active:translate-x-0 active:translate-y-0"
      >
        {children}
      </div>
      <div className="absolute inset-0 z-0 bg-neutral-950" />
    </div>
  );
};

export default HoverCard;
