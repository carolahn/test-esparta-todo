import React from "react";
import Task from "../task";

const TaskList = ({ tasks, selected, handleChangeTask, handleDelete }) => {
  const filteredTasks = tasks.filter((task) => task.tag === selected);

  return (
    <div className="task-list__container">
      {selected === "todas"
        ? tasks.map(({ content, tag }, key) => (
            <div key={key}>
              <Task
                content={content}
                tag={tag}
                handleChangeTask={handleChangeTask}
                handleDelete={handleDelete}
              />
            </div>
          ))
        : filteredTasks.map(({ content, tag }, key) => (
            <div key={key}>
              <Task
                content={content}
                tag={tag}
                handleChangeTask={handleChangeTask}
                handleDelete={handleDelete}
              />
            </div>
          ))}
    </div>
  );
};

export default TaskList;
