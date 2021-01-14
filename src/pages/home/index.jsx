import React, { useState } from "react";
import Filter from "../../components/filter";
import TaskForm from "../../components/task-form";
import TaskList from "../../components/task-list";
import "./styles.css";

const Home = () => {
  const defaultTasks = [
    {
      content: "Comprar pão",
      tag: "pendente",
    },
    {
      content: "Arrumar o armário",
      tag: "pendente",
    },
    {
      content: "Varrer a casa",
      tag: "finalizada",
    },
    {
      content: "Terminar o projeto ToDo",
      tag: "finalizada",
    },
  ];
  const [selected, setSelected] = useState("todas");
  const [tasks, setTasks] = useState(defaultTasks);

  const handleChangeTask = (newTask) => {
    let newTaskList = tasks.filter((item) => item.content !== newTask.content);
    setTasks([...newTaskList, newTask]);
  };

  const handleDelete = (deletedContent) => {
    let newTaskList = tasks.filter((item) => item.content !== deletedContent);
    setTasks([...newTaskList]);
  };

  return (
    <div className="home__container">
      <div className="home__filter">
        <Filter selected={selected} setSelected={setSelected} />
      </div>
      <div className="home__form">
        <TaskForm tasks={tasks} setTasks={setTasks} />
      </div>
      <div className="home__list">
        <TaskList
          tasks={tasks}
          selected={selected}
          setTasks={setTasks}
          handleChangeTask={handleChangeTask}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Home;
