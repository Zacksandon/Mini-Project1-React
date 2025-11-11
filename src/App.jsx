import Card from './Card'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* 🔹 Encabezado */}
      <header className="border p-4 w-full max-w-6xl mt-4">
        <nav className="flex justify-center gap-10 font-semibold mb-2">
          <a href="#inicio" className="hover:text-blue-500">INICIO</a>
          <a href="#programas" className="hover:text-blue-500">PROGRAMAS</a>
          <a href="#contacto" className="hover:text-blue-500">CONTACTO</a>
        </nav>
        <h2 className="text-xl font-bold">
          SERVICIO NACIONAL DE APRENDIZAJE
        </h2>
        <h3 className="text-lg font-medium">
          CENTRO DE GESTIÓN DE MERCADOS
        </h3>
        <p className="text-sm mt-1">BOGOTÁ</p>
      </header>

      {/* 🔹 Sección de Cards */}
      <section
        id="programas"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8 w-full max-w-6xl"
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>

      {/* 🔹 Formulario */}
      <footer
        id="contacto"
        className="border p-6 mb-8 w-full max-w-lg rounded-md shadow-sm"
      >
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="NOMBRES"
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="CORREO"
            className="border p-2 rounded"
          />
          <textarea
            placeholder="MENSAJE"
            className="border p-2 rounded h-24"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            ENVIAR
          </button>
        </form>
      </footer>
    </div>
  )
}
