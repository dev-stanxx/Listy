import { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import FilterBtn from "./FilterBtn.jsx";
import Overlay from "./Modal/Overlay.jsx";
import Card from "./Modal/Card.jsx";

const TitleBar = ({ FILTER_NAMES, handleSetFilter }) => {
    const [toggleFilter, setToggleFilter] = useState(false);
    const [currentFilter, setCurrentFilter] = useState("All"); // Default filter

    const filterList = FILTER_NAMES.map(name => (
        <FilterBtn
            name={name}
            key={name}
            onFilter={() => {
                handleSetFilter(name); //update the filter names
                setCurrentFilter(name); // Update current filter
                setToggleFilter(false); // Close the filter overlay after selection
            }}
        />
    ));

    const handleToggleFilter = () => {
        setToggleFilter(prevState => !prevState);
    };

    return (
        <>
            <div className="TitleBar">
                <span>{currentFilter} Todo</span> {/* Use currentFilter */}
                <IoFilterOutline
                    className="filter-icon fa"
                    onClick={handleToggleFilter}
                />
            </div>
            {toggleFilter && (
                <>
                    <Overlay onclick={handleToggleFilter} />{" "}
                    {/* Correct prop name */}
                    <Card styles="top">
                        <div className="btn_group">{filterList}</div>
                    </Card>
                </>
            )}
        </>
    );
};

export default TitleBar;
