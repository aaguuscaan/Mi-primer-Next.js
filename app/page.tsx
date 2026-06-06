        export default function Home() {
          return (
            <>
              <nav>
                <ul className="flex justify-end p-4 bg-gray-800">
                  <li className="mx-4">
                    <a href="#" className="text-white hover:text-gray-400 transition">Formulario</a>
                  </li>
                  <li className="mx-4">
                    <a href="#" className="text-white hover:text-gray-400 transition">Resultados</a>
                  </li>
                  <li className="mx-4">
                    <a href="#" className="text-white hover:text-gray-400 transition">Contacto</a>
                  </li>
                </ul>
              </nav>
              <div>
                <h1 className="text-sm md:text-lg lg:text-2xl text-4xl font-bold text-black text-center p-4  hover:text-blue-900 transition">Aletheia</h1>
              </div>
              <div className="grid grid-cols-2 gap-4 p-4">
                <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-300 transition">
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Bienvenida a Aletheia</h2>
                  <p className="text-gray-700 mb-4">Aletheia es un retiro de feminidad para mujeres de entre 16 y 18 años. El retiro busca responder a las necesidades de las jóvenes en este periodo de su vida.</p>
                  <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-950 transition">¡Anotarme!</button>
                </div>
              </div>
            </>
          );
        }
