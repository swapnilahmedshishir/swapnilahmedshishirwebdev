import React from "react";

export const FloatingDock = ({ items, className }) => {
  return (
    <div className={`flex justify-center p-2 ${className}`}>
      <div className="flex space-x-4">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
            title={item.title}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
