import { useState } from "react";
import Header from "./components/Header.jsx";
import SearchTodo from "./components/SearchTodo.jsx";
import PlusButton from "./components/PlusButton.jsx";
import TitleBar from "./components/TitleBar.jsx";
import Todo from "./components/Todo.jsx";
import Form from "./components/Form.jsx";
import { nanoid } from "nanoid";
import "./App.css";

const initialTasks = [
    { id: `todo-${nanoid()}`, name: "Grocery Shopping", completed: false },
    { id: `todo-${nanoid()}`, name: "Another Task", completed: false } // Added a unique name for the second task
];
const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
    const [tasks, setTasks] = useState(initialTasks);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [filter, setFilter] = useState("All");
    function handleSetFilter(name) {
        setFilter(name);
    }

    const toggleTaskCompleted = id => {
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = id => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (id, newTask) => {
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, name: newTask } : task
            )
        );
    };

    const taskList = tasks
        .filter(FILTER_MAP[filter])
        .map(task => (
            <Todo
                key={task.id}
                id={task.id}
                name={task.name}
                completed={task.completed}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        ));

    const addTask = text => {
        setTasks([
            ...tasks,
            {
                id: `todo-${nanoid()}`,
                name: text,
                completed: false
            }
        ]);
        setIsFormVisible(false);
    };

    const handlePlusButtonClick = () => setIsFormVisible(true);

    const handleFormClose = () => setIsFormVisible(false);

    return (
        <div className="App">
            <Header />
            <SearchTodo />
            <TitleBar
                FILTER_NAMES={FILTER_NAMES}
                handleSetFilter={handleSetFilter}
                
            />
            <ul className="todo-list">{taskList}</ul>
            <Form
                onClose={handleFormClose}
                isVisible={isFormVisible}
                addTask={addTask}
            />

            <PlusButton onPlus={handlePlusButtonClick} />
        </div>
    );
}

export default App;
