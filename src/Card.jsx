import { useState, useEffect } from 'react'

export default function Card() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode')
    return savedTheme === 'true'
  })

  const toggleTheme = () => setDarkMode(!darkMode)

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <div className="flex items-center justify-center py-4 transition-colors duration-500">
      <div
        className={`w-full max-w-sm p-8 rounded-2xl shadow-xl border transition duration-500 ${
          darkMode
            ? 'bg-gray-800 border-gray-700 text-white'
            : 'bg-white border-gray-200 text-gray-800'
        }`}
      >
        <div className="flex justify-center">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="avatar"
            className="rounded-full w-32 h-32 border-4 border-blue-500 shadow-md"
          />
        </div>

        <h2
          className={`mt-6 text-2xl font-bold text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          PEDRO RAMOS COTE
        </h2>

        <p
          className={`mt-3 text-center text-base leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Desarrollador de Software Front-End apasionado por React y el diseño UI/UX.
        </p>

        <div className="flex justify-center">
          <button
            onClick={toggleTheme}
            className={`mt-6 px-6 py-2 rounded-full font-semibold shadow-md transform transition duration-300 hover:scale-105 ${
              darkMode
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            CAMBIAR TEMA
          </button>
        </div>
      </div>
    </div>
  )
}
