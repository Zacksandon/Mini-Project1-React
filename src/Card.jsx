import { useState, useEffect } from 'react'

export default function Card() {
  // 🔹 Estado del tema oscuro
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode')
    return savedTheme === 'true'
  })

  // 🔹 Alternar entre temas
  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  // 🔹 Guardar preferencia en localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <div
      className={`max-w-sm mx-auto p-6 shadow-md rounded-lg mt-5 transition duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      {/* Imagen del perfil */}
      <img
        src="https://i.pravatar.cc/150?img=3"
        alt="avatar"
        className="rounded-full w-32 h-32 mx-auto"
      />

      {/* Nombre */}
      <h2
        className={`mt-4 text-2xl font-semibold text-center ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}
      >
        PEDRO RAMOS COTE
      </h2>

      {/* Descripción */}
      <p
        className={`mt-2 text-center ${
          darkMode ? 'text-white' : 'text-gray-600'
        }`}
      >
        Desarrollador de Software Front-End apasionado por React y el diseño UI/UX
      </p>

      {/* Botón de cambio de tema */}
      <button
        onClick={toggleTheme}
        className={`mt-4 px-4 py-2 rounded shadow-md transition duration-300 ${
          darkMode ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
        } hover:scale-105`}
      >
        CAMBIAR TEMA
      </button>
    </div>
  )
}
