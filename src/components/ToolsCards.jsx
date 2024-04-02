import { useState, useRef } from "react";
import useHover from "../hooks/useHover";

const ToolsCards = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="flex">
      {data.map((result, i) => (
        <div
          key={i}
          className="flex flex-col p-2 rounded-md mr-3 dark:text-white"
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`px-10 ${
              hoveredIndex === i && "bg-white rounded-md p-1"
            } transition-all`}
          >
            <p
              className={`${
                hoveredIndex === i && `${result.color} font-900`
              } text-5xl flex justify-center`}
            >
              {result.icon}
            </p>
            {hoveredIndex === i && (
              <p
                className={`${result.color} text-center transition delay-150 duration-300 ease-in-out`}
              >
                {result.tech}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolsCards;
