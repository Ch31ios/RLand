import React, { useState } from 'react';
import Ingresar from './Ingreso';
import Registrar from './Registro';

const Header = () => {
  const [showIngresar, setShowIngresar] = useState(false);
  const [showRegistrar, setShowRegistrar] = useState(false);

  const handleShowIngresar = () => setShowIngresar(true);
  const handleShowRegistrar = () => setShowRegistrar(true);

  const handleCloseIngresar = () => setShowIngresar(false);
  const handleCloseRegistrar = () => setShowRegistrar(false);

  return (
    <header className="app-header">
      <div className="logo">
        <h1>Gestión de Terrenos</h1>
      </div>
      <div>
        <button className="header-ingresar" onClick={handleShowIngresar}>Ingresar</button>
        <button className="header-registrarse" onClick={handleShowRegistrar}>Registrarse</button>
      </div>

      {/* Modales */}
      <Ingresar show={showIngresar} handleClose={handleCloseIngresar} />
      <Registrar show={showRegistrar} handleClose={handleCloseRegistrar} />
    </header>
  );
}

export default Header;
