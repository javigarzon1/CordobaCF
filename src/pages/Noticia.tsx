import { useParams } from "react-router-dom"
import { noticia, type Noticia } from "../data/noticias"

export default function Noticia(): JSX.Element {

  const { slug } = useParams<{ slug: string }>()

  const noticiaEncontrada: Noticia | undefined = noticia.find(
    (n) => n.slug === slug
  )

  if (!noticiaEncontrada) {
    return <div className="container mx-auto p-6">Noticia no encontrada</div>
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">

      <img
        src={noticiaEncontrada.imagen || "/placeholder.jpg"}
        alt={noticiaEncontrada.titulo || ""}
        className="w-full rounded-lg mb-6"
      />

      <p>{noticiaEncontrada.fecha}</p>

      <h1>{noticiaEncontrada.titulo}</h1>

      <div>{noticiaEncontrada.contenido}</div>

    </div>
  )
}