
import '../Modal.css'

const Registrar = ({ show, handleClose }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Registrarse</h2>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="date" placeholder="Fecha de nacimiento" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="email" placeholder="Confirmar correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <input type="password" placeholder="Confirmar contraseña" />
        <div className="modal-buttons">
          <button className="submit">Registrarse</button>
          <button className="close" onClick={handleClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default Registrar;
