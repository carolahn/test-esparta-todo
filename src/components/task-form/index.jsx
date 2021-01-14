import React, { useState } from "react";
import "./styles.css";

const TaskForm = ({ tasks, setTasks }) => {
  const [value, setValue] = useState("");
  const [tag, setTag] = useState("pendente");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      content: value,
      tag: tag,
    };
    setTasks([...tasks, newTask]);
    setValue("");
  };

  const handleChange = (event) => {
    setTag(event.target.value);
  };
  return (
    <div className="task-form__container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="task-form__input">
          <label>
            Tarefa:
            <input
              type="text"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </label>
        </div>
        <div className="task-form__select">
          <label>
            Tag:
            <select onChange={(e) => handleChange(e)}>
              <option value="pendente">Pendente</option>
              <option value="finalizada">Finalizada</option>
            </select>
          </label>
        </div>
        <div className="task-form__button">
          <input type="submit" value="Adicionar" />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
