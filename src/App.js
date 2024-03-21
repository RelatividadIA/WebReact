import React from 'react';
import Clientes from './Clientes/Clientes.js';
import Productos from './Productos/Productos.js';
import Titulo from './Titulo/Titulo.js';
import Header from './Header/Header.js';

function App() {
  return (
    <div>
      <Header />
      <Titulo />
      <Productos />
      <Clientes />

    </div>
  );
}

export default App;
