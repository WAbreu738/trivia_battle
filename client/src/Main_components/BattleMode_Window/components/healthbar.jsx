import React from "react";

const HealthBar = ({ player, health, avatar }) => {
  return (
    <div className="flex flex-col items-center md:scale-100 scale-75">
      <img
        src={avatar}
        alt={player}
        className="w-16 h-16 border-4 border-cyan-950 rounded-full mb-2"
      />
      <div className="w-4 bg-gray-400 rounded-full h-64 relative">
        <div
          className="absolute bottom-0 bg-green-500 rounded-full"
          style={{ height: `${(health / 3000) * 100}%`, width: "100%" }}
        ></div>
      </div>
      <span className="mt-2 text-white text-xl font-bold">{health}</span>
    </div>
  );
};

export default HealthBar;
