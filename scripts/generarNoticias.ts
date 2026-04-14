import fs from "fs"
import Parser from "rss-parser"
import https from "https"

const parser = new Parser()
const RSS_URL = "https://rss.app/feeds/xOT5EkfkrOEzQDxg.xml"

export interface Noticia {
  id: number
  slug: string
  titulo: string
  resumen: string
  imagen: string
  fecha: string
  contenido: string
  instagram: string
  tipo: "post" | "reel" | "carousel"
  destacada?: boolean
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function detectarTipo(url: string) {
  if (url.includes("/reel/")) return "reel"
  if (url.includes("/p/")) return "post"
  return "carousel"
}

function fetchRSS(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https
      .get(url, res => {
        let data = ""

        res.on("data", chunk => {
          data += chunk
        })

        res.on("end", () => {
          const cleaned = data.replace(/&(?!amp;|lt;|gt;|quot;|apos;)/g, "&amp;")
          resolve(cleaned)
        })
      })
      .on("error", reject)
  })
}

async function getInstagramData(url: string) {
  try {
    const res = await fetch(
      `https://graph.instagram.com/oembed?url=${encodeURIComponent(url)}`
    )

    if (!res.ok) return null

    return await res.json()
  } catch {
    return null
  }
}

async function generarNoticias() {
  const xml = await fetchRSS(RSS_URL)
  const feed = await parser.parseString(xml)

  let noticiasExistentes: Noticia[] = []

  if (fs.existsSync("src/data/noticias.ts")) {
    const file = fs.readFileSync("src/data/noticias.ts", "utf8")
    const match = file.match(/\[(.|\n)*\]/)
    if (match) {
      noticiasExistentes = JSON.parse(match[0])
    }
  }

  const urlsExistentes = noticiasExistentes.map(n => n.instagram)

  const nuevasNoticias: Noticia[] = await Promise.all(
    feed.items
      .filter(item => !urlsExistentes.includes(item.link))
      .map(async (item, index) => {
        const titulo = item.title || "Post de Instagram"

        const ig = await getInstagramData(item.link || "")

        const imagen =
          ig?.thumbnail_url ||
          item["media:thumbnail"]?.$?.url ||
          item.enclosure?.url ||
          ""

        return {
          id: noticiasExistentes.length + index + 1,
          slug: slugify(titulo),
          titulo,
          resumen: titulo.slice(0, 120),
          imagen: imagen || "/placeholder.jpg",
          fecha: item.pubDate || "",
          contenido: titulo,
          instagram: item.link || "",
          tipo: detectarTipo(item.link || ""),
          destacada: false
        }
      })
  )

  const noticiasFinal = [...nuevasNoticias, ...noticiasExistentes]

  if (noticiasFinal.length > 0) {
    noticiasFinal[0].destacada = true
  }

  const file = `
export interface Noticia {
  id: number
  slug: string
  titulo: string
  resumen: string
  imagen: string
  fecha: string
  contenido: string
  instagram: string
  tipo: "post" | "reel" | "carousel"
  destacada?: boolean
}

export const noticias = ${JSON.stringify(noticiasFinal, null, 2)}
`

  fs.writeFileSync("src/data/noticias.ts", file)

  console.log("Noticias sincronizadas correctamente 🚀")
}

generarNoticias()