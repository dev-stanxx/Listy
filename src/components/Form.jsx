import { useState } from "react";
import Card from "./Modal/Card.jsx";
import Overlay from "./Modal/Overlay.jsx";

const Form = ({ isVisible, onClose, addTask }) => {
    const [taskText, setTaskText] = useState("");

    function handleSubmit(event) {
        if (taskText.trim()) {
            event.preventDefault();
            addTask(taskText); // Call the addTask function with the current taskText
            setTaskText("");
        }
    }

    return (
        <>
            {isVisible ? <Overlay onclick={onClose} /> : ""}
            {isVisible && (
                <Card styles="abs">
                    <form className="form" onSubmit={handleSubmit}>
                        <h2 className="label_wrapper">
                            <label
                                className="label_lg"
                                htmlFor="new_todo-input"
                            >
                                What needs to be done?
                            </label>
                        </h2>
                        <input
                            type="text"
                            value={taskText}
                            onChange={e => setTaskText(e.target.value)}
                            autoComplete="off"
                            className="todo_input"
                            id="new_todo-input"
                            placeholder="Some text..."
                        />

                        <button
                            type="submit"
                            className="addBtn"
                            disabled={!taskText.trim()}
                        >
                            Add+
                        </button>
                    </form>
                </Card>
            )}
        </>
    );
};

export default Form;
