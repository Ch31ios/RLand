import '../ModalImagen.css'; 

const InfoTerreno = ({ imagen, descripcion, handleCancel }) => {
  const handleContact = () => {
    alert('Contactando al dueño...');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="modal-close" onClick={handleCancel}>
        </span>
        <h2>Detalles del Terreno</h2>
        <img
          src={imagen}
          alt="Terreno"
          className="modal-imagen"
        />
        <p>{descripcion}</p>
        <div className="modal-footer">
          <button onClick={handleCancel} className="btn-cancel">
            Cancelar
          </button>
          <button onClick={handleContact} className="btn-contact">
            Contactar al Dueño
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoTerreno;

