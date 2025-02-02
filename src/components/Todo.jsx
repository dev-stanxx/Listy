import React, { useState } from "react";
import { IoCreate, IoTrashSharp } from "react-icons/io5";
import EditTemplate from "./EditTemplate.jsx";
import Card from "./Modal/Card.jsx";

const Todo = ({
    id,
    name,
    completed,
    toggleTaskCompleted,
    editTask,
    deleteTask
}) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            <Card>
                <li className="todo-li">
                    <div className="c-cb">
                        <input
                            id={id}
                            type="checkbox"
                            checked={completed}
                            onChange={() => toggleTaskCompleted(id)}
                        />
                        <label
                            className="todo-label"
                            htmlFor={id}
                            style={{
                                textDecoration: completed
                                    ? "line-through"
                                    : "none"
                            }}
                        >
                            {name}
                        </label>
                    </div>
                    <div className="btn_group">
                        <span
                            className="todo-btn edit-btn"
                            onClick={() => setIsEditing(true)}
                        >
                            <IoCreate size={20} color="#fff" />{" "}
                        </span>
                        <span
                            className="todo-btn del-btn"
                            onClick={() => deleteTask(id)}
                        >
                            {" "}
                            <IoTrashSharp size={20} color="#fff" />
                        </span>
                    </div>
                </li>
            </Card>
            {isEditing && (
                <EditTemplate
                    taskEdit={name}
                    idEdit={id}
                    onSave={editTask}
                    setIsEditing={setIsEditing}
                />
            )}
        </>
    );
};

export default Todo;
