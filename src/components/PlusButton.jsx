import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const PlusButton = ({ onPlus }) => {
    return (
        <div className="plusBtn" onClick={onPlus}>
            <FaPlus />
        </div>
    );
};

export default PlusButton;
