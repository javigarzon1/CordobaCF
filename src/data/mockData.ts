export interface Noticia {
  id: number;
  titulo: string;
  resumen: string;
  imagen: string;
  fecha: string;
  destacada?: boolean;
}

export const noticias: Noticia[] = [
  {
    id: 1,
    titulo: "El Córdoba ratifica su mejoría en casa con una victoria de VAR",
    resumen: "El Córdoba sigue lanzado gracias a la intervención del VAR en una victoria por 2-1 ante el Leganés en el Nuevo Arcángel.",
    imagen: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&h=500&fit=crop",
    fecha: "14 Feb 2026",
    destacada: true,
  },
  {
    id: 2,
    titulo: "El Córdoba duerme en 'playoffs' y el Pucela roza el descenso",
    resumen: "Victoria contundente por 3-1 ante el Valladolid que coloca al equipo blanquiverde en puestos de promoción de ascenso.",
    imagen: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=500&fit=crop",
    fecha: "31 Ene 2026",
    destacada: true,
  },
  {
    id: 3,
    titulo: "El Córdoba asalta el Gran Canaria por la vía rápida",
    resumen: "Victoria a domicilio ante Las Palmas (1-2) que confirma el gran momento de forma del equipo califal.",
    imagen: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop",
    fecha: "24 Ene 2026",
    destacada: true,
  },
  {
    id: 4,
    titulo: "Ania entra en la historia: 50 triunfos que le llevan al Top-5 del Córdoba",
    resumen: "El técnico asturiano alcanza las 50 victorias al frente del Córdoba CF, entrando en el selecto top 5 histórico del club.",
    imagen: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=500&fit=crop",
    fecha: "3 Feb 2026",
  },
  {
    id: 5,
    titulo: "El Almería-Córdoba, declarado partido de alto riesgo",
    resumen: "Las autoridades han clasificado el próximo encuentro entre almerienses y cordobeses como de alto riesgo por la rivalidad entre ambas aficiones.",
    imagen: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&h=500&fit=crop",
    fecha: "16 Feb 2026",
  },
  {
    id: 6,
    titulo: "El Córdoba mejora en el gol... y sueña",
    resumen: "El equipo blanquiverde ha mejorado notablemente su registro goleador, con 34 goles a favor que le permiten soñar con cotas más altas.",
    imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&h=500&fit=crop",
    fecha: "16 Feb 2026",
  },
  {
    id: 7,
    titulo: "El Córdoba remonta para alimentar su sueño",
    resumen: "Remontada en Huesca (1-2) que mantiene vivo el sueño de ascenso del equipo califal.",
    imagen: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&h=500&fit=crop",
    fecha: "12 Ene 2026",
  },
  {
    id: 8,
    titulo: "El Córdoba se queda sin Carlos Isaac, pero llena las arcas: 1 millón",
    resumen: "La venta del lateral derecho deja un millón de euros en las arcas del club cordobesista.",
    imagen: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=500&fit=crop",
    fecha: "16 Ene 2026",
  },
];

// ── Jugadores (Plantilla Córdoba CF 2025/26) ──
export interface Jugador {
  nombre: string;
  posicion: string;
  dorsal: number;
  grupo: "Porteros" | "Defensas" | "Centrocampistas" | "Delanteros";
}

export const jugadores: Jugador[] = [
   { nombre: "Iker Álvarez", posicion: "Portero", dorsal: 1, grupo: "Porteros" },
  { nombre: "Carlos Marín", posicion: "Portero", dorsal: 13, grupo: "Porteros" },
  { nombre: "Alex Arévalo", posicion: "Portero", dorsal: 26, grupo: "Porteros" },
  { nombre: "Ignacio Vilarrasa", posicion: "Lateral izquierdo", dorsal: 2, grupo: "Defensas" },
  { nombre: "Juan María Alcedo", posicion: "Lateral izquierdo", dorsal: 3, grupo: "Defensas" },
  { nombre: "Alex Martín", posicion: "Central", dorsal: 4, grupo: "Defensas" },
  { nombre: "Franck Fomeyem", posicion: "Central", dorsal: 12, grupo: "Defensas" },
  { nombre: "Xavi Sintes", posicion: "Central", dorsal: 15, grupo: "Defensas" },
  { nombre: "Rubén Alves", posicion: "Central", dorsal: 16, grupo: "Defensas" },
  { nombre: "Carlos Albarrán", posicion: "lateral derecho", dorsal: 21, grupo: "Defensas" },
  { nombre: "Álvaro Trilli", posicion: "Lateral derecho", dorsal: 22, grupo: "Defensas" },

  { nombre: "Isma Ruiz", posicion: "Mediocentro", dorsal: 8, grupo: "Centrocampistas" },
  { nombre: "Dani Requena", posicion: "Mediocentro", dorsal: 30, grupo: "Centrocampistas" },
  { nombre: "Alberto del Moral", posicion: "Mediocentro", dorsal: 20, grupo: "Centrocampistas" },
  { nombre: "Theo Zidane", posicion: "Mediocentro", dorsal: 7, grupo: "Centrocampistas" },
  { nombre: "Pedro Ortiz", posicion: "Mediocentro", dorsal: 24, grupo: "Centrocampistas" },

  { nombre: "Jacobo González", posicion: "Mediapunta", dorsal: 10, grupo: "Centrocampistas" },
  { nombre: "Dalisson", posicion: "Mediapunta", dorsal: 19, grupo: "Centrocampistas" },
  { nombre: "Goti", posicion: "Mediapunta", dorsal: 25, grupo: "Centrocampistas" },
  { nombre: "Diego Bri", posicion: "Extremo izquierdo", dorsal: 5, grupo: "Centrocampistas" },
  { nombre: "Adilson", posicion: "Extremo izquierdo", dorsal: 17, grupo: "Centrocampistas" },
  { nombre: "Cristian Carracedo", posicion: "Extremo derecho", dorsal: 23, grupo: "Centrocampistas" },
  { nombre: "JKevin Medina", posicion: "Extremo derecho", dorsal: 11, grupo: "Centrocampistas" },

  { nombre: "Nikolay Obolskii", posicion: "Delantero centro", dorsal: 9, grupo: "Delanteros" },
  { nombre: "Diego Percan", posicion: "Delantero centro", dorsal: 6, grupo: "Delanteros" },
  { nombre: "Adri Fuentes", posicion: "Delantero centro", dorsal: 18, grupo: "Delanteros" },
  { nombre: "Sergi Guardiola", posicion: "Delantero centro", dorsal: 14, grupo: "Delanteros" },

];

// ── Clasificación LaLiga Hypermotion 2025-26 (datos Marca) ──
export interface EquipoClasificacion {
  posicion: number;
  equipo: string;
  puntos: number;
  pj: number;
  pg: number;
  pe: number;
  pp: number;
  gf: number;
  gc: number;
  dg: number;
  
  esCordoba?: boolean;
}

export const clasificacion: EquipoClasificacion[] = [
  { posicion: 1, equipo: "Castellón", puntos: 48, pj: 26, pg: 14, pe: 6, pp: 6, gf: 44, gc: 25, dg },
  { posicion: 2, equipo: "Racing Santander", puntos: 47, pj: 26, pg: 14, pe: 5, pp: 7, gf: 52, gc: 35, dg: 17 },
  { posicion: 3, equipo: "Almería", puntos: 45, pj: 26, pg: 13, pe: 6, pp: 7, gf: 50, gc: 38, dg: 12 },
  { posicion: 4, equipo: "Deportivo", puntos: 43, pj: 26, pg: 12, pe: 7, pp: 7, gf: 40, gc: 29, dg: 11 },
  { posicion: 5, equipo: "Las Palmas", puntos: 41, pj: 26, pg: 10, pe: 11, pp: 5, gf: 30, gc: 21, dg: 9 },
  { posicion: 6, equipo: "Málaga", puntos: 41, pj: 26, pg: 12, pe: 5, pp: 9, gf: 39, gc: 31, dg: 8 },
  { posicion: 7, equipo: "Córdoba CF", puntos: 41, pj: 25, pg: 11, pe: 8, pp: 6, gf: 34, gc: 28, dg: 6, esCordoba: true },
  { posicion: 8, equipo: "Burgos CF", puntos: 40, pj: 26, pg: 11, pe: 7, pp: 8, gf: 29, gc: 25, dg: 4 },
  { posicion: 9, equipo: "Sporting", puntos: 40, pj: 26, pg: 12, pe: 4, pp: 10, gf: 36, gc: 34, dg: 2 },
  { posicion: 10, equipo: "Eibar", puntos: 35, pj: 26, pg: 9, pe: 8, pp: 9, gf: 28, gc: 28, dg: 0 },
  { posicion: 11, equipo: "Cádiz", puntos: 35, pj: 26, pg: 9, pe: 8, pp: 9, gf: 28, gc: 30, dg: -2 },
  { posicion: 12, equipo: "AD Ceuta FC", puntos: 35, pj: 25, pg: 10, pe: 5, pp: 10, gf: 30, gc: 36, dg: -6 },
  { posicion: 13, equipo: "Albacete", puntos: 34, pj: 26, pg: 9, pe: 7, pp: 10, gf: 32, gc: 37, dg: -5 },
  { posicion: 14, equipo: "Leganés", puntos: 32, pj: 26, pg: 8, pe: 8, pp: 10, gf: 28, gc: 27, dg: +1 },
  { posicion: 15, equipo: "Granada", puntos: 32, pj: 26, pg: 7, pe: 11, pp: 8, gf: 31, gc: 30, dg: +1 },
  { posicion: 16, equipo: "Real Sociedad B", puntos: 31, pj: 26, pg: 8, pe: 7, pp: 11, gf: 34, gc: 36, dg: -2 },
  { posicion: 17, equipo: "Huesca", puntos: 30, pj: 26, pg: 8, pe: 6, pp: 12, gf: 25, gc: 34, dg: -9 },
  { posicion: 18, equipo: "FC Andorra", puntos: 29, pj: 26, pg: 7, pe: 8, pp: 11, gf: 29, gc: 38, dg: -9 },
  { posicion: 19, equipo: "Valladolid", puntos: 28, pj: 26, pg: 7, pe: 7, pp: 12, gf: 26, gc: 36, dg: -10 },
  { posicion: 20, equipo: "Cultural Leonesa", puntos: 26, pj: 26, pg: 7, pe: 5, pp: 14, gf: 26, gc: 40, dg: -14 },
  { posicion: 21, equipo: "Zaragoza", puntos: 24, pj: 26, pg: 5, pe: 9, pp: 12, gf: 22, gc: 38, dg: -16 },
  { posicion: 22, equipo: "Mirandés", puntos: 21, pj: 26, pg: 5, pe: 6, pp: 15, gf: 26, gc: 43, dg:-17 },
];

// ── Calendario del Córdoba CF (temporada 2025/26) ──
export interface Jornada {
  jornada: number;
  rival: string;
  fecha: string;
  hora?: string;
  resultado?: string;
  local: boolean;
  estado: "victoria" | "empate" | "derrota" | "pendiente";
}

export const calendario: Jornada[] = [
  { jornada: 1, rival: "Sporting", fecha: "Ago 2025", resultado: "2-1", local: false, estado: "derrota" },
  { jornada: 2, rival: "Las Palmas", fecha: "Ago 2025", resultado: "1-3", local: true, estado: "derrota" },
  { jornada: 3, rival: "Valladolid", fecha: "Sep 2025", resultado: "0-0", local: false, estado: "empate" },
  { jornada: 4, rival: "Castellón", fecha: "Sep 2025", resultado: "2-1", local: true, estado: "victoria" },
  { jornada: 5, rival: "FC Andorra", fecha: "Sep 2025", resultado: "3-1", local: false, estado: "derrota" },
  { jornada: 6, rival: "Racing Santander", fecha: "Oct 2025", resultado: "2-2", local: true, estado: "empate" },
  { jornada: 7, rival: "Real Sociedad B", fecha: "Oct 2025", resultado: "1-1", local: false, estado: "empate" },
  { jornada: 8, rival: "Zaragoza", fecha: "Oct 2025", resultado: "0-1", local: false, estado: "victoria" },
  { jornada: 9, rival: "Cultural Leonesa", fecha: "Nov 2025", resultado: "1-0", local: true, estado: "victoria" },
  { jornada: 10, rival: "Almería", fecha: "Nov 2025", resultado: "1-1", local: true, estado: "empate" },
  { jornada: 11, rival: "Albacete", fecha: "Nov 2025", resultado: "1-3", local: false, estado: "victoria" },
  { jornada: 12, rival: "Ceuta", fecha: "Nov 2025", resultado: "2-0", local: true, estado: "victoria" },
  { jornada: 13, rival: "Málaga", fecha: "Dic 2025", resultado: "2-2", local: false, estado: "empate" },
  { jornada: 14, rival: "Deportivo", fecha: "Dic 2025", resultado: "1-3", local: true, estado: "derrota" },
  { jornada: 15, rival: "Granada", fecha: "Dic 2025", resultado: "1-1", local: false, estado: "empate" },
  { jornada: 16, rival: "Cádiz", fecha: "Dic 2025", resultado: "1-2", local: true, estado: "derrota" },
  { jornada: 17, rival: "Leganés", fecha: "Dic 2025", resultado: "0-0", local: false, estado: "empate" },
  { jornada: 18, rival: "Eibar", fecha: "Dic 2025", resultado: "0-0", local: true, estado: "empate" },
  { jornada: 19, rival: "Mirandés", fecha: "Ene 2026", resultado: "1-2", local: false, estado: "victoria" },
  { jornada: 20, rival: "Burgos CF", fecha: "3 Ene 2026", resultado: "2-0", local: true, estado: "victoria" },
  { jornada: 21, rival: "Huesca", fecha: "12 Ene 2026", resultado: "1-2", local: false, estado: "victoria" },
  { jornada: 22, rival: "Málaga", fecha: "18 Ene 2026", resultado: "0-1", local: true, estado: "derrota" },
  { jornada: 23, rival: "Las Palmas", fecha: "24 Ene 2026", resultado: "1-2", local: false, estado: "victoria" },
  { jornada: 24, rival: "Valladolid", fecha: "31 Ene 2026", resultado: "3-1", local: true, estado: "victoria" },
  { jornada: 25, rival: "Ceuta", fecha: "25 Feb 2026", hora: "19:00", local: false, estado: "pendiente" },
  { jornada: 26, rival: "Leganés", fecha: "14 Feb 2026", resultado: "2-1", local: true, estado: "victoria" },
  { jornada: 27, rival: "Almería", fecha: "21 Feb 2026", hora: "18:30", local: false, estado: "pendiente" },
  { jornada: 28, rival: "FC Andorra", fecha: "2 Mar 2026", hora: "20:30", local: true, estado: "pendiente" },
  { jornada: 29, rival: "Racing Santander", fecha: "8 Mar 2026", hora: "18:30", local: false, estado: "pendiente" },
  { jornada: 30, rival: "Real Sociedad B", fecha: "15 Mar 2026", hora: "18:00", local: true, estado: "pendiente" },
  { jornada: 31, rival: "Burgos CF", fecha: "22 Mar 2026", hora: "18:00", local: false, estado: "pendiente" },
];

// ── Partidos (Resúmenes YouTube) ──
export interface Partido {
  rival: string;
  resultado: string;
  fecha: string;
  youtube: string;
  miniatura: string;
  local: boolean;
}

export const partidos: Partido[] = [
  {
    rival: "Leganés",
    resultado: "2-1",
    fecha: "14 Feb 2026",
    youtube: "https://www.marca.com/futbol/segunda-division/2026/02/14/cordoba-2-1-leganes-resumen-laliga-hypermotion-video.html",
    miniatura: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=400&h=225&fit=crop",
    local: true,
  },
  {
    rival: "Valladolid",
    resultado: "3-1",
    fecha: "31 Ene 2026",
    youtube: "https://www.marca.com/futbol/segunda-division/2026/01/31/cordoba-cf-3-1-real-valladolid-resumen-mejores-jugadas-laliga-hypermotion-j24-video.html",
    miniatura: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=225&fit=crop",
    local: true,
  },
  {
    rival: "Las Palmas",
    resultado: "1-2",
    fecha: "24 Ene 2026",
    youtube: "https://www.marca.com/futbol/segunda-division/2026/01/24/palmas-1-2-cordoba-resumen-laliga-hypermotion-video.html",
    miniatura: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=225&fit=crop",
    local: false,
  },
  {
    rival: "Málaga",
    resultado: "0-1",
    fecha: "18 Ene 2026",
    youtube: "https://www.marca.com/futbol/segunda-division/2026/01/18/cordoba-cf-0-1-malaga-resumen-mejores-jugadas-laliga-hypermotion-j22-video.html",
    miniatura: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=225&fit=crop",
    local: true,
  },
  {
    rival: "Huesca",
    resultado: "1-2",
    fecha: "12 Ene 2026",
    youtube: "https://www.marca.com/futbol/segunda-division/2026/01/12/huesca-1-2-cordoba-cf-resumen-mejores-jugadas-laliga-hypermotion-j21-video.html",
    miniatura: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=225&fit=crop",
    local: false,
  },
  {
    rival: "Burgos CF",
    resultado: "2-0",
    fecha: "3 Ene 2026",
    youtube: "https://www.marca.com/futbol/segunda-division/2026/01/03/cordoba-2-0-burgos-resumen-goles-laliga-hypermotion-j20-video.html",
    miniatura: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=225&fit=crop",
    local: true,
  },
];
