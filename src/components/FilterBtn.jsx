const FilterBtn = ({ name, onFilter }) => {
    return (
        <button type="button" className="filter-Btn" onClick={onFilter}>
            <span>{name}</span>
        </button>
    );
};

export default FilterBtn;
