import React from "react";
import "./styles.css";

const Filter = ({ selected, setSelected }) => {
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  return (
    <div className="filter__container">
      <p className="filter__label">Filtrar por:</p>
      <select
        className="filter__select"
        value={selected}
        onChange={(e) => handleChange(e)}
      >
        <option value="todas">Todas</option>
        <option value="finalizada">Finalizadas</option>
        <option value="pendente">Pendentes</option>
      </select>
    </div>
  );
};

export default Filter;
