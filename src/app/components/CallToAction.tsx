import React, { ReactNode } from 'react';

interface CallToActionProps {
    color: string;
    text: string;
    icon?: ReactNode;
}

const CallToAction: React.FC<CallToActionProps> = ({ color, text, icon }) => {
    let colorClass = "";
    if (color === "gray") {
        colorClass = "bg-kanzoto-gray-100 hover:bg-kanzoto-gray-200";
    }
    if (color === "lime") {
        colorClass = "bg-kanzoto-lime-100 hover:bg-kanzoto-lime-200";
    }
    return (
        <button className={`${colorClass} text-white p-4 rounded-md flex items-center`}>
            {text}
            {icon && <span className="mr-2">{icon}</span>}
        </button>
    );
};

export default CallToAction;