import React, { useState } from 'react';
import InfoTerreno from './InfoTerreno'; 

const TerrenoCard = ({ title, ubicacion, tamano, precio, estado, imagen }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
 
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="terreno-card">
      <div className="terreno-details">
        <h3>{title}</h3>
        <p>{ubicacion}</p>
        <p>Tamaño: {tamano}</p>
        <p>Estado: {estado}</p>
        <p className="terreno-price">Precio: {precio}</p>
        <button onClick={showModal}>Mostrar Terreno</button>
      </div>


      {isModalVisible && (
        <InfoTerreno
          imagen={imagen}
          descripcion={`Terreno ubicado en ${ubicacion} con un tamaño de ${tamano}. Estado: ${estado}`}
          handleCancel={handleCancel} 
        />
      )}
    </div>
  );
};

export default TerrenoCard;


