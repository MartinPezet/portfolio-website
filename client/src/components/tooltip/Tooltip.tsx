import React from 'react';
import "./tooltip.css";

interface TooltipProps {
    text: string;
    children?: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({text, children}) => {
  return (
    <div className="tooltip relative inline-block" tabIndex={1}>
        { children }
        <span className="tooltip-text absolute opacity-0 invisible left-1/2 transform -translate-x-1/2 py-2 px-3 text-center text-white bg-gray-950 rounded z-10 font-semibold transition">
            { text }
        </span>
    </div>
  )
}

export default Tooltip;