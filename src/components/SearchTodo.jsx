import { IoIosSearch } from "react-icons/io";

const SearchTodo = () => {
    return (
        <div className="formControl">
            <input
                className="inputSearch"
                type="text"
                name="search"
                placeholder="Search..."
            />
            <IoIosSearch className="io" />
        </div>
    );
};

export default SearchTodo;
