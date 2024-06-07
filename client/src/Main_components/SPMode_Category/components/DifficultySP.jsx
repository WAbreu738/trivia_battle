import React, { useState } from "react";
import { useStore } from "../../OptionsProvider";

const difficultyBtn = [
  { difficulty: "EASY", value: "easy" },
  { difficulty: "MEDIUM", value: "medium" },
  { difficulty: "HARD", value: "hard" },
  { difficulty: "RANDOM", value: "easy,medium,hard" },
];

const Difficulty = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setDifficulty } = useStore();
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleDifficultySelect = (selectedValue, difficulty) => {
    setSelectedDifficulty(difficulty); // Set the selected difficulty in state
    setDifficulty(selectedValue); // Set the selected difficulty value in global state
    closeMenu(); // Close the menu after selecting a difficulty
  };

  return (
    <div className="relative md:scale-100 scale-90">
      <button
        onClick={toggleMenu}
        className="md:w-24 w-fit text-center items-center px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        {selectedDifficulty === "easy,medium,hard"
          ? "RANDOM"
          : selectedDifficulty.toUpperCase() || "Difficulty"}
      </button>
      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-24 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {difficultyBtn.map((item, index) => (
              <p
                className=" cursor-pointer block px-4 py-2 text-sm text-gray-800 hover:text-gray-50 hover:bg-gray-700"
                role="menuitem"
                tabIndex="-1"
                onClick={() =>
                  handleDifficultySelect(item.value, item.difficulty)
                } // Call handleDifficultySelect with the selected difficulty value
                key={index}
                // value={item.value}
              >
                {item.difficulty}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Difficulty;
