import Card from './Card'

export default function App() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      {/* 🔹 Encabezado */}
      <header className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 w-full max-w-6xl mt-6 rounded-xl shadow-md transition">
        <nav className="flex justify-center gap-10 font-semibold mb-3 text-gray-800 dark:text-white">
          <a href="#inicio" className="hover:text-blue-500 transition">INICIO</a>
          <a href="#programas" className="hover:text-blue-500 transition">PROGRAMAS</a>
          <a href="#contacto" className="hover:text-blue-500 transition">CONTACTO</a>
        </nav>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          SERVICIO NACIONAL DE APRENDIZAJE
        </h2>
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
          CENTRO DE GESTIÓN DE MERCADOS
        </h3>
        <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">BOGOTÁ</p>
      </header>

      {/* 🔹 Sección de Cards */}
      <section
        id="programas"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-12 w-full max-w-6xl px-4"
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
        className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 mb-12 w-full max-w-lg rounded-xl shadow-md transition"
      >
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          CONTÁCTANOS
        </h3>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="NOMBRES"
            className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            placeholder="CORREO"
            className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            placeholder="MENSAJE"
            className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded h-24 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            ENVIAR
          </button>
        </form>
      </footer>
    </div>
  )
}
