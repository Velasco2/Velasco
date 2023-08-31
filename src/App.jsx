import React from 'react';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <main className="main-content">
        <aside className="sidebar">
          {/* Agrega contenido para la barra lateral */}
        </aside>
        <section className="product-list">
          {/* Agrega contenido para la lista de productos */}
        </section>
      </main>
    </div>
  );
}

export default App;
