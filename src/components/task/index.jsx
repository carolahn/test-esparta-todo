import React from "react";
import "./styles.css";

const Task = ({ content, tag, handleChangeTask, handleDelete }) => {
  const handleOnClick = (content, tag) => {
    let newTag = "";
    if (tag === "pendente") {
      newTag = "finalizada";
    } else {
      newTag = "pendente";
    }
    let newTask = {
      content: content,
      tag: newTag,
    };

    handleChangeTask(newTask);
  };

  return (
    <>
      {tag === "pendente" ? (
        <div
          className="task__container"
          style={{
            background: "linear-gradient(to right, #c9394c 0%, #ffffff 100%)",
          }}
        >
          <div className="task__text">{content}</div>
          <div className="task__button">
            {tag === "pendente" ? (
              <button onClick={() => handleOnClick(content, tag)}>
                Finalizar
              </button>
            ) : (
              <button onClick={() => handleOnClick(content, tag)}>
                Reativar
              </button>
            )}
          </div>
          <div className="task__button--delete">
            <button onClick={() => handleDelete(content)}>X</button>
          </div>
        </div>
      ) : (
        <div
          className="task__container"
          style={{
            background: "linear-gradient(to right, #5395d3 0%, #ffffff 100%)",
          }}
        >
          <div className="task__text">{content}</div>
          <div className="task__button">
            {tag === "pendente" ? (
              <button onClick={() => handleOnClick(content, tag)}>
                Finalizar
              </button>
            ) : (
              <button onClick={() => handleOnClick(content, tag)}>
                Reativar
              </button>
            )}
          </div>
          <div className="task__button--delete">
            <button onClick={() => handleDelete(content)}>X</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Task;
