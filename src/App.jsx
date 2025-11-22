import './App.css'

export default function App() {
  return (
    <div className="container">

      {/* HEADER */}
      <header className="header">
        <div className="logo"></div>
        <nav className="nav">
          <a href="#">INICIO</a>
          <a href="#">PROGRAMAS</a>
          <a href="#">CONTACTO</a>
        </nav>
      </header>

      {/* TITULO */}
      <section className="title-section">
        <h2>SERVICIO NACIONAL DE APRENDIZAJE</h2>
        <h3>CENTRO DE GESTIÓN DE MERCADOS</h3>
        <h4>BOGOTÁ</h4>
      </section>

      {/* PROGRAMAS */}
      <section className="programs-grid">
        <div className="card">ADSO</div>
        <div className="card">REDES DE DATOS</div>
        <div className="card">ANIMACIÓN 3D</div>
        <div className="card">LOGÍSTICA</div>
        <div className="card">MERCADEO</div>
        <div className="card">SISTEMAS</div>
      </section>

      {/* FORMULARIO */}
      <section className="form-title">
        <h3>FORMULARIO DE CONTACTO</h3>
      </section>

      <section className="form-section">
        <form className="form">
          <label>NOMBRES</label>
          <input type="text" />

          <label>CORREO</label>
          <input type="email" />

          <label>MENSAJE</label>
          <textarea rows="3"></textarea>

          <button type="submit">ENVIAR</button>
        </form>
      </section>

    </div>
  );
}