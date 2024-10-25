import '../Modal.css'; // Usa los estilos para el modal

const Ingresar = ({ show, handleClose }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Ingresar</h2>
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <div className="modal-buttons">
          <button className="submit">Ingresar</button>
          <button className="close" onClick={handleClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default Ingresar;
