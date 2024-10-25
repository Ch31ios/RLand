import React from 'react';
import { FaFilter } from 'react-icons/fa';

const FilterSidebar =() => {
  return (
    <aside className="filter-sidebar">
      <h3><FaFilter /> Filtros</h3>
      <div className="filter-section">
        <label>Ubicación:</label>
        <select>
          <option>Ciudad Norte</option>
          <option>Ciudad Sur</option>
        </select>
      </div>
      <div className="filter-section">
        <label>Estado:</label>
        <select>
          <option>Venta</option>
          <option>Alquiler</option>
        </select>
      </div>
      <div className="filter-section">
        <label>Tamaño:</label>
        <input type="number" placeholder="Mínimo m²" />
      </div>
      <div className="filter-section">
        <label>Precio:</label>
        <input type="number" placeholder="Máximo USD" />
      </div>
      <button className="filter-button">Aplicar filtros</button>
    </aside>
  );
}

export default FilterSidebar;
