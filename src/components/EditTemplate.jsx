import React, { useState } from "react";
import Overlay from "./Modal/Overlay";
import { IoCheckmark } from "react-icons/io5";

const EditTemplate = ({ taskEdit, idEdit, onSave, setIsEditing }) => {
    const [newTask, setNewTask] = useState(taskEdit); // Initialize newTask with "taskEdit"

    const handleSubmit = event => {
        event.preventDefault();
        onSave(idEdit, newTask);
        setIsEditing(false);
    };

    return (
        <>
            <Overlay />
            <div className="editTodo">
                <form className="formEdit" onSubmit={handleSubmit}>
                    <label className="label_edt" htmlFor="edit-input">
                        <p>{taskEdit}</p>
                    </label>
                    <div className="formGroup">
                        <input
                            value={newTask}
                            type="text"
                            id="edit-input"
                            autoComplete="off"
                            onChange={e => setNewTask(e.target.value)}
                        />
                        <button type="submit" className="editBtn">
                            <IoCheckmark size={28} />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditTemplate;
