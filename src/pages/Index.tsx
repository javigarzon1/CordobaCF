import { useState, useEffect } from "react"
import { clasificacion, RESULTADOS } from "../data/mockData"
import { noticias, type Noticia } from "../data/noticias"
import { Link } from "react-router-dom"

export default function Index(): JSX.Element {

  const destacadas: Noticia[] = noticias.filter((n) => n.destacada)
  const secundarias: Noticia[] = noticias.filter((n) => !n.destacada)

  const [slide, setSlide] = useState(0)

  useEffect(() => {
    if (destacadas.length === 0) return

    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % destacadas.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [destacadas.length])

  const proximoPartido = RESULTADOS.find((j) => j.victoria === null)
  const top5 = clasificacion.slice(0, 5)

  if (destacadas.length === 0) {
    return <div className="container mx-auto p-6">Cargando...</div>
  }

  const noticia = destacadas[slide]

  return (
    <div className="container mx-auto px-4 py-6 space-y-10">

      {/* ================= HERO ================= */}
      <section className="grid lg:grid-cols-3 gap-6">

        {/* principal */}
        <Link
          to={`/noticias/${noticia.slug}`}
          className="lg:col-span-2 relative rounded-xl overflow-hidden group"
        >
          <img
            src={noticia.imagen || "/placeholder.jpg"}
            className="h-[420px] w-full object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-0 p-6 text-white">
            <span className="text-xs bg-white/20 px-2 py-1 rounded">
              DESTACADA
            </span>

            <h1 className="text-2xl font-bold mt-2">
              {noticia.titulo}
            </h1>

            <p className="text-sm opacity-80 mt-1">
              {noticia.fecha}
            </p>
          </div>
        </Link>

        {/* secundarias */}
        <div className="space-y-4">
          {destacadas.slice(1, 4).map((n) => (
            <Link
              key={n.id}
              to={`/noticias/${n.slug}`}
              className="flex gap-3 hover:bg-gray-50 rounded-lg p-2 transition"
            >
              <img
                src={n.imagen || "/placeholder.jpg"}
                className="w-20 h-16 object-cover rounded"
              />

              <div>
                <p className="text-xs text-gray-500">{n.fecha}</p>
                <h3 className="text-sm font-semibold line-clamp-2">
                  {n.titulo}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </section>

      {/* ================= NOTICIAS ================= */}
      <section>

        <h2 className="text-xl font-bold mb-4">Últimas noticias</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {secundarias.map((n) => (
            <Link
              key={n.id}
              to={`/noticias/${n.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group"
            >
              <div className="overflow-hidden">
                <img
                  src={n.imagen || "/placeholder.jpg"}
                  className="h-44 w-full object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-4">
                <p className="text-xs text-gray-500">{n.fecha}</p>
                <h3 className="font-semibold line-clamp-2">
                  {n.titulo}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                  {n.resumen}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </section>

    </div>
  )
}