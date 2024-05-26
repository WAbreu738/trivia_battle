import React, { useEffect, useState } from "react";
import PlayerSec from "./components/player";
import SPCategoryBtns from "./components/Buttons";

const SPCategoryWindow = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="bg-purple-900 bg-opacity-80 shadow-lg rounded-lg p-10 max-w-lg w-full mb-8">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Categories
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <SPCategoryBtns />
        </div>
      </div>

      {/* Players Joined Section */}
      <PlayerSec />
    </div>
  );
};

export default SPCategoryWindow;